
//A promise is an object that will hold the eventual result of an asynchronous operation.
//It is state is initially set to Pending and will later become reoslved or rejected based on the situation.
const p = new Promise((resolve, reject)=>{
 //Kick of an async work.
 // ...
    console.log('Inside Promise functor');
    setTimeout(()=>{
        //resolve(1);
        reject(new Error('Something went wrong'));
    }, 2000);
    
});

p.then((result)=> console.log('Result ' + result))
 .catch(err => console.log('Error ', err.message));