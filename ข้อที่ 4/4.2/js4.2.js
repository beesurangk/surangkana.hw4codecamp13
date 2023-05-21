function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function () {
      let temp = +prompt("Enter number: ", 5);
      this.value += temp;
    };
  }
  let accumulator = new Accumulator(12);
  
  console.log(accumulator.value); // 12
  
  console.log(accumulator.read()); // 5
  
  console.log(accumulator.value); // 17