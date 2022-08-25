(() => {
  const fullName = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(' ')}`
  }

  const showName: string = fullName('Derwin', 'Eduardo', 'Romero', 'Robles')

  console.log({showName})

})()