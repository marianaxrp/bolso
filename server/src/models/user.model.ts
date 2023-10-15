import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  savedArticles: string[];
  favoriteArticles: string[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  favoriteArticles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
});

export default mongoose.model<IUser>('User', userSchema);
