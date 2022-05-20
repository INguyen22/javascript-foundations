class Magician {
  constructor(mage, assistant, otherAccessory) {
  console.log('mage', mage)

    this.name = 'The Great ' + mage.name
    this.assistant = mage.assistant
    this.favoriteAccessory = mage.clothing || 'top hat'
  }
  performIncantation(spell) {
    return spell.toUpperCase() + '!'
  }
  performTrick() {
    console.log('trick', performTrick)
    return 'meh'
  }
}

var mage = new Magician({})

module.exports = Magician;
