// for of

//["","","",""]

const arr =[1,2,3,4,5]

for (const num of arr) {
  //  console.log(num); 
}

const greeting = "hello world!"
for (const greet of greeting) {
  //  console.log(`each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"india")
map.set('us',"states")
map.set('fr',"france")
//console.log(map);


for (const [key,value] of map) {
    console.log(key,`;-` ,value);
    
    
}