import expect from 'expect';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import List from '../../ReactWebPack.MVC5/app/components/List';

import ShallowTestUtils from 'react-shallow-testutils';
const shallowRenderer = TestUtils.createRenderer();

describe('Component.List', () => {

    shallowRenderer.render(<List className='test' 
              id='todo'
              title='To Do'
              cards= {[]} />);

    let list = shallowRenderer.getRenderOutput();

    it('has title and id', () => {
        const expectedChildren = [<List className='test' 
              id='todo'
              title='To Do'
              cards= {[]} />];
        console.log(JSON.stringify(list.props.children));
        expect(list.props.children).toEqual(expectedChildren);
    });

});
