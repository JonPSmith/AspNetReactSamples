import expect from 'expect';
import MockPromise from '../../mocks/MockPromise';

import constants from '../../../ReactWebPack.CoreRC2/app/constants';

describe('CardActionCreators, success', () => {
    const mockKanbanAPISuccess = {
        fetchCards() {
            return new MockPromise(true)
        },
        addCard(card) {
            return new MockPromise(true, {fromServer: 'server side'})
        }
    };

    let inject = require('inject?../api/KanbanApi!../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
    let cardActions = inject({
        '../api/KanbanApi': mockKanbanAPISuccess
    }).default;

    describe('fetchCards', () => {

        it('success', () => {
            let returnedActionObjects = [];
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push( actionObject);
            });
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toEqual(constants.FETCH_CARDS_SUCCESS);
            expect(returnedActionObjects[1].payload.response).toEqual('my data');
        });
    });

    describe('addCard', () => {

        it('success', () => {
            let returnedActionObjects = [];
            cardActions.addCard({ fromReact: 'client side'})((actionObject) => {
                returnedActionObjects.push( actionObject);
            });
            debugger;
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.CREATE_CARD);
            expect(returnedActionObjects[1].type).toEqual(constants.CREATE_CARD_SUCCESS);
            expect(returnedActionObjects[1].payload.card.fromReact).toEqual('client side');
            expect(returnedActionObjects[1].payload.response.fromServer).toEqual('server side');
        });
    });
}); 
