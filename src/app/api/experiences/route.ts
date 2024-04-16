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
        },  {status:200})

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json(); // Parse the JSON body from the request
        const { position, companyName, address, startDate, endDate, userId } = reqBody;

        // Create a new Experience object
        const newExperience = new Experience({
            position,
            companyName,
            address,
            startDate: new Date(startDate), // Ensure the date is correctly parsed
            endDate: new Date(endDate), // Ensure the date is correctly parsed
            userId
        });

        // Save the new experience to the database
        const savedExperience = await newExperience.save();

        // Respond with the newly created experience
        return NextResponse.json({
            message: "New experience record created successfully",
            data: savedExperience
        }, { status: 201 }); // Use HTTP status code 201 for Created
    } catch (error: any) {
        console.error('Failed to create experience record:', error);
        return NextResponse.json({
            error: "An error occurred while creating the experience record",
            details: error.message
        }, { status: 500 }); // Internal Server Error for unexpected issues
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
