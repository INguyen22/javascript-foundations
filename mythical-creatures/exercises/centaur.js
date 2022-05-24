class Centaur {
  constructor(centaurDetails) {
    this.name = centaurDetails.name
    this.breed = centaurDetails.type
    this.cranky = false
    this.standing = true
  }
  shootBow() {
    return this.cranky = true, "Twang!!!"
  }
  run(){
    return this.cranky = true, "Clop clop clop clop!!!"
  }
}

module.exports = Centaur;
