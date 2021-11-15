import mongoose from "mongoose";

const workflow_schema = mongoose.Schema({
  Employee_id: String,
  Project_id: String,
  TaskType: String,
  Date_A: String,
  Date_B: String,
});

export default mongoose.model("workflow", workflow_schema);
