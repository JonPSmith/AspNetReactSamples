import expect from 'expect';
import MockPromise from '../../mocks/MockPromise';

import constants from '../../../app/constants';
import CardActionCreatorsActual from '../../../app/actions/CardActionCreators';

describe('ReactWebPack.CoreRC2/app/actions/CardActionCreators', () => {
    describe('async methods: success path', () => {
        const mockKanbanAPISuccess = {
            fetchCards() {
                return new MockPromise(true)
            },
            addCard(card) {
                return new MockPromise(true, { fromServer: 'server side' })
            },
            updateCard(card, draftCard) {
                return new MockPromise(true, { fromServer: 'server side' })
            },
            persistCardDrag(cardId, cardStatus, cardIndex) {
                return new MockPromise(true, { status: cardStatus,  row_order_position: cardIndex})
            }
        };

        let inject = require('inject?../api/KanbanApi!../../../app/actions/CardActionCreators');
        let cardActions = inject({
            '../api/KanbanApi': mockKanbanAPISuccess
        }).default;

        it('fetchCards', () => {
            let returnedActionObjects = [];
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toBe(constants.FETCH_CARDS_SUCCESS);
            expect(returnedActionObjects[1].payload.response).toBe('my data');
        });


        it('addCard', () => {
            let returnedActionObjects = [];
            cardActions.addCard({ fromReact: 'client side' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.CREATE_CARD);
            expect(returnedActionObjects[1].type).toBe(constants.CREATE_CARD_SUCCESS);
            expect(returnedActionObjects[1].payload.card.fromReact).toBe('client side');
            expect(returnedActionObjects[1].payload.response.fromServer).toBe('server side');
        });

        it('updateCard', () => {
            let returnedActionObjects = [];
            cardActions.updateCard({ id: 'org card id' }, { newTitle: 'new title' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.UPDATE_CARD);
            expect(returnedActionObjects[1].type).toBe(constants.UPDATE_CARD_SUCCESS);
            expect(returnedActionObjects[1].payload.card.id).toBe('org card id');
            expect(returnedActionObjects[1].payload.draftCard.newTitle).toBe('new title');
            expect(returnedActionObjects[1].payload.response.fromServer).toBe('server side');
        });

        it('persistCardDrag', () => {
            let returnedActionObjects = [];
            cardActions.persistCardDrag({ id: 3 })(
                (actionObject) => {returnedActionObjects.push(actionObject);},
                () => {
                    return { cards: [
                        { id : 1, status: 'card 1 status'},
                        { id : 3, status: 'card 3 status'},
                        { id : 2, status: 'card 2 status'}
                    ]}
                }
            );
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.PERSIST_CARD_DRAG);
            expect(returnedActionObjects[1].type).toBe(constants.PERSIST_CARD_DRAG_SUCCESS);
            expect(returnedActionObjects[1].payload.cardProps.id).toBe(3);
            expect(returnedActionObjects[1].payload.response.status).toBe('card 3 status');
            expect(returnedActionObjects[1].payload.response.row_order_position).toBe(1);
        });
    });

    describe('async methods: fail path', () => {
        const failMockPromise = new MockPromise(false);
        const mockKanbanAPIFail = {
            fetchCards() {
                return failMockPromise
            },
            addCard(card) {
                return failMockPromise
            },
            updateCard(card, draftCard) {
                return failMockPromise
            },
            persistCardDrag(cardId, cardStatus, cardIndex) {
                return failMockPromise
            }
        };

        let inject = require('inject?../api/KanbanApi!../../../app/actions/CardActionCreators');
        let cardActions = inject({
            '../api/KanbanApi': mockKanbanAPIFail
        }).default;

        it('fetchCards', () => {
            let returnedActionObjects = [];
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toBe(constants.FETCH_CARDS_ERROR);
            expect(returnedActionObjects[1].payload.error).toBe('my error');
        });


        it('addCard', () => {
            let returnedActionObjects = [];
            cardActions.addCard({ fromReact: 'client side' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.CREATE_CARD);
            expect(returnedActionObjects[1].type).toBe(constants.CREATE_CARD_ERROR);
            expect(returnedActionObjects[1].payload.error).toBe('my error');
        });

        it('updateCard', () => {
            let returnedActionObjects = [];
            cardActions.updateCard({ id: 'org card id' }, { newTitle: 'new title' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.UPDATE_CARD);
            expect(returnedActionObjects[1].type).toBe(constants.UPDATE_CARD_ERROR);
            expect(returnedActionObjects[1].payload.error).toBe('my error');
        });

        it('persistCardDrag', () => {
            let returnedActionObjects = [];
            cardActions.persistCardDrag({ id: 3 })(
                (actionObject) => {returnedActionObjects.push(actionObject);},
                () => {
                    return { cards: [
                        { id : 1, status: 'card 1 status'},
                        { id : 3, status: 'card 3 status'},
                        { id : 2, status: 'card 2 status'}
                    ]}
                }
            );
            expect(returnedActionObjects.length).toBe(2);
            expect(returnedActionObjects[0].type).toBe(constants.PERSIST_CARD_DRAG);
            expect(returnedActionObjects[1].type).toBe(constants.PERSIST_CARD_DRAG_ERROR);
            expect(returnedActionObjects[1].payload.error).toBe('my error');
        });
    });

    describe('sync methods', () => {
        //Note: these do not use the KanbanApi so we can use the actual module
        it('updateCardStatus', () => {
            var result = CardActionCreatorsActual.updateCardStatus(1, 2);
            expect(result.type).toBe(constants.UPDATE_CARD_STATUS);
            expect(result.payload.cardId).toBe(1);
            expect(result.payload.listId).toBe(2);
            expect(result.meta.throttle).toBe(true);     //this causes the action to be throttled by Redux middleware
        });
        it('updateCardStatus', () => {
            var result = CardActionCreatorsActual.updateCardPosition(1, 2);
            expect(result.type).toBe(constants.UPDATE_CARD_POSITION);
            expect(result.payload.cardId).toBe(1);
            expect(result.payload.afterId).toBe(2);
            expect(result.meta.throttle).toBe(true);     //this causes the action to be throttled by Redux middleware
        });
        it('createDraft', () => {
            var result = CardActionCreatorsActual.createDraft('draft card');
            expect(result.type).toBe(constants.CREATE_DRAFT);
            expect(result.payload.card).toBe('draft card');
        });
        it('updateDraft', () => {
            var result = CardActionCreatorsActual.updateDraft('field1', 'new content');
            expect(result.type).toBe(constants.UPDATE_DRAFT);
            expect(result.payload.field).toBe('field1');
            expect(result.payload.value).toBe('new content');
        });
    });
}); 
