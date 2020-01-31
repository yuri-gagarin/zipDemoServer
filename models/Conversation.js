import mongoose from "mongoose";

const Schema = mongoose.Schema;
const conversationSchema = new Schema({
  startedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    index: true
  },
  targetUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message"
    }
  ],
  numOfMessages: {
    type: Number,
    required: false,
    default: 0
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  editedAt: {
    type: Date,
    required: false
  },
  lastMessageSentAt: {
    type: Date,
    required: false
  }
});

export default mongoose.model("Conversation", conversationSchema);