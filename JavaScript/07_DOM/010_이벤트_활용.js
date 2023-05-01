// 이벤트를 연결하는 방법을 이벤트 모델 event model이라고 부른다
// addEventListener() => 표준 이벤트 모델 
// on으로 시작하는 속성은 고전 이벤트 모델이라고 부른다 ex) onkeyup

// 키보드 이벤트 
// keydown : 키가 눌릴 때
// keypress : 키가 입력되었을 때, 아시아권의 문자를 제대로 처리하지 못하는 경우가 많다 
// keyup : 키보드에서 키가 떨어질 때 실행됨 ** 이걸 많이 사용

// 남은 글자 수 클릭하기 
const textarea = document.querySelector('textarea')
const h1 = document.querySelector('h1')

textarea.addEventListener('keyup', (event) => {
  const length = textarea.value.length
  h1.textContent = `글자 수: ${length}`
})
// 문서객체.addEventListener('이벤트타입', (콜백)) 콜백자리에 event(줄여서 e)를 주로씀. 다른거 넣어도 무방

// 키보드 키 코드 사용하기
// code : 입력한 키
// keyCode : 입력한 키를 나타내는 숫자
// altKey : Alt키 눌렀는지
// cltKey
// shiftKey

// 키보드 이벤트와 관련된 이벤트 속성
const h1 = document.querySelector('h1')
const print = (event) => {
  let output = ''
  output += `alt: ${event.altKey}<br>`
  output += `ctrl: ${event.ctrlKey}<br>`
  output += `shift: ${event.shiftKey}<br>`
  output += `code: ${typeof (event.code) !== 'undefined' ? event.code : event.keyCode}<br>`
  h1.innerHTML = output
}

document.addEventListener('keydown', print)
document.addEventListener('keyup', print)

// 키보드로 별 움직이기
const star = document.querySelector('h1')
star.style.position = 'absolute'

let [x, y] = [0, 0]
const block = 20
const print = () => {
  star.style.left = `${x * block}px`
  star.style.top = `${y * block}px`
}
print()

const [left, up, right, down] = [37, 38, 39, 40]
document.body.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case left:
      x -= 1
      break
    case up:
      y -= 1
      break
    case right:
      x += 1
      break
    case down:
      y += 1
      break
  }
  print()
})


// 기본 이벤트 막기 
// preventDefault() 사용