import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;
const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  conversation: {
    type: Schema.Types.ObjectId,
    ref: "Conversation"
  },
  content: {
    type: String,
    required: true
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