import expect from 'expect';

import constants from '../../ReactWebPack.CoreRC2/app/constants';

describe.only('CardActionCreators', () => {
    describe('fetchCards', () => {
        let returnedActionObject = [];
        const mockKanbanAPI = {
            fetchCards() {
                return Promise.resolve('Test data')
            }
        };

        let inject = require('inject?../api/KanbanApi!../../ReactWebPack.CoreRC2/app/actions/CardActionCreators');
        let fetchCardsActions = inject({
            '../api/KanbanApi': mockKanbanAPI
        }).default;

        it('success', () => {
            debugger;
            fetchCardsActions.fetchCards()((actionObject) => {
                returnedActionObject.push( actionObject);
            });

            debugger;
            expect(returnedActionObject.length).toEqual(1);
            expect(returnedActionObject[0].type).toEqual(constants.FETCH_CARDS);
        });
    });
});
