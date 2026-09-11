import mongoose from 'mongoose';

const TeamSettingsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: 'team_page_settings',
    },
    heroGroupImage: {
      type: String,
      default: '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
      trim: true,
    },
    middleBannerImage: {
      type: String,
      default: '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp',
      trim: true,
    },
    heroBadgeText: {
      type: String,
      default: 'Our Collective',
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.TeamSettings || mongoose.model('TeamSettings', TeamSettingsSchema);
