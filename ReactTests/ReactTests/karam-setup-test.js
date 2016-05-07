var expect = require('expect');

describe('karam setup',
    function() {

        it('should run a test',
            function () {
                console.log("Hello world");
                debugger;
                expect(true).toBeTruthy();
            });
    });