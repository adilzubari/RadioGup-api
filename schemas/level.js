import mongoose from "mongoose";

const level_schema = mongoose.Schema({
  LevelName: String,
  Level: String,
  Type: String,
  Designation: String,
  OffShorePerHr: String,
  OnSitePerHr: String,
});

export default mongoose.model("level", level_schema);
