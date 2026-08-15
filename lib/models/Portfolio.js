import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      default: 'Web Development',
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    fullImage: {
      type: String,
      required: true,
      trim: true,
    },
    heroImage: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
    imgTitle: {
      type: String,
      trim: true,
      default: '',
    },
    featured: {
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

PortfolioSchema.index({ order: 1, createdAt: -1 });
PortfolioSchema.index({ category: 1 });

export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);
