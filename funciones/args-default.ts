(() => {
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    return upper ? `${firstName} ${lastName}`.toUpperCase() : `${firstName} ${lastName}`.toLowerCase()
  }

  const name = fullName('Tony', 'Stark', true)

  console.log({name})

})()