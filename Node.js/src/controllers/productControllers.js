const Product = require("./../models/userModel")
// const postProduct = asserts((req, res) => {
//   console.log(req.body);
// });

const postProduct=(req,res)=>{
  console.log(req.body);

const newProduct=new Product(req.body)
console.log(newProduct);
}


const getAllProduct = async (req, res) => {
    let allProducts = await Product.find({})
  res.send(allProducts);
  // res.send("salam")
};

module.exports = {  getAllProduct,postProduct };