import React, {Component} from 'react';
import { connect } from 'react-redux';

import InnerConnect from './InnerConnect';

export class OuterConnect extends Component {
    render () {
        return <div>
                <h1>Outer.dispatch {this.props.dispatch === undefined ? 'undefined' : 'defined' }</h1>
                {this.props.children}
            </div>;
    }
}

export default connect()(OuterConnect)