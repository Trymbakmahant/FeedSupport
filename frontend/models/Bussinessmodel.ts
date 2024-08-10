import mongoose from "mongoose";

const BussinessSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "plase provide a username "],
      unique: true,
    },
    email: {
      type: String,
      require: [true, "plase provide a email "],
      unique: true,
    },
    address: {
      type: String,
      require: [true, "plase provide a email "],
      unique: true,
    },
    description: {
      type: String,
      require: [true, "plase provide a description "],
      unique: true,
    },

    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const BussinessModel =
  mongoose.models.BussinessModel ||
  mongoose.model("BussinessModel", BussinessSchema); // this will check if the bussiness model alerady existed or not

export default BussinessModel;
