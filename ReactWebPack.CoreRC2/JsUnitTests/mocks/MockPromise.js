//This is a super-simple mock of a JavaScript Promise
//It only implement the 'then(success, failure)' function 
//as that is the only function that the kanban calls
//in the modules that use the KanbanApi    
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
