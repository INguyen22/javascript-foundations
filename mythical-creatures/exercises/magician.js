class Magician {
  constructor(mage) {
    console.log('mage', this.name)

    this.name = 'The Great ' + mage.name
  }
}

var mage = new Magician('The Great ' + mage)

module.exports = Magician;
