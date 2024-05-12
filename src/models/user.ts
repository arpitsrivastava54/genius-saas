import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true },
 name: { type: String, required: true },
 jwtToken: { type: String, required: false },
 freeUseCount:{type:Number,default:0},
 isPro: { type: Boolean, default: false },
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
