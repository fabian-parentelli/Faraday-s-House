import mongoose from "mongoose";

const iconsCollection = 'icons';

const iconsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    active: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
});

export const iconsModel = mongoose.model(iconsCollection, iconsSchema);