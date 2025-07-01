// if
const isUserloggedIn = true

if (2==="2")
{
console.log("executed");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty");
    
}

// Nullish Coalescing operator (??)  works on null undefined (used as a safety check for null value)

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
 //val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
 
console.log(val1); 


// terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80");
;
