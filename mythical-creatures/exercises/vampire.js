class Vampire {
  constructor(name, otherPet) {
    this.name = name
    this.pet = otherPet || 'bat'
    this.thirsty = true
    this.drank = true
    this.ouncesDrank = 0
  }
  drink() {
    this.ouncesDrank = this.ouncesDrank + 10
    for (var i)
    if ((this.drank === true) && (this.ouncesDrank === 50)) {
      this.thirsty = false
      return 'I\'m too full to drink anymore'
    }
  }
}

/*this.ouncesDrank = this.ouncesDrank + 10
console.log(this.ouncesDrank)
if (this.ouncesDrank === 50) {
this.thristy = false
return 'I\'m too full to drink anymore'*/

module.exports = Vampire;
