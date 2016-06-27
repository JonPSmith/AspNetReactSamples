import expect from 'expect';
import MockPromise from '../../mocks/MockPromise';

import constants from '../../../ReactWebPack.CoreRC2/app/constants';
import CardActionCreatorsActual from '../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators';

describe.only('CardActionCreators', () => {
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
            }
        };

        let inject = require('inject?../api/KanbanApi!../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
        let cardActions = inject({
            '../api/KanbanApi': mockKanbanAPISuccess
        }).default;

        it('fetchCards', () => {
            let returnedActionObjects = [];
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toEqual(constants.FETCH_CARDS_SUCCESS);
            expect(returnedActionObjects[1].payload.response).toEqual('my data');
        });


        it('addCard', () => {
            let returnedActionObjects = [];
            cardActions.addCard({ fromReact: 'client side' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.CREATE_CARD);
            expect(returnedActionObjects[1].type).toEqual(constants.CREATE_CARD_SUCCESS);
            expect(returnedActionObjects[1].payload.card.fromReact).toEqual('client side');
            expect(returnedActionObjects[1].payload.response.fromServer).toEqual('server side');
        });

        it('updateCard', () => {
            let returnedActionObjects = [];
            cardActions.updateCard({ id: 'org card id' }, { newTitle: 'new title' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.UPDATE_CARD);
            expect(returnedActionObjects[1].type).toEqual(constants.UPDATE_CARD_SUCCESS);
            expect(returnedActionObjects[1].payload.card.id).toEqual('org card id');
            expect(returnedActionObjects[1].payload.draftCard.newTitle).toEqual('new title');
            expect(returnedActionObjects[1].payload.response.fromServer).toEqual('server side');
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
            }
        };

        let inject = require('inject?../api/KanbanApi!../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
        let cardActions = inject({
            '../api/KanbanApi': mockKanbanAPIFail
        }).default;

        it('fetchCards', () => {
            let returnedActionObjects = [];
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toEqual(constants.FETCH_CARDS_ERROR);
            expect(returnedActionObjects[1].payload.error).toEqual('my error');
        });


        it('addCard', () => {
            let returnedActionObjects = [];
            cardActions.addCard({ fromReact: 'client side' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.CREATE_CARD);
            expect(returnedActionObjects[1].type).toEqual(constants.CREATE_CARD_ERROR);
            expect(returnedActionObjects[1].payload.error).toEqual('my error');
        });

        it('updateCard', () => {
            let returnedActionObjects = [];
            cardActions.updateCard({ id: 'org card id' }, { newTitle: 'new title' })((actionObject) => {
                returnedActionObjects.push(actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.UPDATE_CARD);
            expect(returnedActionObjects[1].type).toEqual(constants.UPDATE_CARD_ERROR);
            expect(returnedActionObjects[1].payload.error).toEqual('my error');
        });

    });

    describe('sync methods', () => {
        it('updateCardStatus', () => {
            var result = CardActionCreatorsActual.updateCardStatus(1, 2);
            expect(result.type).toEqual(constants.UPDATE_CARD_STATUS);
            expect(result.payload.cardId).toEqual(1);
            expect(result.payload.listId).toEqual(2);
            expect(result.meta.throttle).toEqual(true);     //this causes the action to be throttled by Redux middleware
        });
        it('updateCardStatus', () => {
            var result = CardActionCreatorsActual.updateCardPosition(1, 2);
            expect(result.type).toEqual(constants.UPDATE_CARD_POSITION);
            expect(result.payload.cardId).toEqual(1);
            expect(result.payload.afterId).toEqual(2);
            expect(result.meta.throttle).toEqual(true);     //this causes the action to be throttled by Redux middleware
        });
    });
}); 
