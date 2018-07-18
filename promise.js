
const p = new Promise((resolve, reject)=>{
 //Kick of an async work.
 // ...
  resolve(1);
});


p.then((result)=> console.log('Result ' + result));