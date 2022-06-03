class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
    this.heroesEaten = 0
    this.rage = 0
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length === 4) {
      this.riddles.shift()
    }
  }
  attemptAnswer(answers) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answers && this.rage < 1) {
        this.riddles.splice(i, 1)
        this.rage += 1
        //console.log(this.rage)
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
      else if (this.rage === 1) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answers}"???`
      }
    }
    this.heroesEaten ++
  }
}
//once the riddles are all gone,
// the sphinx is angry and says `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
//if there is a riddle in the array still, return mock statement
module.exports = Sphinx;
