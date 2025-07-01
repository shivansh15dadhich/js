const myObject = {
    js : 'javascript',
    cpp :'c++',
    rb: 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
    
      //  console.log(`${key} shortcut is for ${myObject[key]}`);
        
    
}

const programming =["js","cpp","c"]

for (const key in programming) {
  // console.log(programming[key]);
   
}

// foreach

const coding =[1,2,3,4,5,6,7]

coding.forEach( function (item){ 
   // console.log(item);
    
} )

// one more variation

coding.forEach( (item)=>{
    console.log(item);
    
} 
)

function printMe(item){
   // console.log(item);
    
}

coding.forEach(printMe)
