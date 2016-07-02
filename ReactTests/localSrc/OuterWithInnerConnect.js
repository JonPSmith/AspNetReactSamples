import React, {Component} from 'react';
import { connect } from 'react-redux';

import InnerConnect from './InnerConnect';

class OuterWithInnerConnect extends Component {
    render () {
        return <div>
                <h1>Outer.dispatch {this.props.dispatch === undefined ? 'undefined' : 'defined' }</h1>
                <InnerConnect />
            </div>;
    }
}

export default connect()(OuterWithInnerConnect)