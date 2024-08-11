import mongoose from "mongoose";

const FormCreationSchema = new mongoose.Schema(
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

    Rating: {
      type: Boolean,
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
    },
  },
  {
    timestamps: true,
  }
);

const FormCreationModel =
  mongoose.models.FormCreation ||
  mongoose.model("FormCreation", FormCreationSchema);

export default FormCreationModel;
