import mongoose from 'mongoose';

const DeleteLogSchema = new mongoose.Schema({
  title: String,
  user_name: String,
  date: Date,
}, {
  timestamps: true,
});

mongoose.model('DeleteLog', DeleteLogSchema);

export default mongoose.model('DeleteLog', DeleteLogSchema);
