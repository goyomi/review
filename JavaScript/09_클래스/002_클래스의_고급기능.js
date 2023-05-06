// 상속
// Rectangle 클래스
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getPerimeter() {
    return 2 * (this.width + this.height)
  }

  getArea() {
    return this.width * this.height
  }
}

const rectangle = new Rectangle(10, 20)
console.log(`사각형의 둘레: ${rectangle.getPerimeter()}`)
console.log(`사각형의 넓이: ${rectangle.getArea()}`)

// square 클래스 추가하기
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getPerimeter() {
    return 2 * (this.width + this.height)
  }

  getArea() {
    return this.width * this.height
  }
}
// 정사각형 클래스 
class Square {
  constructor(length) {
    this.length = length
  }

  getPerimeter() {
    return 4 * this.length
  }

  getArea() {
    return this.length * this.length
  }
}

const square = new Square(10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)


// 상속을 통해서 클래스 선언 코드를 중복해서 작성하지 않고 코드의 생산 효율을 올릴 수 있다
class 클래스이름 extends 부모클래스이름 {

}
// 상속: 어떤 클래스가 가지고 있는 유산(속성과 메소드)을 다른 클래스에게 물려주는 형태로 사용
// 유산을 주는 클래스를 부모클래스, 유산을 받는 클래스를 자식클래스 라고 부른다

// 사각형 클래스와 정사각형 클래스
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getPerimeter() {
    return 2 * (this.width + this.height)
  }

  getArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
  }
}

const square = new Square(10, 20)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)


// static 속성과 메소드
// 디자인 패턴 : 더 효율적으로 프레임워크를 개발할 수 있게 다양한 패턴을 고안한다 
// static 속성을 정적 속성, 정적 메소드라고 부르기도 함 
class 클래스이름 {
  static 속성 = 값
  static 메소드() {

  }
}
// static 속성과 메소드는 인스턴스를 만들지 않고 사용할 수 있는 속성과 메소드이다
클래스이름.속성
클래스이름.메소드()

// static 키워드 사용하기
class Square {
  #length
  static #counter = 0
  static get counter() {
    return Square.#counter
  }

  constructor(length) {
    this.length = length
    Square.#counter += 1
  }

  static perimeterOf(length) {
    return length * 4
  }
  static areaOf(length) {
    return length * length
  }

  get length() { return this.length }
  get perimeter() { return this.#length * 4 }
  get area() { return this.#length * this.#length }

  set length(length) {
    if (length <= 0) {
      throw '길이는 0보다 커야 합니다'
    }
    this.#length = length
  }
}

const squareA = new Square(10)
const squareB = new Square(10)
const squareC = new Square(10)

console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}개입니다.`)
console.log(`한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`)
console.log(`한 변의 길이가 30인 정사각형의 둘레는 ${Square.areaOf(30)}입니다.`)
