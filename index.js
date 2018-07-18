
getUser(1, (user)=>{
    console.log(user);
});


function getUser(id, callback){
    console.log('Get user');
    setTimeout(()=>{
        console.log('Reading user id from the database...');
        callback({id: id, username: 'androidbalasu'});
    }, 2000);
    
}