export class item{

    constructor(id,desc,price,qty) {
        this._id = id;
        this._desc = desc;
        this._price = price;
        this._qty = qty;
    }
    get id(){
        return "ID_" + this._id;
    }
    get desc(){
        return"Description_" + this._desc;
    }
    get price(){
        return"Unit-Price_" + this._price;
    }
    get qty(){
        return"Quantity_" + this._qty;
    }
    set id(id){
        this._id=id;
    }
    set desc(desc){
        this._desc=desc ;
    }
    set price(price){
        this._price=price ;
    }
    set qty(qty){
        this._qty=qty ;
    }
}