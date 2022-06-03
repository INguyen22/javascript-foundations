class Material {
 constructor(name, price, amount, units) {
   this.name = name
   this.price = price
   this.amount = amount
   this.units = units
 }
 useMaterial(amountUsed) {
   if (amountUsed > this.amount) {
     return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
   }
   this.amount = this.amount - amountUsed
     return `You now have ${this.amount} ${this.units} of ${this.name} left.`
 }
 calculateMaterialCost() {
   var newPrice = this.price * this.amount
   return newPrice
 }
}

module.exports = Material;
