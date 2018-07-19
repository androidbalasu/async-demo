
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

getCustomer(1).then((customer)=>{
  console.log('Customer: ', customer);
  if (customer.isGold) {
    return getTopMovies(customer);
  }
})
.then((customerMovies)=>{
  console.log('Top movies: ', customerMovies.movies);
})
.then(()=> console.log('Email sent...'))
.catch(error => console.log(error));

function getCustomer(id) {
  return new Promise((resolve, reject)=>{
    //Asynchronouse operation happens in the functor.
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  })
  
}

function getTopMovies(customer) {
  return new Promise((resolve, reject)=>{
    //Asynchronous function goes here.
    setTimeout(() => {
      resolve({customer: customer, movies: ['movie1', 'movie2']});
    }, 4000);
  });
  
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject)=>{
    //Asynchronous function goes here.
    setTimeout(() => {
      resolve();
    }, 4000);
  });
  
}