//To return a promise that is already resolved.  Useful in writing unit tests.

// //Resolve option.
// const p = Promise.resolve({id: 1});   //Optionally pass a value.
// p.then(result => console.log(result));

//Reject option.
// const p = Promise.reject(new Error('Failed due to unknown problem.'));   //Always use an error object while rejecting promises.
// p.catch(error => console.log(error));

//Parallel promises.

const p1 = new Promise((resolve,) =>{
    setTimeout(()=> {
        console.log('Async operation 1....');
        resolve(1);
    }, 2000)
});

const p2 = new Promise((resolve) =>{
    setTimeout(()=> {
        console.log('Async operation 2....');
        resolve(2);
    }, 2000)
});


Promise.all([p1, p2])
    .then(result => console.log(result));