import mongoose from "mongoose";

const progress_schema = mongoose.Schema({
  Workflow_id: String,
  Progress: Object,
});

export default mongoose.model("progress", progress_schema);
