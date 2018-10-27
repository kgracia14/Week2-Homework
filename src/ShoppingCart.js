class ShoppingCart {
  constructor() {
    this.currentCart= [];
  }

  getItems() {
    return this.currentCart;
  }

  addItem(itemName, quantity, price) {
    const eachItem = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    }

    this.currentCart.push(eachItem);
  }

  clear() {
    this.currentCart = [];
  }

  total() {
    return this.currentCart.reduce((acc, obj) => acc + (obj.quantity * obj.pricePerUnit), 0);
  }

}



//test
const cart= new ShoppingCart();

cart.addItem('apple', 4, 1.50);
cart.addItem('potato', 2, 1.25);
// cart.clear();

console.log(cart.total());



module.exports = ShoppingCart;
