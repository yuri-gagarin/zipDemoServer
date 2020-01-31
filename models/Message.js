import mongoose from "mongoose";

const Schema = mongoose.Schema;
const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  conversation: {
    type: Schema.Types.ObjectId,
    ref: "Conversation",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  delivered: {
    type: Boolean,
    required: true,
    default: false
  },
  read: {
    type: Boolean,
    required: true,
    default: false
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

export default mongoose.model("Message", messageSchema);