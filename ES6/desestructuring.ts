(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  const showHero = ({ ironman, ...rest }:Avengers): void => {

    // console.log(ironman)
    // console.log(rest)

  }

  showHero(avengers)

  const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk']

  const [capi, ironman,] = avengersArr

  // console.log(ironman, capi)
})()