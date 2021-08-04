const mongoose = require("mongoose");
const { Schema, SchemaTypes } = mongoose;

const posts = new Schema(
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

//MODELS
exports.posts = mongoose.model("posts", posts);
