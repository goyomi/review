// 객체(object): 이름(name)과 값(value)으로 이루어진 속성(property)을 가진 자바스크립트의 기본 데이터 타입
// 배열도 객체의 한 종류이다
// 배열이 인덱스로 요소에 접근하는 것 처럼 객체는 키를 사용한다 

// 배열
const array = ["사과", "바나나", "망고", "딸기"]
array[0]
// 객체
const product = {
  제품명: "7D 건조 망고",
  유형: "당절임",
  성분: "망고, 설탕, 메타중아황산나트륨, 치자황색소",
  원산지: "필리핀"
}
product["성분"]
product["제품명"]
product.유형
product.원산지
// 온점을 사용하면 보조 기능이 떠서 편함

// this: 메소드 내에서 자신이 가진 속성을 출력하고 싶을 때에는 this키워드를 사용해야 한다
const pet = {
  name: '구름',
  eat: function (food) {
    alert(`${this.name}은/는 ${food}을/를 먹습니다.`)
  }
}

pet.eat('밥')

// 동적 객체 속성 추가/제거: 객체를 생성한 후에 추가하거나 제거하는 것을 동적으로 속성을 추가/제거한다 라고한다
// 동적으로 객체 속성 추가하기
// 객체.속성 = "값"
const student = {}
student.이름 = "김미정"
student.취미 = '여행'
student.장래희망 = '프론트엔드 개발자'

console.log(student)
console.log(JSON.stringify(student, null, 2))

// 동적으로 객체 속성 제거하기 
// delete 객체.속성
const student = {}
student.이름 = "김미정"
student.취미 = '여행'
student.장래희망 = '프론트엔드 개발자'

delete student.장래희망
console.log(JSON.stringify(student, null, 2))

// 메소드 간단 선언 구문
const pet = {
  name: '구름',
  eat(food) {
    alert(`${this.name}은/는 ${food}을/를 먹습니다`)
  }
}
// function대신 바로 괄호사용 

pet.eat('밥')
// 같은식 !
// const pet = {
//   name: '구름',
//   eat: function (food) {
//     alert(`${this.name}은/는 ${food}을/를 먹습니다.`)
//   }
// }

const test = {
  a: function () {
    console.log(this)
  },
  b: () => {
    console.log(this)
  }
}

test.a()
test.b()

// 마무리 문제 1.

const book = {
  name: '혼자 공부하는 파이썬',
  price: 18000, // 숫자는 ''사용 안해도됨 
  publisher: '한빛미디어'
}

// 마무리 문제 4. 
const object = {
  ko: '빵',
  en: 'bread',
  ja: '..?',
  fr: 'pain',
  es: 'pan',
  lang: {
    ko: '한국어',
    en: '영어',
    ja: '일본어',
    fr: '프랑스어',
    es: '스페인어'
  },
  print(lang) {
    console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다.`)
  }
}

object.print('es')