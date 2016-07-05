import React from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

import {createCards} from '../../TestUtils/CardCreators'
import {wrapInTestContext} from '../../MocksEtc/WrapTestDnD'

import ListConnected, { List } from '../../../app/components/List';

describe('app/components/List', () => {
    describe('shallow render', () => {
        it('empty cards', () => {
            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };
            const wrapper = shallow(<List
                title='To Do'
                cards= {[]}
                connectDropTarget={identity}/>);
            //console.log(wrapper.debug());
            expect(wrapper.html()).toEqual('<div class="list"><h1>To Do</h1></div>');
        });
    });
    describe('mount render', () => {
        it('one card', () => {

            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };
            // Wrap in DnD test context
            const ListConnectedWithDnD = wrapInTestContext(ListConnected) ;
            const mockStore = configureStore([]);
            const store = mockStore({});
            const wrapper = mount(
                <Provider store={store}><ListConnectedWithDnD
                    title='My Title'
                    cards= {createCards(1) }    //only show one card
                    connectDropTarget={identity}/>
                </Provider>);
            //console.log(wrapper.debug());
            debugger;
            expect(wrapper.find('div .list h1').text()).toBe('My Title');
            expect(wrapper.find('div .list .card .card__title').text()).toBe('Card0 title');
            expect(wrapper.find('div .list .card .card__details').text().trim()).toBe('Card0 description');
        });
    });
});
