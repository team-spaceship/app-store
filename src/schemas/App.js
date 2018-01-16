import mongoose from 'mongoose';
import Version from './Version';

const AppSchema = new mongoose.Schema({
  name: String,
  featured: Boolean,
  versions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Version', required: true }],
  app_category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AppCategory', required: false }],
}, {
  timestamps: true,
});

/* eslint-disable */
AppSchema.pre('findOneAndRemove', function (next) {  
  Version.remove({ app: this._conditions._id }).exec();
  next();
});
/* eslint-enable */


mongoose.model('App', AppSchema);

export default mongoose.model('App', AppSchema);
