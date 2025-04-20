const heros = ["thor","ironman","spiderman"]
const name = ["shivansh","varun","kartik"]

// heros.push(name)

// console.log(heros);
// console.log(heros[3][2]);

// const allHero=heros.concat(name)
// console.log(allHero);

const allNewHero=[...heros,...name]

console.log(allNewHero);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);


 console.log(Array.isArray("shivansh"))
 console.log(Array.from("shivansh")) 
 console.log(Array.from({naam:"shivansh"}))  // intersting