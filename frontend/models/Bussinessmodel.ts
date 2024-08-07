import mongoose from "mongoose";

const BussinessSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "plase provide a username "],
      unique: true,
    },
    address: {
      type: String,
      require: [true, "plase provide a address "],
      unique: true,
    },
    description: {
      type: String,
      require: [true, "plase provide a description "],
      unique: true,
    },
    pfp: {
      type: String,
      require: [true, "plase provide a pfp "],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const BussinessModel =
  mongoose.models.BussinessModel ||
  mongoose.model("BussinessModel", BussinessSchema); // this will check if the bussiness model alerady existed or not

export default BussinessModel;
