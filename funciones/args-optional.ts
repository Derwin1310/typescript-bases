(() => {
  //le colocamos el ? al parametro y se vuelve opcional, lo podemos enviar o no

  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName}`
  }

  const name = fullName('Tony', 'Stark')

  console.log({name})

})()