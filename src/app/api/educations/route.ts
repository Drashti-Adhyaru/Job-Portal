import {connect} from "@/dbConfig/dbConfig";
import Request from "@/models/requestModel";
import Resume from "@/models/resumeModel";
import Education from "@/models/educationModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

   const searchParams = request.nextUrl.searchParams;
   const Id = searchParams.get('id');
    try {
        const requests = await Education.find({userId:Id});
       
        return NextResponse.json({
            message: "Educations found",
            data: requests
        },  {status:200})

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}
// qualification: {
// collegeName: {
// address: {
// startDate: {
// endDate: {

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json(); // Parse the request body
        const { qualification, collegeName, address, startDate, endDate, userId } = reqBody;

        // Create a new education instance
        const newEducation = new Education({
            qualification,
            collegeName,
            address,
            startDate,
            endDate,
            userId
        });

        // Save the new education record in the database
        const savedEducation = await newEducation.save();

        // Return the newly created education record
        return NextResponse.json({
            message: "New education record created successfully",
            data: savedEducation
        }, { status: 201 }); // HTTP status code 201 for Created

    } catch (error: any) {
        console.error('Failed to create education record:', error);
        return NextResponse.json({
            error: "An error occurred while creating the education record",
            details: error.message
        }, { status: 500 }); // Internal Server Error for unexpected issues
    }
}

export async function PUT(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id');// Assuming the id is passed as a route parameter
        const reqBody = await request.json();
        
        // Find the education record by id
        const education = await Education.findById(id);

        if (!education) {
            return NextResponse.json({ error: "Education record not found" }, { status: 404 });
        }

        // Update the education record with the new data
        education.set(reqBody);
        const updatedEducation = await education.save();

        return NextResponse.json({
            message: "Education record updated successfully",
            data: updatedEducation
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}



export async function DELETE(request: NextRequest) {
    try {

        const url = new URL(request.url);
        const jobId = url.searchParams.get('id');


        const deletedJob = await Education.findOneAndDelete({ _id: jobId });

        if (!deletedJob) {
            throw new Error("Job not found or you are not authorized to delete it.");
        }

        return NextResponse.json({
            message: "Job deleted successfully",
            success: true,
            deletedJob
        });
    
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

