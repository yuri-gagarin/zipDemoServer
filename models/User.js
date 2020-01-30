import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  confirmedAt: {
    type: Date,
    required: false
  },
  banned: {
    type: Boolean,
    required: true
  },
  warned: {
    type: Boolean,
    required: true
  },
  firstSignIn: {
    type: Date,
    required: false
  },
  lastSignIn: {
    type: Date,
    requited: false
  },
  createdAt: {
    type: Date,
    required: false
  },
  editedAt: {
    type: Date,
    required: true
  }
});

export default mongoose.model("User", userSchema);