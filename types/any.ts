//Tratar de nunca utilizar el tipo any

(() => {
  let avenger: any = 123
  let exists
  let power

  avenger = 'Dr Strange'

  console.log((avenger as string).charAt(0))

  avenger = 150.123123
  console.log(avenger.toFixed(2))

})()