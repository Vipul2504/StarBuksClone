const FakeRequest = (url) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users' : [
                    {id : 1, username:'Pawan'},
                    {id : 3, username:'Vipul'},
                    {id : 5, username:'shankari'}
                ],
                '/users/1' : {
                    id: 1, 
                    username: 'Pawan',
                    upvote: 350,
                    city:'NY'
                },
                '/users/3' : {
                    id: 1, 
                    username: 'Vipul',
                    upvote: 550,
                    city:'UK'
                },
                '/users/5' : {
                    id: 1, 
                    username: 'shankari',
                    upvote: 450,
                    city:'London'
                },
                '/posts/454321':{
                    id:54321,
                    title: 'This is title of promise'
                },

                '/about': 'This is about page'
            }

            const data = pages[url]
            if(data){
                resolve({status:200, data})
            }
            else{
                reject({status:404})
            }
        }, 1000)
    })
}

FakeRequest('/users')
.then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return FakeRequest(`/users/${id}`);
})

.then((res) => {
    console.log(res);
    const PostID = res.data.topPostId
    return FakeRequest(`/postasdass/${PostID}`)
})

.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log('OH NO', err);
})