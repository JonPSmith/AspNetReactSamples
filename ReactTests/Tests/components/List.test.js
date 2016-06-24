import React from 'react';

import expect from 'expect';
import {shallow} from 'enzyme'; 

import List from '../../../ReactWebPack.CoreRC2/app/components/List';

describe('Component.List', () => {
    describe('shallow render', () => {
        it('forms correct html',
        () => {
            const OrgList = List.DecoratedComponent;
            // Stub the React DnD connector functions with an identity function
            const identity = function(el) { return el; };
            const wrapper = shallow(<OrgList
                id='todo'
                title='To Do'
                cards= {[]}
                connectDropTarget={identity}/>);
            //console.log(wrapper.debug());
            expect(wrapper.html()).toEqual('<div class="list"><h1>To Do</h1></div>');
            debugger;
        });
    });
});
