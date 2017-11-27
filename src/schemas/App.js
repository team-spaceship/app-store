import mongoose from 'mongoose';

const AppSchema = new mongoose.Schema({
  name: String,
  description: String,
  app_icon: String,
  app_banner: String,
  min_os_version: String,
  versions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Version', required: true }],
  app_downloads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InstalledApp', required: false }], 
  app_ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AppRating', required: false }],
  app_category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AppCategory', required: false }],
}, {
  timestamps: true,
});

mongoose.model('App', AppSchema);

export default mongoose.model('App', AppSchema);
