class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
    this.heroesEaten = 0
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length === 4) {
      this.riddles.shift()
    }
  }
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
    if (this.riddles[i].answer.includes(answer)) {
      this.riddles.splice(i, 1)
      //console.log('riddles', this.riddles)
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
    this.heroesEaten ++
  }
}

module.exports = Sphinx;
