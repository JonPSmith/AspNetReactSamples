import React from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

import {createCard} from '../../TestUtils/CardCreators'
import {wrapInTestContext} from '../../MocksEtc/WrapTestDnD'

import CardConnected, { Card } from '../../../app/components/Card';

describe('app/components/Card', () => {
    describe('shallow render', () => {
        it('one card, check props', () => {
            // Stub the React DnD connector functions with an identity function     
            const identity = function (el) { return el; };
            // Wrap in DnD test context
            const CardWithDnD = wrapInTestContext(Card);
            const card = createCard();
            const wrapper = shallow(
                <CardWithDnD
                    {...card}
                    connectDragSource={() => {return null;}}  //This is a dummy func to meet the propTypes validation
                    connectDropTarget={identity}/>
            );
            //console.log(wrapper.debug());
            //Check the props
            const cardKeys = Object.keys(card)
            expect(Object.keys(wrapper.props()).slice(0, cardKeys.length)).toEqual(cardKeys);
            const cardValues = cardKeys.map( (key) => { return card[key]});
            expect(cardKeys.map( (key) => { return wrapper.prop(key)})).toEqual(cardValues);
        });
    });
    describe('mount render', () => {
        it('one card, renders card info', () => {

            // Stub the React DnD connector functions with an identity function
            const identity = function (el) { return el; };
            // Wrap in DnD test context
            const CardConnectedWithDnD = wrapInTestContext(CardConnected);
            const mockStore = configureStore([]);
            const store = mockStore({});
            const card = createCard();
            const wrapper = mount(
                <Provider store={store}>
                    <CardConnectedWithDnD
                        {...card}
                        connectDropTarget={identity}/>
                </Provider>);
            expect(wrapper.find('div.card .card__title').text()).toBe(card.title);
            expect(wrapper.find('div.card .card__details').text().trim()).toBe(card.description);
        });
    });
});
