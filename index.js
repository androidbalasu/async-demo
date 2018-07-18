//Consume promises.
getUser(1)
    .then((user)=> getUserRepos(user.username))
    .then((repos)=> getUserRepos(repos[0]))
    .then((commits)=> console.log(commits));

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