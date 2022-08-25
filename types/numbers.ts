(() => {
  let avengers: number = 10

  console.log(avengers)

  const villians: number = 20

  if (avengers < villians) {
    console.log('estamos en problemas')
  } else {
    console.log('nos salvamos')
  }

  avengers = 123

  console.log({avengers})

})()