import 'babel-polyfill';


/**
* This does the async request and provides Redux thunk feedback 
*/
export function dispatchAsync(promise, dispatch, types) {
  const { request, success, failure } = types;
  dispatch({ type: request });
  promise.then(
    response => dispatch({
      type: success,
      success: true,
      response
    }),
    error => dispatch({
      type: failure,
      success: false,
      error
    })
  );
};
