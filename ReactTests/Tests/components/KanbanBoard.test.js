import React, {Component} from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';
import {createCards} from '../../TestUtils/CardCreators'

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

import KanbanBoardConnected, {KanbanBoard} from '../../../ReactWebPack.CoreRC2/app/components/KanbanBoard';

describe('ReactWebPack.CoreRC2/app/components/KanbanBoard', () => {
    describe('shallow render', () => {
        it('forms correct html', () => {
            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };

            //create mocked Redux store
            const mockStore = configureStore([]);
            const store = mockStore({});
            const wrapper = shallow(
                <Provider store={store}>
                    <KanbanBoard
                        cards= {createCards(1) }    //only show one card
                        connectDropTarget={identity}/>
                </Provider>);
            debugger;
            expect(wrapper.text()).toBe('<KanbanBoard />');
        });
    });

    describe('enzyme mount render', () => {
        it('forms correct html', () => {
            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };

            //create mocked Redux store
            const mockStore = configureStore([]);
            const store = mockStore({});
            const wrapper = mount(
                <Provider store={store}>
                    <KanbanBoardConnected
                        cards= {createCards(1) }    //only show one card
                        connectDropTarget={identity}/>
                </Provider>);
            debugger;
            //console.log(wrapper.debug());
            expect(wrapper.html()).toEqual('<div class="list"><h1>To Do</h1></div>');
        });
    });
});
