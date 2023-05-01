// 문서 객체가져오기 
document.head
document.body
document.title
// 이 요소들은 자바스크립트에 내제된 속성으로 "당연히 있는것"만 가져올 수 있음
// 우리가 만드는 다른요소는 별도의 메소드를 통해 접근해야 한다
document.querySelector(선택자) // 객체 하나만 추출
document.querySelectorAll(선택자) // 객체 여러개 추출

// querySelector()메소드

const header = document.querySelector('h1')

header.textContent = "HEADERS"
header.style.color = 'white'
header.style.backgroundColor = 'black'
header.style.padding = '10px'
// h1의 개수에 관계없이 가장 처음것 하나만 선택됨 

// querySelectorAll()메소드

const header = document.querySelectorAll('h1')

header.forEach((header) => {
  header.textContent = 'HEADERS'
  header.style.color = 'white'
  header.style.backgroundColor = 'black'
  header.style.padding = '10px'
})
// forEach문을 사용하지 않으면 오류가남
// => querySelectorAll()메소드는 문서 객체 여러 개를 배열로 읽어들이는 함수이기 때문이다. 


// 글자 조작하기 
// 문서객체.textContent : 입력된 문자열을 그대로 넣는다
// 문서객체.innerHTML : 입력된 문자열을 HTML 형식으로 넣는다 
// 문서객체.innerText : innerText 성능문제로 나온것이 textContContent 이다. 최신문법 사용 권장

// 글자 조작하기
const a = document.querySelector('#a')
const b = document.querySelector('#b')

a.textContent = '<h1>textContent 속성</h1>'
b.innerHTML = '<h1>textContent 속성</h1>'

// 속성 조작하기 
// 문서객체.setAttribute(속성 이름, 값) : 특정 속성에 값을 지정합니다
// 문서객체.getAttribute(속성 이름) : 특성 속성을 추출합니다
// 요소안에 속성에 값을 지정하는 것 예를들면 img src 에서 src에 값 지정 

// 스타일 조작하기
// 문서 객체의 스타일을 조작할 때는 style속성을 사용한다
// 두 단어 이상의 속성은 카멜케이스로 나타낸다 (두번째 단어부터 단어시작을 대문자로)
h1.style.backgroundColor
h1.style['backgroundColor']
h1.style['background-color']
// 스타일을 지정하는 세 가지 방법이 있으나 첫번째 방법을 가장 많이 사용한다

// 스타일 조작하기
const divs = document.querySelectorAll('body>div')

divs.forEach((div, index) => {
  console.log(div, index)
  const val = index * 10
  div.style.height = `10px`
  div.style.backgroundColor = `rgb(${val}, ${val}, ${val})`
})


// 문서 객체 생성하기 
// 문서 객체를 생성하고 싶을 때는 document.createElement()메소드를 사용한다
// document.createElement(문서 객체 이름)
// 그런데 문서 객체를 만들었다고 객체가 바로 배치되는 것은 아니다. 문서를 어떤 문서 아래 추가할 지를 지정해주어야 한다.
// 이러한 그림을 프로그래밍에서는 트리라고 부르고 어떤 문서객채의 위에 있는 것을 부모라고 하고 아래에있는 것을 자식이라고 한다.
// 부모객체.appendChild(자식 객체)
// 이를 활용하면 어떤 부모 객체 아래에 자식 객체를 추가할 수 있다

// 문서 객체 생성하고 추가하기
const header = document.createElement('h1')

header.textContent = '문서 객체 동적으로 생성하기'
header.setAttribute('data-custom', '사용자 정의 속성')
header.style.color = 'white'
header.style.backgroundColor = 'black'

document.body.appendChild(header)


// 문서 객체 이동하기
const divA = document.querySelector('#first')
const divB = document.querySelector('#second')
const h1 = document.createElement('h1')
h1.textContent = '이동하는 h1 태그'

const toFirst = () => {
  divA.appendChild(h1)
  setTimeout(toSecond, 1000)
}
const toSecond = () => {
  divB.appendChild(h1)
  setTimeout(toSecond, 1000)
}
toFirst()


// 문서 객체 제거하기
// 문서 객체를 제거할 때는 removeChild() 메소드를 사용한다
// 부모 객체.removeChild(자식 객체)
// 문서 객체.parentNode.removeChild(문서 객체)

// 문서 객체 제거하기
setTimeout(() => {
  const h1 = document.querySelector('h1')
  h1.parentNode.removeChild(h1)
}, 3000)

// setTimeout(functionRef, delay)
// functionRef : function타이머가 만료된 후 실행될 A 입니다.
// delay : 지정된 함수 또는 코드가 실행되기 전에 타이머가 대기해야 하는 시간(밀리초)입니다.


// 이벤트 설정하기
// 이벤트가 발생할 때 실행할 함수는 addEventLister()메소드 이다
// 문서 객체.addEventListener(이벤트 이름, 콜백 함수)
// 이벤트가 발생할 때 실행할 함수를 이벤트 리스너 또는 이벤트 핸들러 라고 부른다. 

// 이벤트 연결하기
let counter = 0
const h1 = document.querySelector('h1')

h1.addEventListener('click', (event) => {
  counter++
  h1.textContent = `클릭 횟수 : ${counter}`
})
// addEventListener(type, listener)
// type : 수신 대기할 이벤트 유형을 나타내는 대소문자 구분 문자열
// https://developer.mozilla.org/en-US/docs/Web/Events 이벤트 타입 종류 
// listener : Event지정된 유형의 이벤트가 발생할 때 알림을 받는 객체(인터페이스를 구현하는 객체)


// 이벤트 연결 제거하기 
// 문서 객체.removeEventListener(이벤트 이름, 이벤트 리스너)
let counter = 0
let isConnect = false

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const connectButton = document.querySelector('#connect')
const disconnectButton = document.querySelector('#disconnect')

const listener = (event) => {
  h1.textContent = `클릭 횟수: ${counter++}`
}

connectButton.addEventListener('click', () => {
  if (isConnect === false) {
    h1.addEventListener('click', listener)
    p.textContent = '이벤트 연결 상태: 연결'
    isConnect = true
  }
})

disconnectButton.addEventListener('click', () => {
  if (isConnect === true) {
    h1.removeEventListener('click', listener)
    p.textContent = '이벤트 연결 상태: 해제'
    isConnect = false
  }
})