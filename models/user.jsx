import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
      select: false,
    },
    img:{
      type:String,
      
    },
    public_id:{
      type:String
    }
  },
  { timestamps: true }
);
const User = models?.User || mongoose.model("User", userSchema);

export default User;


