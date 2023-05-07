// 루트 컴포넌트 출력하기
// 컴포넌트(component) : 화면에 출력되는 요소
// 루트(root) 컴포넌트 : 최상위에 배치하는 컴포넌트 
// 컴포넌트 생성하기
// <컴포넌트 이름></컴포넌트 f이름>
// 컴포넌트 출력하기
// ReactDOM.render(컴포넌트, 컨테이너)

// JSX(자바스크립트 확장 문법) : 자바스크립트 코드 내부에 HTML 코드를 사용하는 것
// => 바벨이 JSX 코드를 읽고 자스문법으로 변환한뒤 실행해준다 

// JSX 기본 문법
// 표현식을 사용할 때는 {...} 기호를 사용한다. ""를 사용하면 안된다
// <태그>{표현식}</태그>
// <태그 속성={표현식} />

// 클래스 컴포넌트 : 클래스로 만드는 컴포넌트
// 함수 컴포넌트 : 함수로 만드는 컴포넌트
// 클래스 컴포넌트 만들기
class 컴포넌트이름 extends React.Component {
  render() {
    return <h1>출력할 것</h1>
  }
}


// React.Component 클래스는 여러 속성과 메소드를 제공. 오버라이드를 사용해서 우리가 필요한 속성과 메서드 추가 가능
// 클래스의 메소드 오버라이드하기 
class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

  }

  componentDidMount() {
    // 컴포넌트가 화면에 출력될 때 호출
  }
  componentWillUnmount() {
    // 컴포넌트가 화면에서 제거될 때 호출 
  }
}

// 변경해서 사용하는 속성에는 state 속성이 있다
// state 속성 값을 변경할때는 반드시 setState()메소드를 사용한다 
// 상태 선언하기 (생성자 위치)
this.state = { 속성: 값 }
// 상태 변경하기 (이외의 위치)
this.setState({ 변경할속성: 값 })