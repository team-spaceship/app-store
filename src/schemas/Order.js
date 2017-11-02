import mongoose, { Schema } from 'mongoose';

var OrderSchema = new mongoose.Schema({
    "date": Date
});

mongoose.model('Order', OrderSchema);

export default mongoose.model('Order', OrderSchema);
