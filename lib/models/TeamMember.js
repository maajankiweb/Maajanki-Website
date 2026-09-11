import mongoose from 'mongoose';

const TeamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Team member name is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role/Designation is required'],
      trim: true,
    },
    category: {
      type: String,
      enum: ['leadership', 'squad'],
      default: 'squad',
      required: true,
    },
    photo: {
      type: String,
      required: [true, 'Photo URL or path is required'],
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
      default: '',
    },
    showSocial: {
      type: Boolean,
      default: true,
    },
    bio: {
      type: String,
      required: [true, 'Primary bio is required'],
      trim: true,
    },
    bio2: {
      type: String,
      trim: true,
      default: '',
    },
    bio3: {
      type: String,
      trim: true,
      default: '',
    },
    coreExpertise: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

TeamMemberSchema.index({ category: 1, order: 1, createdAt: -1 });
TeamMemberSchema.index({ isActive: 1 });

export default mongoose.models.TeamMember || mongoose.model('TeamMember', TeamMemberSchema);
