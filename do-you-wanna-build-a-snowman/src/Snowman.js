class Snowman {
  constructor(snowmanDetails) {
    //console.log('snowman', snowmanDetails)
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.snowballs = snowmanDetails.snowballs
    this.magicHat = false
    }
    canWearMagicHat() {
      console.log('this', this)
      //console.log('buttons', this.buttons)
      if (this.coal >= 2 && this.buttons >= 5 && this.carrots >= 1 && this.snowballs >= 2) {
      this.magicHat = true
      }
      console.log('magichat', this.magicHat)
    }
  }


module.exports = Snowman;
