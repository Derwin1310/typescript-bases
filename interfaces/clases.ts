(() => {

  interface Xmen {
    name: string
    realName: string
    mutantPower(id: number): string
  }

  interface Human {
    age: number
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {

    }

    mutantPower(id: number) {
      return this.name + ' ' + this.realName + ' ' + id
    }

  }

  const mutant = new Mutant (24, 'Coderwin', 'Derwin')

  console.log(mutant)
  console.log(mutant.mutantPower(30))

})()