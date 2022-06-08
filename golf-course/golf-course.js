var Golfer = require('./golfer.js')

class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name
    this.difficulty = difficulty
    this.openings = openings
    this.features = features
    this.currentlyPlaying = []
  }
  checkInGroup(golfer) {
    for (var i = 0; i < golfer.length; i++) {
      if (this.openings < golfer.length) {
        return 'Sorry, we are currently booked! Please come back later.'
      }
      if (this.openings > golfer.length) {
        this.currentlyPlaying.unshift(golfer[i].name)
      }
  }
  this.openings -= golfer.length
  return 'You\'re checked in. Have fun!'
}
}
  // checkInGroup(golfer) {
  //   for (var i = 0; i < golfer.length; i++) {
  //     if (golfer.length === 3) {
  //   this.currentlyPlaying.unshift(golfer[i].name)
  //   console.log('golfer', this.currentlyPlaying)
  //     }
  //     if (golfer.length === 2) {
  //       return 'Sorry, we are currently booked! Please come back later.'
  //     }
  //   }
  //   this.openings -= golfer.length
  //   return 'You\'re checked in. Have fun!'
  // }

// checkInGroup() {
//   for (var i = 0; i < golfer.length; i++) {
//     if (this.openings < golfer.length) {
//       return 'Sorry, we are currently booked! Please come back later.'
//     }
//     if (this.openings > golfer.length) {
//       this.currentlyPlaying.unshift(golfer[i].name)
//     }
// }
// this.openings -= golfer.length
// return 'You\'re checked in. Have fun!'
// }
module.exports = GolfCourse;
