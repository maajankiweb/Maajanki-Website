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
      enum: ['new', 'contacted', 'closed', 'archived'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
