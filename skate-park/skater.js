class Skater {
  constructor(skaterDetails) {
    this.name = skaterDetails.name
    this.skill = skaterDetails.skill
    this.tricks = skaterDetails.tricks
    this.money = skaterDetails.cash
    this.frustration = 0
  }
  practice(trick) {
    //console.log('tricks', trick)
    //console.log('tricks', this.tricks[trick])
    if (!this.tricks[trick] && this.frustration < 2) {
    this.frustration += 1
    }
    else {
      this.frustration = 0
      this.tricks[trick] = true
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater;
