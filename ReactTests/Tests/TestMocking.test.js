import expect from 'expect';

import OuterFunction from '../ExampleReact/MockTestOuterFunction';
import innerMock from '../mocks/MockInnerFunction'

describe.only('Test Mocking simple', function () {

    it('check normal operation works',
    () => {
        expect(OuterFunction()).toEqual('Inner Function');
    });

    it('now mock it',
    () => {
        const inject = require('inject?../ExampleReact/MockTestInnerFunction!../ExampleReact/MockTestOuterFunction');
        const outerFunctionWithMock = inject({
                '../ExampleReact/MockTestInnerFunction': innerMock
            }).default;
        expect(outerFunctionWithMock()).toEqual('Mocked Function', 'Did not mock');
    });
});