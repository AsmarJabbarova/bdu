const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    // _id: mongoose.Schema.ObjectId,
    id:String,
    name: String,

  },
  { collection: "Product", timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;