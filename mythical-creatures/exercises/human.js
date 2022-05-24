class Human {
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
    this.knockedOut = false
  }
  noticesOgre() {
    //if encounterCounter === 0 return false
    // if (this.encounterCounter === 0) {
    //   return false
    // }
    //if encounterCounter divided by 3 gives us a remainder of zero
    if (this.encounterCounter % 3 === 0 && this.encounterCounter !== 0) {
      return true
  }
      return false
  }
}

module.exports = Human;
