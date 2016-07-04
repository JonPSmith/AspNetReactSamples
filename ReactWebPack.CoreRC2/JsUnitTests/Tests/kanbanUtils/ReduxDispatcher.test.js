import expect from 'expect';
import MockPromise from '../../mocks/MockPromise';

import { dispatchAsync } from '../../../app/ReduxDispatcher';

describe('app/ReduxDispatcher', () => {

    it('Call with success', () => {
        let returnedActionObjects = [];
        const dispatch = (actionObject) => {
            returnedActionObjects.push(actionObject);
        };
        dispatchAsync(new MockPromise(true),
            dispatch, {
                request: 'request',
                success: 'success',
                failure: 'failed'
            });
        expect(returnedActionObjects.length).toEqual(2);
        expect(returnedActionObjects[0].type).toEqual('request');
        expect(returnedActionObjects[1].type).toEqual('success');
        expect(returnedActionObjects[1].payload.response).toEqual('my data');
    });

        it('Call with fail', () => {
        let returnedActionObjects = [];
        const dispatch = (actionObject) => {
            returnedActionObjects.push(actionObject);
        };
        dispatchAsync(new MockPromise(false),
            dispatch, {
                request: 'request',
                success: 'success',
                failure: 'failed'
            });
        expect(returnedActionObjects.length).toEqual(2);
        expect(returnedActionObjects[0].type).toEqual('request');
        expect(returnedActionObjects[1].type).toEqual('failed');
        expect(returnedActionObjects[1].payload.error).toEqual('my error');
    });
}); 
