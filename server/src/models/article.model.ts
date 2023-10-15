import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
  id: string;
  title: string;
  content: string;
  source: string; // e.g. 'The Guardian', 'NYT'
  externalLink: string; // The direct link to the original article
  datePublished: Date;
  tags: string[];
  usersSaved: string[]; // Array of User IDs who saved this article
  usersTagged: [
    {
      userId: string;
      tags: string[];
    },
  ];
}

const articleSchema = new Schema<IArticle>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  source: { type: String, required: true },
  externalLink: { type: String, required: true },
  datePublished: { type: Date, default: Date.now },
  tags: [{ type: String }],
  usersSaved: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  usersTagged: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'User' },
      tags: [{ type: String }],
    },
  ],
});

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

export default Article;
