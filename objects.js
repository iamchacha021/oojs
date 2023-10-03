
// object literals
// var userOne = {
//     name: 'Ryu',
//     email: 'ryu@gmail.com',
//     // methods
//     login(){
//         console.log(this.name, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };


// var userTwo = {
//     name: 'mario',
//     email: 'mario@gmail.com',
//     // methods
//     login(){
//         console.log(this.name, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };


// var userThree = {
//     name: 'yoshi',
//     email: 'yoshi@gmail.com',
//     // methods
//     login(){
//         console.log(this.name, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };

// // console.log(userOne.name, userOne.email);
// // console.log(userOne.login());
// // console.log(userOne.logout());

// // updating values
// userOne.name = 'yoshi'

// // classes
//  class User {
//     // we first need a constructor function
//     constructor (email, name){
//         this.email = email;
//         this.name = name
//         this.score = 0 /* the default score of each user will be 0 and we therefore don't need to pass it as a parameter */
//     }

//     login(){
//         console.log(this.email, 'just logged in')
//         return this /* this will return the current instance */
//     }

//     logout(){
//         console.log(this.email, 'has logged out')
//         return this /* this will return the current instance */
//     }

//     updateScore(){
//         this.score++
//         console.log(this.name, 'score is now', this.score)
//         return this /* this will return the current instance */
//     }
//  };

//  var userOne = new User('ryu@gmail.com', 'ryu')
//  var userTwo = new User('yoshi@mariokorp.com', 'yoshi')



// //  console.log(userOne)
// //  console.log(userTwo)

// //  class methods
// // class methods are usually defined outside the constructor function. Only object properties should be defined inside the costructor function
// // we don't need to separate the different objects and methods with commas

// // userOne.login()
// // userTwo.logout()

// // method chaining
// // we have to return a value from the class methods to be able to chain the methods
// // userOne.login().updateScore().updateScore().logout()
// // userTwo.login().updateScore().updateScore().logout()

// // class inheritance
// class Admin extends User {
//     // extra methods
//     deleteUser(user){
//         users = users.filter( u => {
//             return u.email != user.email
//         })
//     }
// }

// // using extends inherits every property and methods from the user class

// var adminOne = new Admin('chacha@mbleina.com', 'chacha')

// var users = [userOne, userTwo, adminOne]

// console.log(users)

// adminOne.deleteUser(userOne)

// console.log(users)




// How classes work under the hood
// Javascript doesn't have classes per say. The class keyword is just some added sugar to emulate classes and make classes easy
// This is how classes work under the hood

function User(email, name){
    // we don't need the constructor method
    this.email = email
    this.name = name
    this.online = false
    // this is how we write methods. However methods should be defined outside of this function(which is the constructor function) with the prototype keyword
    // this.login = function(){
    //     console.log(this.email, 'has logged in')
    // }
}

// this is how class methods should be defined
User.prototype.login = function(){
    this.online = true
    console.log(this.email, 'has logged in')
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.email, 'has logged out')
}

// prototype inheritance
function Admin(...args){
    User.apply(this, args)
    this.role = 'Super Admin'
}
// inheriting
Admin.prototype = Object.create(User.prototype)


Admin.prototype.deleteUser = function(user){
    users = users.filter(u =>{
        return u.email != user.email
    })
}


 var userOne = new User('ryu@gmail.com', 'ryu');
 var userTwo = new User('yoshi@mariokorp.com', 'yoshi');
 var adminOne = new Admin('chacha@mbleina.com', 'chacha')
 
 var users = [userOne, userTwo, adminOne]

 console.log(userOne)
 userTwo.login()
 console.log(adminOne)
 console.log(users)
 adminOne.deleteUser(userTwo)
 console.log(users)