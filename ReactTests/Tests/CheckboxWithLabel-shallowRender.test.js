import React from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';

import CheckboxWithLabel from '../../ReactWebPack.MVC5/app/temp/CheckboxWithLabel';


describe.only('CheckboxWithLabel', function () {
    describe('(shallow)', () => {
        it('defaults to unchecked and Off label', () => { 
            const wrapper = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);
            //console.log(wrapper.debug());
            expect(wrapper.find('label').text()).toEqual('Off');
            expect(wrapper.find('input').props().checked).toBeFalsy();
        });

        it('changes the label text after change event', () => {

            const wrapper = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);    
            //console.log(wrapper.debug());
            wrapper.find('input').simulate('change');
            expect(wrapper.find('label').text()).toEqual('On');
            expect(wrapper.find('input').props().checked).toBeTruthy();
        });
    });

    describe('(mount)', () => {
        it('defaults to unchecked and Off label', () => { 
            const wrapper = mount(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);
            //console.log(wrapper.html());
            debugger;
            expect(wrapper.find('label').text()).toEqual('Off');
            expect(wrapper.find('input').props().checked).toBeFalsy();
        });

        it('changes the label text after change event', () => {

            const wrapper = mount(<CheckboxWithLabel labelOn="On" labelOff="Off" />);    
            //console.log(wrapper.html());
            debugger;
            wrapper.find('input').simulate('change');
            expect(wrapper.find('label').text()).toEqual('On');
            expect(wrapper.find('input').props().checked).toBeTruthy();
        });
    });
});