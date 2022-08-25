(() => {
  //el never se utiliza para tipar funciones que van a retornar un error y no tienen punto de retorno
  // al retornar el error detienen la ejecucion del codigo
  const error = (message: string): never => {
    throw new Error(message)
  }

  error('Auxilio!')


})()