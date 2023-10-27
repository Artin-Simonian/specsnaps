const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
  },
  {
    timestamps: true,
  }
);

const pcPostSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    videoCard: {
      type: String,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
      min: 1,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PC", pcPostSchema);
