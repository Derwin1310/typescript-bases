(() => {
  const hero: string = 'Flash'

  function returnName(): string {
    return hero
  }

  const activateBatiSignal = () => {
    return 'Batisignal activated!'
  }

  console.log(typeof activateBatiSignal)

  const heroName:string = returnName()
  console.log(heroName)

})()