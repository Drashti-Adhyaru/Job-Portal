import {connect} from "@/dbConfig/dbConfig";

import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json(); // Parse the request body
        const { email,password,firstName, lastName } = reqBody;

        // Create a new education instance
        const newUser = new User({
            email,
            password,
            firstName,
            lastName,
        });

        // Save the new education record in the database
        const savedEducation = await newUser.save();

        // Return the newly created education record
        return NextResponse.json({
            message: "New User record created successfully",
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
