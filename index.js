
getUser(1, (user)=>{
    console.log(user);
    //After getting the user, get the list of repositories user has in his github account.
    getUserRepos(user, (repos)=>{
        console.log(`${user.username}'s repos are ${repos}`);
        getCommits(repos[0], (commits)=>{
            console.log(`${repos[0]} has the following commits ${commits}`);
        });
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

 function getCommits(repo, callback){
     console.log('Get commits for this repo');
     setTimeout(()=>{
         console.log('Get the commits for this database for this repo');
         callback(['Initial commit', 'Commit 2', 'Commit 3']);
     }, 2000);
 }