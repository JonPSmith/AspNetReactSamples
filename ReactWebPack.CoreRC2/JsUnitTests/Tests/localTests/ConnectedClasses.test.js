import React, {Component} from 'react';

import expect from 'expect';

import ReactTestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';

//These are used to pass a mock store down through nested components
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import InnerConnectConnected, {InnerConnect} from '../../localSrc/InnerConnect';
import OuterConnectConnected, {OuterConnect} from '../../localSrc/OuterConnect';

/*************************************************************************************
These tests provide an example of testing nested React components that use Redux via its connect function
The conclusions from this work are:
- Export the React component class (without the connect) so you can test it in isolation
- However if the component calls another component that uses the Redux connect function then:
  1. You HAVE to supply a store via the Redux <Provider> class.
  2. Enzyme's mount (i.e. fully rendered) test approach is then the best way to test it.
****************************************************************************************/
describe('localSrc/InnerConnect and OuterConnect (example of testing nested, decorated components)', () => {
    describe('enzyme', () => {
        describe('shallow', () => {
            it('InnerConnect, no connect', () => {
                const wrapper = shallow(<InnerConnect />);
                expect(wrapper.find('h2').length).toBe(1);
                expect(wrapper.find('h2').text()).toBe('Inner.dispatch undefined');
            });
            it('InnerConnect, with connect', () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                const wrapper = shallow(<Provider store={store}>
                	<InnerConnectConnected />
                </Provider>);
                expect(wrapper.text()).toBe('<Connect(InnerConnect) />');
            });
            it('OuterConnect, with connect', () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                const wrapper = shallow(<Provider store={store}>
                    <OuterConnect />
                </Provider>);
                debugger;
                expect(wrapper.text()).toBe('<OuterConnect />');
            }); 
        });
        describe('mount', () => {
            it('InnerConnect, no connect', () => {
                const wrapper = mount(<InnerConnect />);
                expect(wrapper.find('h2').length).toBe(1);
                expect(wrapper.find('h2').text()).toBe('Inner.dispatch undefined');
            });
            it('InnerConnectConnected, with connect', () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                const wrapper = mount(<Provider store={store}>
                    <InnerConnectConnected />
                </Provider>);
                expect(wrapper.find('h1').length).toBe(0);
                expect(wrapper.find('h2').length).toBe(1);
                expect(wrapper.find('h2').text()).toBe('Inner.dispatch defined');
            });
            it('OuterConnectConnected, with connect', () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                const wrapper = mount(<Provider store={store}>
                    <OuterConnectConnected />
                </Provider>);
                expect(wrapper.find('h1').length).toBe(1);
                expect(wrapper.find('h1').text()).toBe('Outer.dispatch defined');
                expect(wrapper.find('h2').length).toBe(1);
                expect(wrapper.find('h2').text()).toBe('Inner.dispatch defined');
            });
        });
    });

    //The react-addons-test-utils shallow tests are not very useful (and some fail!)
    //I have left them in so you know what happens
    describe('react-addons-test-utils (not very useful, or fail)', () => {
        describe('shallow', () => {
            //This runs fine as we are testing an undecorated react class
            it('InnerConnect, no connect', () => {
                let renderer = ReactTestUtils.createRenderer();
                renderer.render(<InnerConnect />);
                const result = renderer.getRenderOutput();
                expect(result.type).toBe('h2');
                expect(result.props.children).toEqual(['Inner.dispatch ', 'undefined']);
            });
            //The test below outputs the following error message:
            //ERROR: 'Warning: Failed propType: Invalid prop `children` supplied to `Provider`, expected a single ReactElement.'
            //... and then fails with error below:
            //Invariant Violation: onlyChild must be passed a children with exactly one child
            it.skip('InnerConnectConnected, with connect', () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                let renderer = ReactTestUtils.createRenderer();
                renderer.render(<Provider store={store}> <InnerConnectConnected /> </Provider>);
                const result = renderer.getRenderOutput();
                expect(result.type).toBe('h2');
                expect(result.props.children).toEqual(['Inner.dispatch ', 'defined']);
            });
            //this test runs fine, but it doesn't produce any useful output.
            it('OuterConnectConnected, with connect',
            () => {
                const mockStore = configureStore([]);
                const store = mockStore({});
                let renderer = ReactTestUtils.createRenderer();
                renderer.render(<Provider store={store}> 
                    <OuterConnectConnected />
                </Provider>);
                const result = renderer.getRenderOutput();
                //it picks up the connect function
                expect(typeof result.type).toBe('function');
                //I didn't find anything else that was useful to check.
            });
        });
    });

});
