class Snowman {
  constructor(snowmanDetails) {
    console.log('snowman', snowmanDetails)
    this.carrots = snowmanDetails.carrots;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.snowballs = snowmanDetails.snowballs
    }
  }


module.exports = Snowman;
