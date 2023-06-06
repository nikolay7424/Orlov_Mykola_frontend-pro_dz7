// 1
let numbers = [];
for(let i = 10; i <= 20; i++) {
  numbers.push(i);
}
console.log(numbers.join(', '));

// 2
let numbers2 = [];
for(let i = 10; i <= 20; i++) {
  numbers2.push(i * i);
}
console.log(numbers2.join(', '));

// 3
for(let i = 1; i <= 10; i++) {
  console.log(`${7} * ${i} = ${7 * i}`);
}

// 4
let sum = 0;
for(let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

// 5
let product = 1;
for(let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);

// 6
let average = 0;
for(let i = 1; i <= 500; i++) {
  average += i;
}
console.log(Math.round(average / 500));

// 7
let sumOfEven = 0;
for(let i = 30; i <= 80; i++) {
  if(i % 2 === 0) {
    sumOfEven += i;
  }
}
console.log(sumOfEven);

// 8
let multiplesOfThree = [];
for(let i = 100; i <= 200; i++) {
  if(i % 3 === 0) {
    multiplesOfThree.push(i);
  }
}
console.log(multiplesOfThree.join(', '));

// 9
const naturalNumber = 256;
let dividers = [];
for(let i = 1; i <= naturalNumber; i++) {
  if(naturalNumber % i === 0) {
    dividers.push(i);
  }
}
console.log(dividers.join(', '));

// 10
let amountOfEvenDividers = 0;
for(i in dividers) {
  if(dividers[i] % 2 === 0) {
    amountOfEvenDividers++;
  }
}
console.log(amountOfEvenDividers);

// 11
let sumOfEvenDividers = 0;
for(i in dividers) {
  if(dividers[i] % 2 === 0) {
    sumOfEvenDividers += dividers[i];
  }
}
console.log(sumOfEvenDividers);

// 12
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('=========');
}
