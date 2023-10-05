import mongoose, { Schema } from "mongoose";

const passwordResetSchema = Schema({
  userId: { type: String, unique: true },
  email: { type: String, unique: true },
  token: String,
  createdAt: Date,
  expiresAt: Date,
});

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);

export default PasswordReset;
