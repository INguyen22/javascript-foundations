class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white'
    }
    else {
    this.color = color;
  }
}
isWhite() {
  if (this.color !== 'white') {
    return false
  }
  }
  says(message) {
return `**;* ${message} *;**`
  }
}
//the logical operator version
//this.color = color || 'white'
/*  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  defaultColor(color) {
  if (this.color === 'white') {
    this.color = 'white'
  }
    }
  } */


//  var defaultColor;
  //if (this.color !== 'white')

//expected white to equal blue
//var color = 'white'
//if (this.color !== 'white') {
//this.name = name;
//this.color = color;
//}
//}


//var unicornColor = 'white'
//if (this.color !== white) {
  //return color;
//}

module.exports = Unicorn;
