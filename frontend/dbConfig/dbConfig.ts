import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("monogoos connected");
    });
    connection.on("error", (error) => {
      console.log("mongoose error " + error);
      //   process.exit();
    });
  } catch (error) {
    console.log("Something went wrong ");
    console.log(error);
  }
}
