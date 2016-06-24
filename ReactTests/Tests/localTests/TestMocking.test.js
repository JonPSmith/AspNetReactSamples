import expect from 'expect';

import OuterFunction from '../../localSrc/OuterFunction';
import innerMock from '../../mocks/MockInnerFunction'

describe('Test Mocking simple', function () {

    it('check normal operation works',
    () => {
        expect(OuterFunction()).toEqual('Inner Function');
    });

    it('mock InnerFunction with a module',
    () => {
        const inject = require('inject?../localSrc/InnerFunction!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                '../localSrc/InnerFunction': innerMock
            }).default;
        expect(outerFunctionWithMock()).toEqual('Mocked Function', 'Did not mock');
    });

    it('mock InnerFunction with local function',
    () => {
        const localFunc = () => { return 'local mock'};
        const inject = require('inject?../localSrc/InnerFunction!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                '../localSrc/InnerFunction': localFunc
            }).default;
        expect(outerFunctionWithMock()).toEqual('local mock', 'Did not mock');
    });
});