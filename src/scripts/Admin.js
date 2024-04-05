const { connectDB } = require("@/connection/db");
const { Admin } = require("@/models/Admin.model");

const admin = async () => {
    try {
        connectDB();

        const found = await Admin.findOne({});
        if (found) return;

        await Admin.create({
            name:'Admin',
            email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
            password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        })

    } catch (error) {
        console.log(error);
    }
}

admin();