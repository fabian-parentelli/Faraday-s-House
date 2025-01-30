import mongoose from "mongoose";

const icons_infoCollection = 'icons_info';

const icons_infoSchema = new mongoose.Schema({
    message: { type: String, required: true },
    props: { type: String, required: true },
    github: { type: String, required: true },
    version: { type: String, required: true },
    imports: { type: String, required: true },
    active: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
});

export const icons_infoModel = mongoose.model(icons_infoCollection, icons_infoSchema);