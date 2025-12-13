// var ->function scoped
//let , const ->blocked scoped
//  so , use let or const

function one(){
    const username = "Krishna"
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) website is block scoped
    two()
}

one()

// ++++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++
const divide = (a,b) => a / b;
console.log(divide(4,2))

const add = (a,b) => {
    console.log(this) //empty
    return a+b
}
console.log(add(4,2))