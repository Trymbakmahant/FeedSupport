import mongoose from "mongoose";

const DashboardSchema = new mongoose.Schema({
  bussinessData: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  totalFeedBackForm: {
    type: Number,
    require: [true, "plase provide a username "],
  },
  totalSupportForm: {
    type: Number,
    require: [true, "plase provide a email "],
  },
  avgFeedbackRating: {
    type: Number,
    require: [true, "plase provide a description "],
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
