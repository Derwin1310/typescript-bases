(() => {
  const addNumber = (a: number, b: number): number => a + b
  const greet = (name: string): string => `Hello ${name}`
  const saveTheWorld = (): string => `The world is saved`

  // let myFunction;

  // myFunction = 10
  // console.log(myFunction)
  
  // let myFunction: (x: number, y: number) => number
  // myFunction= addNumber
  // console.log(myFunction(1, 2))

  // let myFunction: (x: string) => string
  // myFunction= greet
  // console.log(greet('Derwin'))

  let myFunction: () => string = saveTheWorld
  console.log(myFunction())
})()