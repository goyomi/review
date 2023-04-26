// 자바스크립트에서 사용하는 자료는 크게 기본 자료형과 객체 자료형으로 구분할 수 있다
// 기본자료형: 숫자, 문자열, 불
// 객체자료형: 함수, 배열, 이외 전부
// 기본자료형이 객체자료형이 될 수도 있다

// 객체자료형 : 속성과 메소드를 가질 수 있는 모든 것은 객체이다 
// 배열, 함수 등등
// 배열
const a = []
a.sample = 10
a.sample
// 함수
function b() { }
b.sample = 10
b.sample

// 기본자료형: 숫자, 문자형, 불
const c = 273
c.sample = 10
c.sample

// 기본자료형을 객체로 선언하는 법
// const 객체 = new 객체 자료형 이름()
new Number(10)
new String('안녕하세요')
new Boolean(true)

const f = new Number(273)
typeof f
// object
f.sample = 10
f
// Number {273, sample: 10}
f + 0
f.valueOf()
// 273

// 프로토타입: 기본자료형을 프로토타입으로 만들어서 속성과 메소드를 사용할 수 있다
// 객체 자료형 이름. prototype.메소드 이름 = function (){}

Number.prototype.sample = 10
const i = 273 // 기본자료형은 속성을 가질 수 없음 
i.sample

// 프로토타입으로 숫자 메소드 추가하기
Number.prototype.power = function (n = 2) {
  return this.valueOf() ** n
}

const a = 12
console.log('a.power():', a.power())
// a.power(): 144
console.log('a.power(3):', a.power(3))
// a.power(4): 20736


// indexOf() 메소드 활용하기
const j = '안녕하세요'
j.indexOf('안녕')
// 0
j.indexOf('하세')
// 2
j.indexOf('없는 문자열')
// -1

const k = [1, 2, 3]
k.indexOf(2)
// 1
k.indexOf(3)
// 2
k.indexOf(100)
// -1 

// 프로토 타입으로 문자열 메소드 추가하기
// contain()메소드 추가
String.prototype.contain = function (data) {
  return this.indexOf(data) >= 0
}

Array.prototype.contain = function (data) {
  return this.indexOf(data) >= 0
}

// String 객체의 contain() 메소드를 사용한다
const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'))
// 안녕 in 안녕하세요: true
console.log('없는데 in 안녕하세요:', a.contain('없는데'))
// 없는데 in 안녕하세요: false

// Array 객체의 contain() 메소드를 사용한다
const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52]:', b.contain(273))
// 273 in [273, 32, 103, 57, 52]: true
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0))
// 0 in [273, 32, 103, 57, 52]: false