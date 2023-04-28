// 2. 다음 코드의 실행 결과를 예측해 보시오
function printLang(code) {
  return printLang._lang[code]
}
printLang._lang = {
  ko: '한국어',
  en: '영어',
  ja: '일본어',
  fr: '프랑스어',
  es: '스페인어'
}

console.log('printLang("ko"):', printLang('ko'))
console.log('printLang("en"):', printLang('en'))

// 3. Math 객체로 사인90도의 값을 구하기 (사인 90도는 1이다)
const degree = 90

// Math.sin() 함수는 라디안 값으로 삼각함수 값을 계산합니다. 따라서, 직접 각도 값을 입력할 수는 없으며, 먼저 각도를 라디안으로 변환한 후에 Math.sin() 함수에 전달해야 합니다.
// 각도 값을 라디안으로 변환하려면 다음과 같은 수식을 사용할 수 있습니다: radian = degree * Math.PI / 180

radian = degree * Math.PI / 180
console.log(Math.sin(radian))
