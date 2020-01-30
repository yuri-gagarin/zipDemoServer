import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store"
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item"
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