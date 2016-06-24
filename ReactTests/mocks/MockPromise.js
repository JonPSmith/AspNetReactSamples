class MockPromise {
  constructor(returnSuccess, result) {
        this.returnSuccess = returnSuccess;
        this.result = result || (returnSuccess ? 'my data': 'my error')
    }

    then(success, failure) {
            if (this.returnSuccess) {
                success(this.result);
            }
            else {
                failure(this.result);
            }
    }
}

export default MockPromise
