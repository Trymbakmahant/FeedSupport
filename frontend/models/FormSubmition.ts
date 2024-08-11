import mongoose from "mongoose";
import { boolean } from "zod";

const FormSubmitionSchema = new mongoose.Schema(
  {
    BussinessName: {
      type: String,
      require: [true, "plase provide a username "],
    },
    BussinessAddress: {
      type: String,
      require: [true, "plase provide a address "],
    },
    Questions: {
      type: [String],
      require: [true, "plase provide a quetion "],
    },
    ANS: {
      type: [String],
    },
    videoUrl: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    pfp: {
      type: String,
    },
    submitterAddress: {
      type: String,
      require: [true, "plase provide a  submitterAddress "],
    },
    EASaddress: {
      type: String,
      require: [true, "plase provide a  EASaddress "],
    },
    RatingValue: {
      type: String,
      require: [true, "plase provide a pfp "],
    },
    RatingType: {
      type: Boolean,
      require: [true, "plase provide a pfp "],
    },
    ProdcutName: {
      type: String,
      require: [true, "plase provide a pfp "],
    },
  },
  {
    timestamps: true,
  }
);

const FormSubmitionModel =
  mongoose.models.FormCreation ||
  mongoose.model("FormSubmiton", FormSubmitionSchema);

export default FormSubmitionModel;
