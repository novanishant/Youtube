import { timeLog, timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to who "subscriber" is subscribing
      ref: "User",
    },
  },
  { timeStamp: true }
);
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
