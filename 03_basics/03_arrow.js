//+++++++++++++++++++++++++++ this ++++++++++++++++++++++++++
console.log(this) // give empty obj

const fun1 = () => (console.log(this)) // arrow fun give empty obj
fun1()

const user = {
    username: "Krishna",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // ref to current context 
    }
}

user.welcomeMessage()
user.username = "Krishnakant Dinkar"
user.welcomeMessage()


const fun2 = (a,b) => {
    console.log(this) //{}
    this.name = "Krishna"
    console.log(this) // { name: 'Krishna' }
    return a+b
    
}
console.log(fun2(2,3))

// ++++++++++++++++++++ this in functions
function fun(a,b){
    let name = "krishna"
    console.log(this)
    console.log(this.name) // undefine

    this.username = "KrishnaKant Dinkar"
    console.log(this)
    console.log(this.username) // Krishnakant Dinkar
}
fun()