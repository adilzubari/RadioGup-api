import mongoose from "mongoose";

const wbs_schema = mongoose.Schema({
  ProjectName: String,
});

export default mongoose.model("wbs", wbs_schema);
