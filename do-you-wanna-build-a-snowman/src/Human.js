var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name
    this.wantsToBuildASnowman = true
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(materials, num) {
    this.materials[materials] = this.materials[materials] + num
  }
  buildASnowman() {
    console.log('materials', this.materials)
    var snowman = new Snowman(this.materials)
    return snowman
  }
  placeMagicHat(snowman) {
    if (snowman.magicHat) {
    //if (this.buildASnowman(this.materials).magicHat) {
    //if (this.materials.coal >= 2 && this.materials.buttons >= 5 && this.materials.carrots >= 1 && this.materials.snowballs >= 2) {
    return 'Woah, this snowman is coming to life!'
  }
  return 'I guess I didn\'t build it correctly.'
  }
}

module.exports = Human;
