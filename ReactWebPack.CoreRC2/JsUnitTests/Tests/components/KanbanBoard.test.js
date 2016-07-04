import React, {Component} from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';
import {createCards} from '../../TestUtils/CardCreators'

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

import KanbanBoardConnected, {KanbanBoard} from '../../../app/components/KanbanBoard';

describe('app/components/KanbanBoard', () => {
    describe('shallow render', () => {
        //This tests the inner class, i.e. without the connected
        it('class is created OK', () => {         
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
            expect(wrapper.text()).toBe('<KanbanBoard />');
            //Could check props here...
        });
        //This tests the default export, i.e. class with Redux connect
        it('connected class is created OK', () => {         
            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };

            //create mocked Redux store
            const mockStore = configureStore([]);
            const store = mockStore({});
            const wrapper = shallow(
                <Provider store={store}>
                    <KanbanBoardConnected
                        cards= {createCards(1) }    //only show one card
                        connectDropTarget={identity}/>
                </Provider>); 
            expect(wrapper.text()).toBe('<DragDropContext(KanbanBoard) />');
            //Could check props here...
        });
    });

    describe('mount render', () => {
        it('forms three columns and Done col has one card', () => {
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
            //console.log(wrapper.debug());

            //Check we have the three columns
            const h1Parts = wrapper.find('div .list');
            expect(h1Parts.length).toBe(3);
            //Now check that we only have one card and its in the 'done' column
            expect(h1Parts.nodes[0].children.length).toBe(1);
            expect(h1Parts.nodes[0].children[0].textContent).toBe('To Do');
            expect(h1Parts.nodes[1].children.length).toBe(1);
            expect(h1Parts.nodes[1].children[0].textContent).toBe('In Progress');
            expect(h1Parts.nodes[2].children.length).toBe(2);
            expect(h1Parts.nodes[2].children[0].textContent).toBe('Done');
            //now check that Done column has a single card
            expect(h1Parts.nodes[2].children[1].classList.length).toBe(1);
            expect(h1Parts.nodes[2].children[1].classList[0]).toBe('card');
        });
    });
});
