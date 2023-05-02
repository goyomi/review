// 오류의 종류
// 1. 구문오류(syntax error) : 프로그램 실행 전에 발생하는 오류. 코드가 실행조차 되지 않음
// 2. 예외(expect, runtime error) : 프로그램을 실행할 때 발생하는 오류. 코드 실행중간에 발생.

// 기본예외처리
// 조건물을 사용해서 예외가 발생하지 않게 만드는 것을 기본 예외 처리라고 한다

const h1 = document.querySelector('h1')
h1.textContent = '안녕하세요'
// 내부에 h1이 없는 경우 오류를 밷어냄 
// 기본 예외 처리
const h1 = document.querySelector('h1')
if (h1) {
  h1.textContent = '안녕하세요'
} else {
  console.log('h1 태그를 추출할 수 없습니다.')
}

// 자바스크립트는 유연한 언어라서 타 언어에 비해 오류가 날 가능성이 낮음


// 고급 예외 처리 
// try catch finally 
try {
  // 예외가 발생할 가능성이 있는 코드 
} catch (expection) {
  // 예외가 발생했을 때 실행할 코드
} finally {
  // 무조건 실행할 코드, finally 구문은 필요한 경우에만 사용 
}


// 예외 객체(예외와 관련된 정보를 담은 객체)
// try catch 구문을 사용할 때 catch 괄화 안에 입력하는 식별자를 예외 객체라고 한다 
// 예외 객체 속성
// name : 예외 이름, message : 예외 메세지 