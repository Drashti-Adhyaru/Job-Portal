import {connect} from "@/dbConfig/dbConfig";
import Project from "@/models/projectModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

   const searchParams = request.nextUrl.searchParams;
   const Id = searchParams.get('id');
    try {
        const requests = await Project.find({userId:Id});
       
        return NextResponse.json({
            message: "Projects found",
            data: requests
        },  {status:200})

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}

export async function PUT(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id'); // Assuming the id is passed as a route parameter
        const reqBody = await request.json();
        
        // Find the project record by id
        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json({ error: "Project record not found" }, { status: 404 });
        }

        // Update the project record with the new data
        project.set(reqBody);
        const updatedProject = await project.save();

        return NextResponse.json({
            message: "Project record updated successfully",
            data: updatedProject
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
