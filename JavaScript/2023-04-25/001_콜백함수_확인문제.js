// p. 240

let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]

// 답안
numbers = numbers.filter((item) => item % 2 === 1);
numbers = numbers.filter((item) => item <= 100);
numbers = numbers.filter((item) => item % 5 === 0);
console.log(numbers)

// 내가 푼거 
numbers.filter((item) => {
  return item % 2 === 1
});
numbers.filter((item) => {
  return item <= 100
});
numbers.filter((item) => {
  return item % 5 === 0
});



// p. 241

const array = ['사과', '배', '귤', '바나나']

// for in -> forEach
array.forEach((v, i) => console.log(i));
// for of -> forEach
array.forEach((v) => console.log(v));
