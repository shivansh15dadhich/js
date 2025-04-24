
 

function sayMyName() {
    console.log("h");
console.log("i");
console.log("j");
console.log("k");
console.log("l");
console.log("m");
    
}
// sayMyName //this is reference 
// sayMyName() //this is function execution
//sayMyName()


// function addTwoNumber(number1, number2) {
//     console.log(number1+number2);
    
// }

function addTwoNumber(number1, number2) {
    // let result =  number1+number2
    // return result
    return number1+number2
    }
// addTwoNumber("shiv","ansh")
const result = addTwoNumber(3,4)
// console.log("result: ",result);

 function loginUsermessage(username = "shivansh") {
    if (username === undefined) { //"username === undefined" this can be written as "!username"
      console.log("please enter the user name" );
        
    }
    return '${ username} just logged in'
 }

 
//   console.log( loginUsermessage("shivansh"));
  console.log( loginUsermessage());
 

  function calculateCartPrice(val1,val2,...num1) {
    return num1
  }
  console.log(calculateCartPrice(200,300,400,2000));
  
  const user ={
    username : "shivansh",
    price: 199
  }
  function handleObject(anyobject) {
    
    console.log(`userName is ${anyobject.username} and price is ${anyobject.price}`);
    
  }
 // handleObject(user)
 handleObject({
    username:"sam",
    price :399
 })

 const myNewArray = [200,300,400,500]

 function returnSecondValue(array){
    return array[2]
 }
 console.log(returnSecondValue(
   myNewArray
 ));
 