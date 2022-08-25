(() => {
  //Las interfaces son muy parecidas a los type
  //Las interfaces son parecidas a las clases pero no crean instancias
  //Las dos diferencias es que los type se declaran con = y que las interface se pueden extender de estas dos maneras
  interface Client {
    name: string
    age?: number
      // address: Address
  }

  interface Address extends Client {
    id: number
    zip: string
    city: string
  }

  const client: Address = {
    name: 'Derwin',
    age: 24,
    // address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    // }
  }

  const client2: Address = {
    name: 'Melissa',
    age: 30,
    // address: {
      id: 123,
      zip: 'K2S SUD',
      city: 'Ottawa'
    }
  // }



})()