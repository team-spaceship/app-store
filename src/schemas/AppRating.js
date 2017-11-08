import mongoose from 'mongoose';

const AppRating = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  app: { type: mongoose.Schema.Types.ObjectId, ref: 'App', required: true },
  title: String,
  rating: Number,
  comment: String,
}, {
  timestamps: true,
});

mongoose.model('AppRating', AppRating);

export default mongoose.model('AppRating', AppRating);
