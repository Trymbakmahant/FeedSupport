import mongoose from "mongoose";

const DashboardSchema = new mongoose.Schema({
  bussinessData: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    unique: true,
  },
  totalFeedBackForm: {
    type: Number,
    require: [true, "plase provide a username "],
    unique: true,
  },
  totalSupportForm: {
    type: Number,
    require: [true, "plase provide a email "],
    unique: true,
  },
  avgFeedbackRating: {
    type: Number,
    require: [true, "plase provide a description "],
    unique: true,
  },
  totalFeedbackRespons: {
    type: Number,
  },
  totalSupportFormSubmition: {
    type: Number,
  },
});

const Dashboard =
  mongoose.models.Dashboard || mongoose.model("Dashboard", DashboardSchema); // this will check if the bussiness model alerady existed or not

export default Dashboard;
