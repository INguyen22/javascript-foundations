class Werewolf {
  constructor(name) {
    this.name = name
    this.form = 'human'
    this.hungry = false
  }
  completeTransformation() {
    console.log('form', this.form)
    if (this.form === 'human') {
      return this.form = 'wolf', this.hungry = true, 'Aaa-Woooo!'
    }
      return this.form = 'human',this.hungry = false, 'Where are I?'
  }
  eatVictim(victim) {
    if (this.hungry === true) {
      return victim.alive = false, this.form = 'human', `Yum, ${victim.name} was delicious.`
    }
    else {
      return "No way am I eating Baby, I'd like a burger!"
    }
  }
}

module.exports = Werewolf;
