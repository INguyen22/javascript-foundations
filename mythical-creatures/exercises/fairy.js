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
  replaceInfant(firstInfant, newFirstInfant) {
    var newFirstInfant = firstInfant
    newFirstInfant.disposition = 'Malicious'
    this.humanWards.push(firstInfant)
    this.disposition = 'Good natured'
    return newFirstInfant

  }
}

module.exports = Fairy;
