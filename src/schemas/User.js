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
}, {
  timestamps: true,
});

mongoose.model('User', UserSchema);

export default mongoose.model('User', UserSchema);
