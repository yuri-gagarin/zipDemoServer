import mongoose from "mongoose";

// custom validators //
const minRecipients = (recipientsArr) => {
  return recipientsArr.length >= 1;
};
// Schema and definitions //
const Schema = mongoose.Schema;
const conversationSchema = new Schema({
  startedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    index: true,
    required: true
  },
  recipients: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    validate: [minRecipients, "needs to have at least one recipient"]
  },
  participants: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message"
      // required: true // (not sure yet - come back to this)
    }
  ],
  isGroupConversation: {
    type: Boolean,
    required: true,
    default: false
  },
  numOfMessages: {
    type: Number,
    required: true,
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