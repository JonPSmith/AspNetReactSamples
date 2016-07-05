import React from 'react';

import expect from 'expect';
import {shallow, mount} from 'enzyme';

//Example taken for http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <a onClick={() => this.setState({ count: count + 1 }) }>
                    Increment
                </a>
            </div>
        );
    }
}

describe('enzyme simulate', function () {
    describe('shallow render', function () {
        it('click',
            () => {
                const wrapper = shallow(<Foo />);

                expect(wrapper.find('.clicks-0').length).toBe(1);
                wrapper.find('a').simulate('click');
                expect(wrapper.find('.clicks-1').length).toBe(1);
            });
    });

    describe('mount render', function () {
        it('click',
            () => {
                const wrapper = mount(<Foo />);

                expect(wrapper.find('.clicks-0').length).toBe(1);
                wrapper.find('a').simulate('click');
                expect(wrapper.find('.clicks-1').length).toBe(1);
            });
    });
});