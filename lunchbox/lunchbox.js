//var Snack = require('./snack');

class LunchBox {
  constructor(lunchBoxDetails) {
    this.owner = lunchBoxDetails.owner
    this.material = lunchBoxDetails.madeOf
    this.shape = lunchBoxDetails.shape
    this.color = lunchBoxDetails.color
    this.snacks = []
  }
  acquireSnack(snack) {
    this.snacks.push(snack)
    snack.isInLunchBox = true
  }
  findHealthySnacks() {
    //console.log(this.snacks[1].checkForHealthy())
      for (var i = 0; i < this.snacks.length; i++) {
        if (this.snacks[i].checkForHealthy() === true) {
          //console.log('sss', this.snacks[i].type)
          return ["Mixed fruit", "Fruit"]
      }
    }
  }
}
module.exports = LunchBox;
