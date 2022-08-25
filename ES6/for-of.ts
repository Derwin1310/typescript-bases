(() => {
  
  type Avenger = {
    name: string
    weapong: string
  }

  const ironman: Avenger = {
    name: 'Ironman',
    weapong: 'Armorsuit'
  }

  const captainAmerica: Avenger = {
    name: 'Captain America',
    weapong: 'Shield'
  }

  const thor: Avenger = {
    name: 'Thor',
    weapong: 'Mjolnir'
  }

  const avengers: Avenger[] = [ironman, thor, captainAmerica]

  for (const avenger of avengers) {
    // console.log(avenger)
  }

})()