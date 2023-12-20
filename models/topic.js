// import { Schema, model, models } from 'mongoose';

// const topicSchema = new Schema(
//   {
//     title: String,
//     description: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const Topic = models.Topic || model('Topic', topicSchema);

// export default Topic;

import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);
export default Topic;
