import expect from 'expect';

import constants from '../../../ReactWebPack.CoreRC2/app/constants';

describe('CardActionCreators', () => {
    let returnedActionObject = [];
    const mockKanbanAPISuccess = {
        fetchCards() {
            return Promise.resolve('Test data')
        }
    };

    let inject = require('inject?../api/KanbanApi!../../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
    let cardActions = inject({
        '../api/KanbanApi': mockKanbanAPISuccess
    }).default;

    describe('fetchCards', () => {

        it('success', () => {
            cardActions.fetchCards()((actionObject) => {
                returnedActionObject.push( actionObject);
            });

            debugger;
            expect(returnedActionObject.length).toEqual(1);
            expect(returnedActionObject[0].type).toEqual(constants.FETCH_CARDS);
        });
    });
}); 
