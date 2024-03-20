// singleton
Object.create


//object literals

const mySym = Symbol("key1")

const JsUser={
    name: "ansuman",
    "full name": "ansuman padhi",
    [mySym]: "mykey1",
    age:21,
    email: "ansuman_padhi@outlook.com",
    isLoggedin: false,
    lastLoginDay : ["monday","suturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

JsUser.email = "padhipk55@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "ansh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js");
}


JsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greeting2());

