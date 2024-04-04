
import { connectDB } from "@/connection/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    await connectDB();
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })


}