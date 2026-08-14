import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: 'N/A',
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: 'N/A',
    },
    phone: {
      type: String,
      trim: true,
      default: 'N/A',
    },
    service: {
      type: String,
      trim: true,
      default: 'General Inquiry',
    },
    message: {
      type: String,
      trim: true,
      default: '',
    },
    source: {
      type: String,
      enum: ['contact-page', 'website-audit', 'footer-popup', 'homepage-promo-popup', 'chatbot', 'brochure', 'other'],
      default: 'other',
    },
    url: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Closed', 'Spam', 'new', 'contacted', 'closed', 'archived'],
      default: 'New',
    },
  },
  { timestamps: true }
);

LeadSchema.index({ status: 1, createdAt: -1 });
LeadSchema.index({ source: 1, createdAt: -1 });
LeadSchema.index({ email: 1 });

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
