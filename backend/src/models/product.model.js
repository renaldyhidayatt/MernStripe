const mongoose = require("mongoose");

//https://github.com/sathyaprakash195/sheycommerce/blob/master/models/productModel.js

const reviewSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    countInStock: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },

    reviews: [reviewSchema],
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
