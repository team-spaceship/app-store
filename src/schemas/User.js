import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  first_name: String,
  middle_name: String,
  last_name: String,
  email: { type: String, unique: true, required: true },
  google_id: String,
  last_login: String,
  role: Number,
  active: Number,
  // Foreign Keys: One to Many
  userIps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserIp', required: false }],
  publishReviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PublishReview', required: false }],
  appRatings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AppRating', required: false }],
  installedApps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InstalledApp', required: false }],
}, {
  timestamps: true,
});

mongoose.model('User', UserSchema);

export default mongoose.model('User', UserSchema);
