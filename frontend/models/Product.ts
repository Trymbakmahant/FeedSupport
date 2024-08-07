import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  BussinessName: {
    type: String,
    require: [true, "plase provide a username "],
    unique: true,
  },
  BussinessAddress: {
    type: String,
    require: [true, "plase provide a address "],
    unique: true,
  },
  Questions: {
    type: [String],
    require: [true, "plase provide a description "],
  },
  ANS: {
    type: [String],
    require: [true, "plase provide a pfp "],
  },
  media: {
    type: String,
    require: [true, "plase provide a pfp "],
    unique: true,
  },
  Rating: {
    type: String,
    require: [true, "plase provide a pfp "],
    unique: true,
  },
  RatingValue: {
    type: String,
    require: [true, "plase provide a pfp "],
    unique: true,
  },
});

const ProductModel = mongoose.model("ProductModel", ProductSchema);

module.exports = ProductModel;
