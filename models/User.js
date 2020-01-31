import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
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
    required: true,
    default: false
  },
  warned: {
    type: Boolean,
    required: true,
    default: false
  },
  firstSignIn: {
    type: Date,
    required: false
  },
  lastSignIn: {
    type: Date,
    required: false
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

export default mongoose.model("User", userSchema);