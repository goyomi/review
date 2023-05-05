// C를 제외한 모든 프로그래밍 언어는 객체 지향 패러다임을 기반으로 만들어진 언어이다
// 객체 지향 패러다임: 객체를 우선적으로 생각해서 만든 프로그램
// 추상화(abstraction): 프로그램에 필요한 요소만 사용해서 객체를 표현하는 것. 필요한 공통사항을 추출하는 것. abstraction=>추출이라는 의미도 있음 

// 객체와 배열 조합하기
const students = []
students.push({ 이름: '구름', 국어: 87, 영어: 98, 수학: 88, 과학: 90 })
students.push({ 이름: '별이', 국어: 92, 영어: 98, 수학: 96, 과학: 88 })
students.push({ 이름: '겨울', 국어: 76, 영어: 96, 수학: 94, 과학: 86 })
students.push({ 이름: '바다', 국어: 98, 영어: 52, 수학: 98, 과학: 92 })

alert(JSON.stringify(students, null, 2))
// 객체 활용하기

let output = '이름\t총점\t평균\n'
for (const s of student) {
  const sum = s.국어 + s.영어 + s.수학 + s.과학
  const average = sum / 4
  output += `${s.이름}\t${sum}점\t${average}점\n`
}

console.log(output)


// 객체를 처리하는 함수 
// 성적총합이나 평균을 구하는 기능은 여러가지 프로그램에서 활용될 수 있으므로 함수로 만들어 놓으면 확장성에 좋다
// 객체를 처리하는 함수(1)
function getSumof(student) {
  return students.국어 + students.영어 + students.수학 + students.과학
}

function getAverageOf(student) {
  return getSumof(students) / 4
}

let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += `${s.이름}\t${getSumof(s)}점\t${getAverageOf(s)}점\n`
}
console.log(output)


// 객체의 기능을 메소드로 추가하기 
// 객체의 수가 늘어나면 함수 이름에 충돌이 발생할 수 있다 
// => 함수를 메소드로서 객체 내부에 넣어서 활용하는 방법이 있다 
// 객체를 처리하는 함수(2)
for (const student of students) {

  student.getSum = function () {
    return this.국어 + this.영어 + this.수학 + this.과학
  }

  student.getAverage = function () {
    return this.getSum() / 4
  }

}

let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += `${s.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`
}
console.log(output)

// 객체를 생성하는 함수
function createStudent(이름, 국어, 영어, 수학, 과학) {
  return {
    이름: 이름,
    국어: 국어,
    영어: 영어,
    수학: 수학,
    과학: 과학,

    getSum() {
      return this.국어 + this.영어 + this.수학 + this.과학
    },
    getAverage() {
      return this.getSum() / 4
    },
    toString() {
      return `${this.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`
    }
  }
}

let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += s.toString()
}
console.log(output)


// 클래스 선언하기
// 객체를 정의하고 그러한 객체를 활용해서 프로그램을 만드는 것을 객체 지향 프로그래밍이라고 한다 
// 크게 클래스(class)와 프로토타입(prototype) 2가지 문법으로 객체를 효율적으로 만들 수 있게 했다
// 클래스 : 지원도 많고 제한도 많음
// 프로토 타입: 지원이 거의 없고 제한도 많이 없음
// 자바스크립트도 프로토 타입을 사용하다가 클래스 문법을 지원하기 시작 
// class 클래스 이름 { } => 클래스 생성법 
// 클래스를 기반으로 만든 객체를 인스턴스(instance)라고 부름 그냥 객체라고 부르는 경우도 많음 
// new 클래스 이름() => 인스턴스 생성법
// 붕어빵 틀 : 클래스, 붕어빵 : 인스턴스

class student {

}

const student = new Student()

const students = [
  new Student(),
  new Student(),
  new Student(),
  new Student()
]


// 생성자
// 객체가 생성될 때 호출되는 생성자(constructor)라는 이름의 함수를 뜻함 
class 클래스 이름 {
  constructor() {

  }
}

// 생성자 함수와 속성 추가하기
class Student {
  constructor(이름, 국어, 영어, 수학, 과학) {
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
    this.과학 = 과학
  }
}

const students = []
students.push({ 이름: '구름', 국어: 87, 영어: 98, 수학: 88, 과학: 90 })
students.push({ 이름: '별이', 국어: 92, 영어: 98, 수학: 96, 과학: 88 })
students.push({ 이름: '겨울', 국어: 76, 영어: 96, 수학: 94, 과학: 86 })
students.push({ 이름: '바다', 국어: 98, 영어: 52, 수학: 98, 과학: 92 })

// 메소드 