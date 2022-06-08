class Golfer {
  constructor(golferDetails) {
    this.name = golferDetails.name
    this.handicap = golferDetails.handicap
    this.frustration = 0
    this.confidence = 0
  }
  calculateAvg(par) {
    //console.log('par', par)
    this.handicap += par
    return `I usually shoot a ${this.handicap} on average.`
  }
  playRound(course) {
    //console.log(course)
    if (course.difficulty === 'hard') {
      this.frustration += 500
    }
    if (course.difficulty === 'moderate') {
    this.frustration += 100
    }
  }
  hitTheRange() {
    this.confidence += 10
  }
  marvel(course) {
    //console.log('course', course)
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }
  whatYaShoot(score) {
    if (score === 0) {
      this.frustration -= 10
      return 'Booyah!'
    }
    else if (score < 0) {
      this.frustration = 0
      return 'I AM THE GREATEST GOLFER ALIVE!'
    }
    else {
      this.frustration += 20
      return 'Doh!'
    }
  }
}

module.exports = Golfer;
