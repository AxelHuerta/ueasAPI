import { Schema, model } from "mongoose";

const ueaSchema = new Schema({
  key: {
    type: String,
    required: true,
    min: 3,
  },
  name: {
    type: String,
    required: true,
    min: 3,
  },
  credits: {
    type: String,
    required: true,
    min: 3,
  },
  requirements: {
    type: [String],
    required: true,
    min: 3,
  },
  seriation: {
    type: [String],
    required: true,
    min: 3,
  },
  required: {
    type: Boolean,
    required: true,
  },
});

export default model("Uea", ueaSchema);
