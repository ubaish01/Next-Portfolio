import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    link: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {};
export const Blog = mongoose.model('Blog', schema);