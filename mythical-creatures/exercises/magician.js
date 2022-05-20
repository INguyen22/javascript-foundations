class Magician {
  constructor(mage, assistant, otherAccessory) {
  console.log('mage', mage)

    this.name = 'The Great ' + mage.name
    this.assistant = mage.assistant
    this.favoriteAccessory = mage.clothing || 'top hat'
    this.confidencePercentage = 10
  }
  performIncantation(spell) {
    return spell.toUpperCase() + '!'
  }
  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat') {
    return 'PULL RABBIT FROM TOP HAT'
    }
    return 'PULL DOVE FROM SLEEVE'
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      console.log(this.confidencePercentage)
      return 'WOW! The magician totally just sawed that person in half!'
      }
      return 'Oh no, this trick is not ready!'
  }
}

//var mage = new Magician({})

module.exports = Magician;
