import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        default: null
    },
    points: [
        {
            type: String,
        }
    ]
}, { timestamps: true });

mongoose.models = {};

export const Experience = mongoose.models('Experience', experienceSchema);