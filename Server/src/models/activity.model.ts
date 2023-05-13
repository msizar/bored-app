import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  activity: string;
  type: string;
  participants: number;
  price: number;
  key: string;
}

const activitySchema: Schema = new mongoose.Schema({
  activity: String,
  type: String,
  participants: Number,
  price: Number,
  key: String,
});

export default mongoose.model<IActivity>('Activity', activitySchema);
