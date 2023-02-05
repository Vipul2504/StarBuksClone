const pawan = {
    num : [1,2,3,4,5,6,7,8],
     pickNumbers(){
         const {num} = this;
         const idx = Math.floor(Math.random() * num.length)
         return num[idx];
         
     },
     
     start(){
        setInterval( () => {
             console.log(this.pickNumbers());
        }, 2000);
     }
     
 };
 
 