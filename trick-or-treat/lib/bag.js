class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }
  fill(candy) {
    this.candies.push(candy)
    this.count += 1
}
  contains(candy) {
    console.log('candy', candy)
    console.log('bag', this.candies[0].type)
    if (this.candies[0].type.includes(candy)) {
      return true
      }
      return false
}
}

module.exports = Bag;
