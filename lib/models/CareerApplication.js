import mongoose from 'mongoose';

const CareerApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    cvFileName: {
      type: String,
      trim: true,
      default: '',
    },
    cvFileData: {
      type: String, // base64 encoded string if uploaded directly
      default: '',
    },
    cvFileSize: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['New', 'Reviewing', 'Shortlisted', 'Interviewed', 'Rejected', 'Hired'],
      default: 'New',
    },
    source: {
      type: String,
      default: 'careers-page',
    },
  },
  { timestamps: true }
);

CareerApplicationSchema.index({ position: 1, createdAt: -1 });
CareerApplicationSchema.index({ email: 1 });
CareerApplicationSchema.index({ status: 1 });

export default mongoose.models.CareerApplication || mongoose.model('CareerApplication', CareerApplicationSchema);
