import mongoose from 'mongoose';

const VersionSchema = new mongoose.Schema({
  version: String,
  file_name: String,
  app: { type: mongoose.Schema.Types.ObjectId, ref: 'App', required: true },
  publish_reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PublishReview', required: false }],
}, {
  timestamps: true,
});

mongoose.model('Version', VersionSchema);

export default mongoose.model('Version', VersionSchema);
