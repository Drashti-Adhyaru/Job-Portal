import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect()
const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json(); // Parse the JSON body from the request
        const { email } = reqBody;

        console.log(email);
        // Create a new Experience object
        // const user = User.findOne({"email":email});
        
        // Respond with the newly created experience
       
        return NextResponse.json({
            message: "User Found",
            data: email
        }, { headers,status: 200 }); // Use HTTP status code 201 for Created
    } catch (error: any) {
        console.error('Failed to create experience record:', error);
        return NextResponse.json({
            error: "An error occurred while creating the experience record",
            details: error.message
        }, { headers ,status: 500 }); // Internal Server Error for unexpected issues
    }
}