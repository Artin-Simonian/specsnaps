const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      ref: "User"
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('PC', pcPostSchema);