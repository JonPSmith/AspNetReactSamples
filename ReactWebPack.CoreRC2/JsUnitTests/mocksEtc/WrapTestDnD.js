//See http://gaearon.github.io/react-dnd/docs-testing.html , section 'Testing the Drag and Drop Interaction' 

import React, { Component } from 'react';

import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';


/**
 * Wraps a component into a DragDropContext that uses the TestBackend.
 */
export function wrapInTestContext(DecoratedComponent) {
    return DragDropContext(TestBackend)(
      class TestContextContainer extends Component {
          render() {
              return <DecoratedComponent {...this.props} />;
          }
      }
    );
}
