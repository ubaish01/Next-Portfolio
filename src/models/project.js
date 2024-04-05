import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    startDate: {
        type: Date,
        default: null
    },
    tech_stack: [{
        type: String,
    }],
    github: {
        type: String,
        default: null
    },
    link: {
        type: String,
        default: null
    },
    images: [{
        type: String
    }],
    description: [{ type: String }]
}, { timestamps: true });

mongoose.models = {};

export const Project = mongoose.model("Project", newSchema)