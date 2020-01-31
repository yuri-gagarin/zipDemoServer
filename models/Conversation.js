import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  startedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    index: true
  },
  targetUsers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      index: true
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
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