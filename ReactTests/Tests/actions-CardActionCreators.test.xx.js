import expect from 'expect';

import { CardActionCreators } from '../../ReactWebPack.CoreRC2/app/actions/CardActionCreators.js';

describe('CardActionCreators', () => {
    describe.only('fetchCards', () => {
        it('success', () => {
            let returnedActionObject;
            debugger;
            CardActionCreators.fetchCards((actionObject) => {
                returnedActionObject = actionObject;
            });

            debugger;
            expect(returnedActionObject).toExist();
        });
    });
});
