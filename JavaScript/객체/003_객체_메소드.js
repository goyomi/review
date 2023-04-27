// Number 객체
// 숫자 N번째 자리수까지 출력하기: toFixed()
const l = 123.456789
l.toFixed(2)
// '123.46'
l.toFixed(3)
// '123.457'
l.toFixed(4)
// '123.4568'

// NaN과 Infinity 확인하기: isNaN(), isFinite()
// NaN: Not of Number, Infinity: 무한
// 자료 뒤에 온점을 찍는 것이 아니라 Number뒤에 찍고 사용
const m = Number('숫자로 변환할 수 없는 경우')
m
// NaN
m === NaN
// false
Number.isNaN(m)
// true

const n = 10 / 0
n
// Infinity
const o = -10 / 0
o
// -Infinity
Number.isFinite(n)
// false 무한
Number.isFinite(o)
// false
Number.isFinite(1)
// true 유한 
Number.isFinite(10)
// true


// String 객체
// 문자열 양쪽 끝의 공백 없애기 : trim()
const stringA = `
메세지를 입력하다보니 앞에 줄바꿈도 들어가고`
const stringB = `      앞과 뒤에 공백도 들어가고       `

stringA.trim()
// '메세지를 입력하다보니 앞에 줄바꿈도 들어가고'
stringB.trim()
// '앞과 뒤에 공백도 들어가고'

// 문자열을 특정 기호로 자르기 : split()
// split()메소드는 문자열을 매개변수로 잘라서 배열을 만들어 리턴하는 메소드이다
let input = `
일자,달러,엔,유로
02,1141.8,1097.46,1262.37
03,1148.7,1111.36,1274.65
04,1140.6,1107.81,1266.58
07,1143.4,1099.58,1267.8
08,1141.6,1091.97,1261.07
`
input = input.trim()
// 먼저 공백을 모두 제거
// '일자,달러,엔,유로\n02,1141.8,1097.46,1262.37\n03,1148.7,1111.36,1274.65\n04,1140.6,1107.81,1266.58\n07,1143.4,1099.58,1267.8\n08,1141.6,1091.97,1261.07'

input = input.split('\n')
// 줄바꿈으로 자르기
// (6) ['일자,달러,엔,유로', '02,1141.8,1097.46,1262.37', '03,1148.7,1111.36,1274.65', '04,1140.6,1107.81,1266.58', '07,1143.4,1099.58,1267.8', '08,1141.6,1091.97,1261.07']

input = input.map((line) => line.split(','))
// 배열 내부의 element값들을 쉼표로 자르고 배열로 반환 (map의 기능)
// (6) [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4)]

JSON.stringify(input, null, 2)


// JSON 객체
// JSON: JavaScript Object Notation(자바스크립트 객체 표기법)
// JSON파일을 만드는 데는 몇 가지 규칙이 있음
// 1. 값을 포현할 때는 문자열, 숫자, 불 자료형만 사용할 수 있다 (함수 등 사용불가)
// 2. 문자열은 반드시 큰 따옴포료 만들어야한다
// 3. 키에도 반드시 따옴표를 붙여야 한다
// 4. 여러가지 자료를 만드는 경우 [] 대괄호 안에 {}중괄호를 쓰고 쉼표로 구분한다
// JS객체를 JSON파일로 변환하는 경우 JSON.stringify()메소드를 사용한다

// JSON.stringify()메소드 : JS객체를 JSON파일로 변환
const data = [{
  name: '혼자공부하는 자바스크립트',
  price: 18000,
  publisher: '한빛미디어'
}, {
  name: 'HTML5 웹 프로그래밍 입문',
  price: 26000,
  publisher: '한빛아카데미'
}]

console.log(JSON.stringify(data))
// [{"name":"혼자공부하는 자바스크립트","price":18000,"publisher":"한빛미디어"},{"name":"HTML5 웹 프로그래밍 입문","price":26000,"publisher":"한빛아카데미"}]
console.log(JSON.stringify(data, null, 2))
// 2번째 매개변수: 어떤 속성만 사용해서 추출하고싶을 때 사용하지만 거의 사용하지 않으며 null을 넣는다
// 3번째 매개변수: 들여쓰기 2칸으로 설정 
// [
//   {
//     "name": "혼자공부하는 자바스크립트",
//     "price": 18000,
//     "publisher": "한빛미디어"
//   },
//   {
//     "name": "HTML5 웹 프로그래밍 입문",
//     "price": 26000,
//     "publisher": "한빛아카데미"
//   }

// JSON.parse()메소드 : JSON파일을 JS객체로 변환
const data = [{
  name: '혼자공부하는 자바스크립트',
  price: 18000,
  publisher: '한빛미디어'
}, {
  name: 'HTML5 웹 프로그래밍 입문',
  price: 26000,
  publisher: '한빛아카데미'
}]

const json = JSON.stringify(data)
console.log(json)
// 자료를 JSON으로 변환

console.log(JSON.parse(json))
// JSON을 JS 객체로 변환
// (2) [{…}, {…}]
// 0:{name: '혼자공부하는 자바스크립트', price: 18000, publisher: '한빛미디어'}
// 1:{name: 'HTML5 웹 프로그래밍 입문', price: 26000, publisher: '한빛아카데미'}
// length:2
// [[Prototype]]: Array(0)

// Math.random()메소드
// 0 <= 결과 < 1의 범위에서 랜덤숫자를 생성함 

const num = Math.random()

console.log('#랜덤한 숫자')
console.log('0-1 사이의 랜덤한 숫자:', num)
console.log('')

console.log('#랜덤한 숫자 범위 확대')
console.log('-5~5 사이의 랜덤한 숫자:', num * 10 - 5)
console.log('-25~25 사이의 랜덤한 숫자:', num * 50 - 25)
console.log('')

console.log('#랜덤한 정수 숫자')
console.log('-5~5 사이의 랜덤한 숫자:', Math.floor(num * 10 - 5))
console.log('-25~25 사이의 랜덤한 정수 숫자:', Math.floor(num * 50 - 25))