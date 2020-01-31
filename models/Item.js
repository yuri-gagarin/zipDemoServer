import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    index: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ["sports", "reacreation", "transportation", "childrens", "clothing", "general"],
    default: "general"
  },
  description: {
    type: String,
    required: true
  },
  pictures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ItemImage"
    }
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  editedAt: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Item", itemSchema);