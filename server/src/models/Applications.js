import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [100, "Company name is too long"],
    },
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      maxlength: [100, "Job title is too long"],
    },
    date: {
      type: String,
      required: [true, "Application date is required"],
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["Applied", "Interview", "Offer", "Rejected"],
        message: "{VALUE} is not a valid status",
      },
      default: "Applied",
    },
    url: {
      type: String,
      trim: true,
      default: "",
    },
    notes: {
      type: String,
      trim: true,
      default: "",
      maxlength: [1000, "Notes are too long"],
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
