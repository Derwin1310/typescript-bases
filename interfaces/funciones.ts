(() => {

  interface addTwoNumbers {
    (a: number, b: number): number
  }

  let addNumbersFunction: addTwoNumbers

  addNumbersFunction = (a, b) => {
    return 10
  }

})()