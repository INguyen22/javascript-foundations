class SkatePark{
  constructor(skateparkDetails) {
    this.name = skateparkDetails.name
    this.yearFounded = skateparkDetails.year
    this.style = skateparkDetails.type
    this.features = skateparkDetails.features
    this.isPrivate = skateparkDetails.isPrivate || false
    this.cost = skateparkDetails.price || 0
    this.occupants = []
  }
  admit(skater) {
    console.log('skater', skater)
    if (!this.isPrivate) {
      this.occupants.push(skater)
      return 'Welcome to the free Major Taylor Skatepark!'
    }
    if (this.isPrivate && skater.money >= 12 && this.occupants.length < 3) {
        this.occupants.push(skater)
        skater.money = skater.money - 12
        return 'Welcome to Curbside, the cost will be $12.00.'
    }
    else if (this.isPrivate && skater.money < 12) {
      return `Sorry, you don't have enough money.`
    }
    else if (this.isPrivate && this.occupants.length === 3)
    return 'Sorry, we are at max capacity. Thank you for understanding.'
}
}

module.exports = SkatePark;
