import 'babel-polyfill';


/**
* This does the async request and provides Redux thunk feedback 
*/
export function dispatchAsync(promise, dispatch, types, payload) {
  const { request, success, failure } = types;
  dispatch({ 
    type: request,
    payload: Object.assign({}, payload) 
  });
  promise.then(
    response => dispatch({
      type: success,
      success: true,
      payload: Object.assign({}, payload, { response })
    }),
    error => dispatch({
      type: failure,
      success: false,
      payload: Object.assign({}, payload, { error })
    })
  );
};
