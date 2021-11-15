import mongoose from "mongoose";

const task_schema = mongoose.Schema({
  TaskName: String,
});

export default mongoose.model("task", task_schema);
