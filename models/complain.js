const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    room: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 3,
    },
    category: {
      type: String,
      required: true,
    },
    pno: {
      type: Number,
      maxlength: 6,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    building: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complain", complainSchema);
