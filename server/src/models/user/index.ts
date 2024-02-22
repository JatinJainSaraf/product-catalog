import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, //required: true
    streetAddress: { type: String },
    role: {
      type: [String],
      required: true,
      enum: ["admin", "superAdmin", "manager"],
      default: ["admin"],
    },
    postalCode: { type: Number },
    city: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    isAdmin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
