import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    pricePerAdult: {
      type: Number,
      required: true,
    },
    description: [
      {
        type: Object,
        required: true,
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    priceRange: {
      type: String,
      enum: ["less5000", "5000-10000", "10000-15000", "morethan15000"],
    },
    departureDates: [
      {
        type: Date,
      },
    ],
    image: [
      {
        type: String, // We can Store just the url to the image.
      },
    ],
    type: {
      type: String,
      required: true,
      enum: ["HistoricalPlace", "City", "Group", "Park", "Adventure"], // different types of packages.
    },
    to_do_type: {
      type: String,
      required: true,
    },
    map: {
      type: String,
    },
    // agent: {
    //     // let's just store the reference to the agent
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Agent",
    //     required: true,
    // },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Package", packageSchema);
