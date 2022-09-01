export class Menus {
    name = String;
    category = String; 
    price = Number;

    constructor(
        name = String,
        category = String,
        price = Number,
    )
    {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}