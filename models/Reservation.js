import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    index: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    index: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Reservation", reservationSchema);