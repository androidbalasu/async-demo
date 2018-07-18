
getUser(1, displayUser);


//DisplayRepos
function displayRepos(repos){
    console.log(`Repos are ${repos}`);
    getCommits(repos[0], displayCommits);
}

//DisplayCommits
function displayCommits(commits){
    console.log(`the following commits ${commits}`);
}


//DisplayUser
function displayUser(user){
    console.log(user);
    //After getting the user, get the list of repositories user has in his github account.
    getUserRepos(user, displayRepos);
}




function getUser(id){
    console.log('Get user');
    return new Promise((resolve, reject)=>{
       //Async function goes here. 
       setTimeout(()=>{
        console.log('Reading user id from the database...');
        resolve({id: id, username: 'androidbalasu'});
    }, 2000);
    });
 }

 function getUserRepos(userName){
     console.log('Get User repos');
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Reading database to get users repos');
            resolve(['repo1','repo2','repo3']);
         }, 2000);
     });
 }

 function getCommits(repo){
     console.log('Get commits for this repo');
     return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('Get the commits for this database for this repo');
            resolve(['Initial commit', 'Commit 2', 'Commit 3']);
        }, 2000);
     });
}