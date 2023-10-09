import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const ArticleModel = mongoose.model<IArticle>('Article', articleSchema);
