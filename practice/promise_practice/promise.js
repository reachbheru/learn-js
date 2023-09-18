const promiseOne = new Promise( (resolve,reject) => {
  setTimeout(()=>{
    console.log("task 1 is completed");
    resolve()
  },1000)  
})
.then(()=>{
    console.log("promise consumed");
})


const promsieTwo = new Promise( (resolve,reject) => {
  setTimeout(()=>{
    console.log("task 2 completed")
    resolve({username:"luffy",email:"luffy@gmail.com"})
  },1000)
} )
.then((user)=>{
  console.log(user.username);
  console.log(user.email);
})


const promiseThree = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error = false;
    if(!error){
      resolve({username:"zoro",email:"zoro@gmail.com"});
    }
    else {
      reject('ERROR: Something went wrong');
    }
  },1000)
})
promiseThree
.then((user)=>{
  console.log(user);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log("either resolve or rejected");
})


async function promiseFour () {
  try {

    const response = await promiseFour;
    console.log("promise");
    
  } catch (error) {
    console.log(error);
  }
}
promiseFour();


async function user () {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await response.json();
    console.log(data);
  } catch (error){
    console.log(error);
  }
}
user();