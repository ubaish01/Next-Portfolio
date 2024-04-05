import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

mongoose.models = {};

export const Admin = mongoose.model('Admin', adminSchema);