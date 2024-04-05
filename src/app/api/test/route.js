import { NextResponse } from "next/server"

export const GET = (req) => {
    return NextResponse.json({
        succcess: true,
        message: "seems to be fine"
    })
}