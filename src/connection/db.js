import mongoose from "mongoose";

const MONGO_URI = 'mongodb+srv://test:bUberqtuzA6OhdkH@cluster0.z3scxog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

export const connectDB = async () => {
    const { connection } = await mongoose.connect(MONGO_URI, {
        dbName: "portfolio"
    });

    console.log(`Database connection: ${connection.host}`)

}

