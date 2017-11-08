import mongoose from 'mongoose';

const PublishReview = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  app: { type: mongoose.Schema.Types.ObjectId, ref: 'App', required: true },
  status: String,
  comment: String,
  version: Number,
}, {
  timestamps: true,
});

mongoose.model('PublishReview', PublishReview);

export default mongoose.model('PublishReview', PublishReview);
