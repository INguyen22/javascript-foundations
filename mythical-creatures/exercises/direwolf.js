class Direwolf {
  constructor(name, home, size) {
    this.name = name
    this.home = home || 'Beyond the Wall'
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark) {
    if (this.starksToProtect.length === 2) {
      return
    }
    if (this.home === stark.location) {
    stark.safe = true
    this.starksToProtect.push(stark)
    this.huntsWhiteWalkers = false
    console.log('name', this.starksToProtect)
    }
  }
  leave(stark) {
    this.starksToProtect = []
    stark.safe = false
  }
}

module.exports = Direwolf;
