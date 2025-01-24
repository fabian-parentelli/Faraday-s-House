import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const messagesCollection = 'messages';

const messagesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    message: { type: String },
    active: { type: Boolean, default: true },
    created: { type: Date, default: Date.now },
});

messagesSchema.plugin(mongoosePaginate);

export const messagesModel = mongoose.model(messagesCollection, messagesSchema);