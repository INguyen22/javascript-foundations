var Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name
    this.location = stark.area || 'Winterfell'
    this.safe = false
  }
  sayHouseWords() {
    if (this.safe === true) {
    return 'The North Remembers'
    }
    return 'Winter is Coming'
  }
  callDirewolf(name, area) {
    console.log('this', this)
    var direwolf = new Direwolf(name, this.location)
    direwolf.protect(this)
    return direwolf
  }
}

module.exports = Stark;


//if this.name
// var person = {
//   name: 'kim',
//   location: 'winterfel',
//   safe: false
// }
//
// console.log(person.name)
// console.log(person.location)
// console.log(person.safe)
