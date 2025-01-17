import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    active: { type: Boolean, default: true },
    role: { type: String, default: 'user' },
    passId: { type: String },
    created: { type: Date, default: Date.now },
});

userSchema.plugin(mongoosePaginate);

export const userModel = mongoose.model(userCollection, userSchema);