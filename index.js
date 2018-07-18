//Consume promises.
// getUser(1)
//     .then((user)=> getUserRepos(user.username))
//     .then((repos)=> getCommits(repos[0]))
//     .then((commits)=> console.log(commits))
//     .catch(error => console.log('Error', err.message));

//Async and await: Helps you write asynchronous code like synchronous code.

async function displayCommits() {
    try{
        const user = await getUser(1);
        const repositories = await getUserRepos(user.username);
        const commits = await getCommits(repositories[0]);
        console.log(commits);
    }
    catch(error){
        console.log('Error ', error.message);
    }
    
}

displayCommits();  //Returns a promise that doesn't resolve in a value but is void.

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
            //resolve(['repo1','repo2','repo3']);
            reject(new Error('Could not get the repos...'))
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