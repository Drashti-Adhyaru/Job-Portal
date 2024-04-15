import {connect} from "@/dbConfig/dbConfig";
import Request from "@/models/requestModel";
import Resume from "@/models/resumeModel";
import Education from "@/models/educationModel";

import { NextRequest, NextResponse } from "next/server";
import Customer from "@/models/customerModel";

connect()

export async function GET(request:NextRequest){

   const searchParams = request.nextUrl.searchParams;
   const Id = searchParams.get('url');
    try {

        const customer = await Customer.findOne({ urlName: Id });

        
        const id2 = customer._id;
        const requests = await Education.find({userId:id2});
       
        return NextResponse.json({
            message: "Educations found",
            data: requests
        },  {status:200})

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
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