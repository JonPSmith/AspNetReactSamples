import expect from 'expect';

import OuterFunction from '../../localSrc/OuterFunction';
import innerMock from '../../mocks/MockInnerFunction'

describe.only('Test Mocking simple', function () {

    it('check normal operation works',
    () => {
        var result = OuterFunction();
        expect(result.innerFuncValue).toEqual('Inner Function');
        expect(result.innerValue).toEqual(42);
    });

    it('mock InnerFunction with a module',
    () => {
        const inject = require('inject?./InnerFunction!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                './InnerFunction': innerMock
            }).default;
        var result = outerFunctionWithMock();
        expect(result.innerFuncValue).toEqual('Mocked Function', 'Did not mock');
        expect(result.innerValue).toEqual(42);
    });

    it('mock InnerFunction with local function',
    () => {
        const localFunc = () => { return 'local mock'};
        const inject = require('inject?./InnerFunction!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                './InnerFunction': localFunc
            }).default;
        var result = outerFunctionWithMock();
        expect(result.innerFuncValue).toEqual('local mock', 'Did not mock');
        expect(result.innerValue).toEqual(42);
    });

    it('mock InnerValue with new constant',
    () => {
        const inject = require('inject?./InnerValue!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                './InnerValue': 12345
            }).default;
        var result = outerFunctionWithMock();
        expect(result.innerFuncValue).toEqual('Inner Function');
        expect(result.innerValue).toEqual(12345);
    });

    it('mock InnerFunction and InnerValue',
    () => {
        const inject = require('inject!../../localSrc/OuterFunction');
        const outerFunctionWithMock = inject({
                './InnerFunction': () => { return 'local mock'},
                './InnerValue': 12345
            }).default;
        var result = outerFunctionWithMock();
        expect(result.innerFuncValue).toEqual('local mock');
        expect(result.innerValue).toEqual(12345);
    });
});