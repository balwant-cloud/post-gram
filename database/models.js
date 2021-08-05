const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const post = new Schema(
  {
    description: String,
    avg_rating: Number,
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const postRating = new Schema(
  {
    post_id: Types.ObjectId,
    rating: Number,
    user_name: String,
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

//MODELS
exports.post = mongoose.model("posts", post);
exports.postRating = mongoose.model("posts.ratings", postRating);
