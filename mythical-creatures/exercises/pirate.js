class Pirate {
  constructor(pirate, otherJob) {
    this.name = pirate
    this.job = otherJob || 'scallywag'
    this.cursed = false
    this.booty = 0
  }
  robShip() {
    if (this.booty < 500) {
      this.booty += 100
      console.log('current loot', this.booty)
      return 'YAARRR!'
    }
    if (this.booty === 500) {
    this.cursed = true
    return 'ARG! I\'ve been cursed!'
  }
}
  liftCurse() {
  if (this.booty >= 300 && this.cursed === true) {
    this.booty = this.booty - 300
    this.cursed = false
    return 'Your curse has been lifted!'
    }
    return 'You don\'t need to lift a curse!'
  }
}

module.exports = Pirate;
