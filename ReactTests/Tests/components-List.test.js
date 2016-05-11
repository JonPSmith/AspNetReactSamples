import React from 'react';

import expect from 'expect';
import {shallow} from 'enzyme'; 

import List from '../../ReactWebPack.MVC5/app/components/List';

describe.skip('Component.List', () => {

    it('has title and id', () => {
        const wrapper = shallow(<List className='test' 
              id='todo'
              title='To Do'
              cards= {[]} />);
    //console.log(wrapper.debug());
    expect(wrapper.contains(<div className="test" />)).toBeTruthy();
    expect(wrapper.contains(<h1>To Do</h1>)).toBeTruthy();

    });

});
