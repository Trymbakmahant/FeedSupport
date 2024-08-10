import mongoose from "mongoose";

const FormCreationSchema = new mongoose.Schema({
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

  Rating: {
    type: String,
    require: [true, "plase provide a pfp "],
  },
  ProductName: {
    type: String,
    require: [true, "plase provide a ProductName "],
    unique: true,
  },
  Description: {
    type: String,
    require: [true, "plase provide a Description "],
    unique: true,
  },
});

const FormCreationModel =
  mongoose.models.FormCreation ||
  mongoose.model("FormCreation", FormCreationSchema);

export default FormCreationModel;
