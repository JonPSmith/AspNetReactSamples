import React, {Component} from 'react';
import sd from 'skin-deep'

import expect from 'expect';
import {shallow, mount} from 'enzyme'; 
import {createCards} from '../../TestUtils/CardCreators'

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
//import { createStore } from 'redux';
import { Provider, connect} from 'react-redux';

import KanbanBoardActual, {KanbanBoard} from '../../../ReactWebPack.CoreRC2/app/components/KanbanBoard';

describe.skip('ReactWebPack.CoreRC2/app/components/KanbanBoard', () => {
    describe('skin-deep shallow render', () => {
        it('forms correct html',
        () => {
            // Stub the React DnD connector functions with an identity function
            const identity = function(el) { return el; };

            //create mocked Redux store
            const mockStore = configureStore([]);
            const store = mockStore({});
            //const store = createStore( (state, action) => {state})
            const tree = sd.shallowRender(
                <Provider store={store}>
                    <KanbanBoardActual
                    cards= {createCards(1)}    //only show one card
                    connectDropTarget={identity}/>
                </Provider>);
            //const subTree = tree.subTree('div');
            //debugger;
            //expect(subTree.text()).toEqual('<div class="list"><h1>To Do</h1></div>');
        });
    });

    describe('enzyme mount render', () => {
        it('forms correct html',
        () => {
            // Stub the React DnD connector functions with an identity function
            const identity = function(el) { return el; };

            const wrapper = mount(
                <KanbanBoard
                    cards= {createCards(1)}    //only show one card
                    connectDropTarget={identity}/>);
            debugger;
            //console.log(wrapper.debug());
            expect(wrapper.html()).toEqual('<div class="list"><h1>To Do</h1></div>');
        });
    });
});
