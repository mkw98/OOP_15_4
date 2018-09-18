function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var Samsung Galaxy S6 = new Phone("Samsung", 900, "black");
var iPhone 6s = new Phone("Apple", 1500, "white");
var OnePlus One = new Phone("OnePlus", 1300", "black");
