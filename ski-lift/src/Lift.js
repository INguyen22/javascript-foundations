var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }
  admitSkier(skier, hasTicket) {
    var skier = new Skier(skier)
    if (!hasTicket) {
      return `Sorry, ${skier.name}. You need a lift ticket!`
    }
    if (this.skiers.length < this.limit) {
    this.skiers.push(skier)
    }
    return `Sorry, ${skier.name}. Please wait for the next lift!`
  }
  startLift() {
    var spots = this.limit - this.skiers.length
    //console.log('onLift', this.skiers)
    if (this.skiers.length >= this.limit) {
    this.safetyBar = 'down'
    }
    else if (spots === 1) {
    return `We still need ${spots} more skier!`
    }
    else if (spots === 2) {
    return `We still need ${spots} more skiers!`
    }
  }

}

module.exports = Lift;
