import mongoose from "mongoose";

const uSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    vehicleName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
 contactNumber: { type: String, required: true },
    serviceType: { type: String, required: true },
    appointmentDate: { type: Date, required: true },    
    partsused: { type: String },
    serviceCost: { type: Number },
    status: { type: String, default: "Pending" },
    dateofservice: { type: Date },
    finalamount: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("User", uSchema);