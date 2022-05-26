class Centaur {
  constructor(centaurDetails) {
    this.name = centaurDetails.name
    this.breed = centaurDetails.type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.activity = 0
  }
  shootBow() {
    if (this.activity < 2) {
    this.activity += 1
    return "Twang!!!"
  }
    return this.cranky = true, "NO!"
  }
  run(){
    if (this.activity < 2) {
    this.activity += 1
    return "Clop clop clop clop!!!"
  }
    return this.cranky = true, "NO!"
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!'
    }
    return this.cranky = false, this.activity = 0, 'ZZZZ'
  }
  layDown() {
    this.standing = false
    this.layingDown = true
    this.activity = 2
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    if (this.standing === true) {
    this.cranky = false
    }
    return 'Not while I\'m laying down!'
  }
}

module.exports = Centaur;
