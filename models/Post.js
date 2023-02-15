const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    SNo: {type: String},
    OwnerName: {type: String},
    RegistrationNo: {type: String },
    Registrationdate:{type:String},
    RCstatus:{type:String},
  },
  { timestamps: true }
);
let Post = mongoose.model("post", postSchema);
module.exports = Post;