import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  tag: String,
}, {
  timestamps: true,
});

mongoose.model('Category', CategorySchema);

export default mongoose.model('Category', CategorySchema);
