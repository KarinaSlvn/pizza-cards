class Product {
    constructor(name, price, calorific) {
        this.name = name;
        this.price = price;
        this.calorific = calorific;
    }
}

class Pizza {
    constructor(name, ingredients, img) {
        this.name = name;
        this.ingredients = ingredients.map(name => new Product(name, randomInteger(7, 35), randomInteger(40, 60)));
        this.price = this.calculateProperty('price');
        this.calorific = this.calculateProperty('calorific');
        this.img = img;
    }

    calculateProperty(property) {
        return this.ingredients.reduce((sum, item) => sum + item[property], 0);
    }

    removeIngredient(index) {
        this.ingredients.splice(index, 1);
        this.price = this.calculateProperty('price');
        this.calorific = this.calculateProperty('calorific');
    };
}
