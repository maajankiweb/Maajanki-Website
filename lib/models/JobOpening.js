import mongoose from 'mongoose';

const JobOpeningSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['fulltime', 'intern', 'parttime', 'contract'],
      default: 'fulltime',
    },
    department: {
      type: String,
      trim: true,
      default: 'General',
    },
    experience: {
      type: String,
      trim: true,
      default: '0–1 Years',
    },
    location: {
      type: String,
      trim: true,
      default: 'Bagaha, Bihar (HQ) / Hybrid',
    },
    salary: {
      type: String,
      trim: true,
      default: 'Competitive',
    },
    openings: {
      type: Number,
      default: 1,
    },
    deadline: {
      type: String,
      trim: true,
      default: '',
    },
    skills: {
      type: String,
      trim: true,
      default: '',
    },
    qualification: {
      type: String,
      trim: true,
      default: '',
    },
    duration: {
      type: String,
      trim: true,
      default: 'Full-Time position.',
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    requirements: {
      type: [String],
      default: [],
    },
    badges: {
      type: [
        {
          text: { type: String, trim: true },
          type: { type: String, trim: true },
        },
      ],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

JobOpeningSchema.index({ isActive: 1, order: 1, createdAt: -1 });
JobOpeningSchema.index({ category: 1 });

export default mongoose.models.JobOpening || mongoose.model('JobOpening', JobOpeningSchema);
