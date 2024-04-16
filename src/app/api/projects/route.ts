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


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();  // Parse the JSON body from the request

        // Destructure the needed properties from the request body
        const { projectTitle, description, githubLink, skills, learningOutcomes, projectPic, userId } = reqBody;

        // Create a new project instance using the model
        const newProject = new Project({
            projectTitle,
            description,
            githubLink,
            skills,
            learningOutcomes,
            projectPic,
            userId
        });

        // Save the new project to the database
        const savedProject = await newProject.save();

        // Respond with the newly created project
        return NextResponse.json({
            message: "New project created successfully",
            data: savedProject
        }, { status: 201 });  // Use HTTP status code 201 for Created
    } catch (error) {
        console.error('Failed to create project:', error);
        return NextResponse.json({
            error: "An error occurred while creating the project",
            details: error
        }, { status: 500 });  // Internal Server Error for unexpected issues
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
