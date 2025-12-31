import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User", // its the one who is subscribing to the channel
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User", // its the one owner of the channel
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
