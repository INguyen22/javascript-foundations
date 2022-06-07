class SkatePark{
  constructor(skateparkDetails) {
    this.name = skateparkDetails.name
    this.yearFounded = skateparkDetails.year
    this.style = skateparkDetails.type
    this.features = skateparkDetails.features
    this.isPrivate = true
  }
}

module.exports = SkatePark;
