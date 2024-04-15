import {connect} from "@/dbConfig/dbConfig";
import Experience from "@/models/experienceModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

   const searchParams = request.nextUrl.searchParams;
   const Id = searchParams.get('id');
    try {
        const requests = await Experience.find({userId:Id});
       
        return NextResponse.json({
            message: "Experiences found",
            data: requests
        })

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}

export async function PUT(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id'); // Assuming the id is passed as a route parameter
        const reqBody = await request.json();
        
        // Find the experience record by id
        const experience = await Experience.findById(id);

        if (!experience) {
            return NextResponse.json({ error: "Experience record not found" }, { status: 404 });
        }

        // Update the experience record with the new data
        experience.set(reqBody);
        const updatedExperience = await experience.save();

        return NextResponse.json({
            message: "Experience record updated successfully",
            data: updatedExperience
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
