class Ogre {
  constructor(ogreDetails, home) {
    this.name = ogreDetails.name;
    this.home = ogreDetails.abode || 'Swamp'
    this.swings = 0
  }
  encounter(human) {
    human.encounterCounter += 1
    if (human.noticesOgre() === true) {
     this.swingAt(human)
    }
  }
  swingAt(human) {
    this.swings += 1
    if (this.swings === 2) {
      human.knockedOut = true
    }
  }
  apologize(human) {
    human.knockedOut = false
  }
}

module.exports= Ogre;

//every 2 swings the human gets knocked out
