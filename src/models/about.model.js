import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    achievements: [{
        type: String,
    }],
    skills: [{ type: String }],
    socials: {
        linkedin: { type: String, required: true },
        github: { type: String, required: true },
        twitter: { type: String, required: true },
    },
    resume: { type: String, required: true }
}, { timestamps: true });

mongoose.models = {};

export const About = mongoose.models('About', aboutSchema);