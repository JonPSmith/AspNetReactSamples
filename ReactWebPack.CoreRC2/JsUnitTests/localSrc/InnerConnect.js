import React, {Component} from 'react';
import { connect } from 'react-redux';

export class InnerConnect extends Component {
    render () {
        return <h2>Inner.dispatch {this.props.dispatch === undefined ? 'undefined' : 'defined' }</h2>
    }
}

export default connect()(InnerConnect)