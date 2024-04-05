const { connectDB } = require("@/connection/db");
const { Admin } = require("@/models/Admin.model");
import bcrypt from 'bcryptjs'

export const register = async () => {
    try {
        connectDB();
        const found = await Admin.findOne({});
        if (found) return;

        await Admin.create({
            name: 'Admin',
            email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
            password: bcrypt.hashSync(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
        })

    } catch (error) {
        console.log(error);
    }
}
