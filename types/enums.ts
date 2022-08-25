(() => {
  //es como un objeto de enumeraciones, por eso el nombre num
  enum AudioLvl {
    min, // 0
    medium, // 1
    max // 2
  }

  let currentAudio: AudioLvl = AudioLvl.medium

  console.log(currentAudio) // 1

  console.log(AudioLvl)

})()