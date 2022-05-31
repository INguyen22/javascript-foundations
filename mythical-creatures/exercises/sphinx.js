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
      return this.riddles
    }
  }
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
    if (this.riddles[i].answer.includes(answer)) {
      this.riddles.splice(i, 1)
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
      this.heroesEaten += 1
    }
  }
}

module.exports = Sphinx;
