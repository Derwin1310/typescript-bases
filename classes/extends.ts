(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      // console.log('constructor avenger llamado')
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`
    }
  }

  class Xmen extends Avenger {
    constructor(public isMutant: boolean, name: string, realName: string) {
      super(name, realName)
      // console.log('Constructor xmen llmado')
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre es menor a 3 letras')
      }
      this.name = name
    }

    getFullNameFromXmen(): void {
      console.log(super.getFullName())
    }
  }

  const wolverine = new Xmen(true, 'wolverine', 'logan')
  // console.log(wolverine)
  // wolverine.getFullNameFromXmen()

  //getter
  // console.log(wolverine.fullName)
  //setter
  wolverine.fullName = 'derwin'
  // console.log(wolverine.fullName)

})()