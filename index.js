
getUser(1, (user)=>{
    console.log(user);
    //After getting the user, get the list of repositories user has in his github account.
    getUserRepos(user, (repos)=>{
        console.log(`${user.username}'s repos are ${repos}`);
    });
});


function getUser(id, callback){
    console.log('Get user');
    setTimeout(()=>{
        console.log('Reading user id from the database...');
        callback({id: id, username: 'androidbalasu'});
    }, 2000);
 }

 function getUserRepos(userName, callback){
     console.log('Get User repos');
     setTimeout(()=>{
        console.log('Reading database to get users repos');
        callback(['repo1','repo2','repo3']);
     }, 2000);
 }