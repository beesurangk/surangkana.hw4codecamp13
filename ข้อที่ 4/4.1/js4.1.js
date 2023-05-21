function Calculator() {
    this.read = function () {
      this.num1 = +prompt("Number 1: ");
      this.num2 = +prompt("Number 2: ");
    };
  
    this.sum = function () {
      return this.num1 + this.num2;
    };
  
    this.mul = function () {
      return this.num1 * this.num2;
    };
  }
  
  let calculator = new Calculator();
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
  num;