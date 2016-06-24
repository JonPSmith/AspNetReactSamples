import expect from 'expect';
import MockPromise from '../../mocks/MockPromise';

import constants from '../../../ReactWebPack.CoreRC2/app/constants';

describe.only('CardActionCreators', () => {
    let returnedActionObjects = [];
    const mockKanbanAPISuccess = {
        fetchCards() {
            return new MockPromise(true)
        }
    };

    let inject = require('inject?../api/KanbanApi!../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
    let cardActions = inject({
        '../api/KanbanApi': mockKanbanAPISuccess
    }).default;

    describe('fetchCards', () => {

        it('success', () => {
            cardActions.fetchCards()((actionObject) => {
                returnedActionObjects.push( actionObject);
            });

            debugger;
            expect(returnedActionObjects.length).toEqual(2);
            expect(returnedActionObjects[0].type).toEqual(constants.FETCH_CARDS);
            expect(returnedActionObjects[1].type).toEqual(constants.FETCH_CARDS_SUCCESS);
            expect(returnedActionObjects[1].payload.response).toEqual('my data');
        });
    });
}); 
