import mongoose from "mongoose";

const FormSubmitionSchema = new mongoose.Schema({
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
    unique: true,
  },
});

const FormSubmitionModel =
  mongoose.models.FormCreation ||
  mongoose.model("FormSubmiton", FormSubmitionSchema);

export default FormSubmitionModel;
