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
      reuired: true,
    },
    videoCard: {
      type: String,
      reuired: true,
    },
    ram: {
      type: Number,
      reuired: true,
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