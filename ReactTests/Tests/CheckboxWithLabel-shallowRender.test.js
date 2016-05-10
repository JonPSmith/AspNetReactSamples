import expect from 'expect';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

import CheckboxWithLabel from '../../ReactWebPack.MVC5/app/temp/CheckboxWithLabel';

const shallowRenderer = TestUtils.createRenderer(); 
describe.only('CheckboxWithLabel', function () {
    debugger;
    // Render a checkbox with label in the document
    shallowRenderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    let checkbox = shallowRenderer.getRenderOutput();

    it('defaults to unchecked and Off label', () => { 
        const expectedChildren = [
          <input type="checkbox" checked={false} checkbox={checkbox.onChange} />,
          "Off"];
        expect(checkbox.props.children).toEqual(expectedChildren);
    });


    //it('changes the label after click', () => {
    //    component.onChange();

    //    // Updates the render
    //    checkbox = shallowRenderer.getRenderOutput();

    //    expect(checkbox.props.children[1]).toEqual('On');
    //});
});