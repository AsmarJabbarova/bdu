class Product{
    salePrice=0;
    costPrice=0;
    discountPercentage=false;
constructor(name, costPrice, salePrice, isDiscounted, discountPercentage){
    this.name=name;
    this.costPrice=costPrice;
    this.salePrice=salePrice;
    this.isDiscounted=isDiscounted;
    this.discountPercentage=discountPercentage;
}
getProfit(){
    if(this.discountPercentage==false){
        return salePrice-this.costPrice
    }
    
}}
const product1 = new product(`bag`, 800);
const product2 = new product(`bag`, 800);
const product3 = new product(`bag`, 800);
