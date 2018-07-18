//To return a promise that is already resolved.  Useful in writing unit tests.

// //Resolve option.
// const p = Promise.resolve({id: 1});   //Optionally pass a value.
// p.then(result => console.log(result));

//Reject option.
const p = Promise.reject(new Error('Failed due to unknown problem.'));   //Always use an error object while rejecting promises.
p.catch(error => console.log(error));
