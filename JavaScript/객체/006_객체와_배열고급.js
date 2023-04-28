// 객체 내부에 어떤 속성이 있는지는 자주확인함 => 다른 사람의 코드를 이해할 때도 필요
// 객체가 없는 속성에 접근하면 undefined가 뜨므로 조건문으로 확인하면 된다

// 속성 존재 여부 확인하기
const object = {
  name: '혼자공부하는 자바스크립트',
  price: 18000,
  publisher: '한빛미디어'
}
//객체 내부에 속성이 있는지 확인
if (object.name !== undefined) {
  console.log('name 속성이 있습니다.')
} else {
  console.log('name 속성이 없습니다.')
}
// name 속성이 있습니다.
if (object.author !== undefined) {
  console.log('author 속성이 있습니다.')
} else {
  console.log('author 속성이 없습니다.')
}
// author 속성이 없습니다.
// 짧은 조건문으로 바꾸기
object.name || console.log('name 속성이 없습니다.')
// '혼자공부하는 자바스크립트'
object.author || console.log('author 속성이 없습니다.')
// author 속성이 없습니다.


// 기본 속성 지정하기
const object = {
  name: '혼자공부하는 자바스크립트',
  price: 18000,
  publisher: '한빛미디어'
}
// 객체의 기본 속성을 지정한다
object.name = object.name !== undefined ? object.name : '제목 미정'
object.author = object.author !== undefined ? author.name : '저자 미상'
// '혼자공부하는 자바스크립트'
// '저자 미상'
console.log(JSON.stringify(object, null, 2))
// 짧은 조건문으로 바꾸기
object.name ? object.name : '제목 미정'
object.author ? author.name : '저자 미상'

// 배열 기반의 다중할당 : 한 번에 여러 개의 변수에 값을 할당하는 다중 할당기능
// [식별자, 식별자, 식별자,...] = 배열
let [a, b] = [1, 2]
console.log(a, b)
// 1 2
[a, b] = [b, a]
// (2) [2, 1]
console.log(a, b)
// 2, 1
//* 할당받는 값 = 할당해주는 값, 오른쪽 값이 왼쪽으로 들어감 

let arrayA = [1, 2, 3, 4, 5]
const [a, b, c] = arrayA
console.log(a, b, c)
// 1 2 3


// 객체 기반의 다중 할당
// 객체 속성 꺼내서 다중 할당하기 
// {속성 이름, 속성 이름} = 객체
// {식별자 = 속성 이름, 식별자 = 속성이름} = 객체
const object = {
  name: '혼자공부하는 자바스크립트',
  price: 18000,
  publisher: '한빛미디어'
}

const { name, price } = object
console.log('#속성 이름 그대로 꺼내서 출력하기')
console.log(name, price)
console.log('')
// #속성 이름 그대로 꺼내서 출력하기
// 혼자공부하는 자바스크립트 18000
//
const { a = name, b = price } = object
console.log('#다른 이름으로 속성 꺼내서 출력하기')
console.log(a, b)
// #다른 이름으로 속성 꺼내서 출력하기
// 혼자공부하는 자바스크립트 18000


// 배열 전개 연산자
// 배열과 객체는 할당할 때 얕은 복사(참조 복사)라는 것이 이루어 진다. 
const 물건_200301 = ['우유', '식빵']
const 물건_200302 = 물건_200301
물건_200302.push('고구마')
물건_200302.push('토마토')

console.log(물건_200301)
console.log(물건_200302)
// (4) ['우유', '식빵', '고구마', '토마토']
// (4) ['우유', '식빵', '고구마', '토마토']

// 얕은복사의 반대말은 깊은 복사, 깊은 복사는 두 배열이 완전히 독립적으로 작동한다 
// 자스에서는 깊은 복사를 '클론(clone)을 만드는 것' 이라고 표현하기도 한다 
// 전개 연산자를 사용하면 배열을 복사할 수 있다
// [...배열]

// 전개 연산자를 사용하여 배열 복사하기
const 물건_200301 = ['우유', '식빵']
const 물건_200302 = [...물건_200301]
물건_200302.push('고구마')
물건_200302.push('토마토')

//출력
console.log(물건_200301)
console.log(물건_200302)
// (2) ['우유', '식빵']
// (4) ['우유', '식빵', '고구마', '토마토']

// 전개연산자로 배열을 전개하고 뒤에 자료를 추가하기
// [...배열, 자료, 자료, 자료]
const 물건_200301 = ['우유', '식빵']
const 물건_200302 = ['고구마', ...물건_200301, '토마토']
// 해당 위치에 복사되어 전개되는 것이기 때문에 원하는 위치에 놓아서 요소의 순서를 바꿀 수도 있음

console.log(물건_200301)
console.log(물건_200302)
// (2) ['우유', '식빵']
// (4) ['고구마', '우유', '식빵', '토마토']

// 두 개 이상의 배열을 붙일 때도 활용할 수 있다
const a = ['milk', 'bread']
const b = ['sweet potato', 'tomato']

[...a, ...b]
  // (4) ['milk', 'bread', 'sweet potato', 'tomato']
  [...b, ...a]
// (4) ['sweet potato', 'tomato', 'milk', 'bread']


// 객체 연산자 
// 객체도 깊은 복사를 할 때 전개연산자를 사용할 수 있다
// {...객체}

const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}
const 별 = 구름
별.이름 = '별'
별.나이 = 1

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))
// {"이름":"별","나이":1,"종족":"강아지"}
// {"이름":"별","나이":1,"종족":"강아지"}

// 변경하고 싶은 속성만 추가하기 
// {...객체, 자료, 자료, 자료}
const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}
const 별 = {
  ...구름,
  이름: '별',
  나이: 1,
  예방접종: true
}

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))
// {"이름":"구름","나이":6,"종족":"강아지"}
// {"이름":"별","나이":1,"종족":"강아지","예방접종":true}

// 만약 구름 객체의 순서를 바꾼다면?
const 구름 = {
  이름: '구름',
  나이: 6,
  종족: '강아지'
}
const 별 = {
  이름: '별',
  나이: 1,
  예방접종: true,
  ...구름
}

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))
// {"이름":"구름","나이":6,"종족":"강아지"}
// {"이름":"구름","나이":6,"예방접종":true,"종족":"강아지"}
// 구름이 뒤로가면서 별의 값에 구름의 값이 덮어짐