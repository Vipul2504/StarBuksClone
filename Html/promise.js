// const willyouGetDog = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand =  Math.floor(Math.random() * 5);
//         if(rand > 3){
//             resolve();
//         }
//         else{
//             reject()
//         }
//     },1000)
// })

// willyouGetDog.then(()=> {
//     console.log("Yaa done get it");
// })

// willyouGetDog.then(() => {
//     console.log("sry next time");
// })

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject("not done!"), 1000);
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve runs the first function in .then
//   promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
//   );

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      const pages = {
        '/users' : [
          {id:1, username: 'biblo'},
          {id:2, username: 'pawan'}
        ],
        '/about' : 'This is the about Page!'
      }
      const data = pages[url];
      if(data){
        resolve({status:200, data})
      }
      else{
        reject({status:404})
      }
    }, 1000)
  })
}

fakeRequest('/users')
.then((res)=> {
  console.log('status code', res.status);
  console.log('status code', res.data);
  console.log('Request Worked')
})
.catch(()=>{
  console.log(res.status)
  console.log('request failed')
})


fakeRequest('/about')
.then((res)=> {
  console.log('status code', res.status);
  console.log('status code', res.data);
  console.log('Request Worked')
})
.catch(()=>{
  console.log(res.status)
  console.log('request failed')
})

fakeRequest('/dogs')
.then((res)=> {
  console.log('status code', res.status);
  console.log('status code', res.data);
  console.log('Request Worked')
})
.catch(()=>{
  console.log('request failed')
})