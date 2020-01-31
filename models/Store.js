import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  administrators: [{
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }],
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["general", "sports", "entertainment", "transoprtation"],
    default: "general",
    required: true
  },
  location: {
    city: {
      type: String
    },
    country: {
      type: String
    },
    coordinates: [{
      type: Number,
      required: true
    }]
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  editedAt: {
    type: Date,
    required: false
  }
});

export default mongoose.model("Store", storeSchema);