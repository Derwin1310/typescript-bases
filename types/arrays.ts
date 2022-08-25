(() => {
  type arr = (string | number | boolean)[]
  const number: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // number.push(11)
  // number.push('12')
  // number.push(true)

  // console.log(number)

  const villians = ['Omega Rojo', 'Duende Verde', 'Dormammu']

  villians.forEach(v => console.log(v.toUpperCase()))

})()