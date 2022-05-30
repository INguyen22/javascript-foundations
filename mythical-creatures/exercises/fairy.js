class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {
      dresses: ['Iris',]
    }
    this.disposition = 'Good natured'
    this.humanWards = []
  }
  receiveBelief() {
    this.dust = this.dust += 1
    return this.dust
  }
  believe() {
    this.dust = this.dust += 10
  }
  makeDresses(newDress) {
  this.clothes.dresses = this.clothes.dresses.concat(newDress)
  return this.clothes.dresses
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(firstInfant) {
    firstInfant.disposition = 'Malicious'
    var newFirstInfant = firstInfant
    newFirstInfant = firstInfant
    //when the fairy replaces the baby
    //the new baby should be like the first baby but malicious
  }
}

module.exports = Fairy;
