// how much time the server will take to response 
// sequence of activities on the application shoud be this
// 1 user registration 
// 2 send confirmation mail 
// 3 login 
// 4 get user data
// 5 display user data
// other application work  

function Register(callback){
    setTimeout(()=>{
        console.log("resgistration ended");
        callback();
    },2000);
    
}
function sendMail(callback){
    setTimeout(()=>{
        console.log("mail Sent sucessfully");
        callback();
    },1000);
    
}
function login(callback){
    setTimeout(()=>{
        console.log("user logged in");
        callback();
    },1000);
    
}
function getUserData(callback){
    setTimeout(()=>{
        console.log("user data");
        callback();
    },1000);
    
}
function displayUserData(){
    setTimeout(()=>{
        console.log("data displayed")
    },1000);
}

// calllBack hell

Register(()=>{
    sendMail(()=>{
        login(()=>{
            getUserData(()=>{
                displayUserData();
            });
            
        });
        
    });
    
});

console.log("other application work");
