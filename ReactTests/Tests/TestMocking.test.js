import expect from 'expect';

import OuterFunction from '../ExampleReact/MockTestOuterFunction';
import innerMock from '../mocks/MockInnerFunction'

describe('Test Mocking simple', function () {

    it('check normal operation works',
    () => {
        expect(OuterFunction()).toEqual('Inner Function');
    });

    it('mock InnerFunction with a module',
    () => {
        const inject = require('inject?../ExampleReact/MockTestInnerFunction!../ExampleReact/MockTestOuterFunction');
        const outerFunctionWithMock = inject({
                '../ExampleReact/MockTestInnerFunction': innerMock
            }).default;
        expect(outerFunctionWithMock()).toEqual('Mocked Function', 'Did not mock');
    });

    it('mock InnerFunction with local function',
    () => {
        const localFunc = () => { return 'local mock'};
        const inject = require('inject?../ExampleReact/MockTestInnerFunction!../ExampleReact/MockTestOuterFunction');
        const outerFunctionWithMock = inject({
                '../ExampleReact/MockTestInnerFunction': localFunc
            }).default;
        expect(outerFunctionWithMock()).toEqual('local mock', 'Did not mock');
    });
});