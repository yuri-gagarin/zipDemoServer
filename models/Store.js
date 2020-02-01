import mongoose from "mongoose";
import { storeCategories } from "./helpers/modelConstants";
// constants //
const { GENERAL, SPORTS, ENTERTAINMENT, TRANSPORTATION } = storeCategories;
// custom validators //
const validateAdmin = (adminArray) => {
  return adminArray.length >= 1;
};

const Schema = mongoose.Schema;
const storeSchema = new Schema({
  administrators: {
    type: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
    }],
    validate: [validateAdmin, "must have at least one store administrator"]
  },
  storeName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: [GENERAL, SPORTS, ENTERTAINMENT, TRANSPORTATION],
    default: GENERAL,
    required: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
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

export default mongoose.model("Store", storeSchema);