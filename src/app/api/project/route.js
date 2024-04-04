
import { Project } from "@/models/project";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json();

    const { title, brief } = body;

    const project = await Project.create({
        title,
        brief
    });

    return NextResponse.json({
        message: "project created",
        project
    })
}

export const GET = async (req) => {
    
    const projects = await Project.find();

    return NextResponse.json({
        message: "project created",
        projects
    })
}