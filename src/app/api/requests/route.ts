import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Request from "@/models/requestModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

    const userId = await getDataFromToken(request);

    try {
        const requests = await Request.find({userId:userId});
        return NextResponse.json({
            message: "Requests found",
            data: requests
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}

// {
//     "_id": {
//       "$oid": "65d0e9b7048e1188d1eed8bd"
//     },
//     "userId": "65ce13a0579c59500146c551",
//     "jobId": "65d0e5b1048e1188d1eed8b3",
//     "resumeId": "65d0e7c8048e1188d1eed8b6",
//     "status": "applied",
//     "employerStatus": "Viewed",
//     "dateApplied": "12/02/2024"
//   }

export async function POST(request: NextRequest){
    // Defines an asynchronous POST request handler.
        try {
            const userId = await getDataFromToken(request);
            const role = await getRoleFromToken(request);
         
            
                const reqBody = await request.json()
                const {jobId,
                    resumeId,
                    employerStatus,
                    dateApplied, } = reqBody
        
                const newRequest = new Request({
                    userId,
                    jobId,
                    resumeId,
                    employerStatus,
                    dateApplied, 
                    
                })
        
                console.log(newRequest);
        // Saves the new user to the database.
                const savedRequest = await newRequest.save()
        
                
                return NextResponse.json({
                    message: "Request created successfully",
                    success: true,
                    savedRequest
                })
            



           
    
    
        } catch (error: any) {
            return NextResponse.json({error: error.message}, {status: 500})
    
        }
    }



    export async function DELETE(request: NextRequest) {
        try {
            const userId = await getDataFromToken(request);
            const role = await getRoleFromToken(request);
            const url = new URL(request.url);
            const requestId = url.searchParams.get('requestId');
    

            

            const deletedRequest = await Request.findOneAndDelete({ _id: requestId, userId });
    
            if (!deletedRequest) {
                throw new Error("Request not found or you are not authorized to delete it.");
            }
    
            return NextResponse.json({
                message: "Job deleted successfully",
                success: true,
                deletedRequest
            });
        
        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }


    export async function PUT(request: NextRequest) {
        try {
            const userId = await getDataFromToken(request);
            const role = await getRoleFromToken(request);
    
            const url = new URL(request.url);
            const requestId = url.searchParams.get('requestId');
        
            const reqBody = await request.json();
            const { resumeId,
                employerStatus,
                dateApplied } = reqBody;
    
            const updatedRequest = await Request.findOneAndUpdate(
                { _id: requestId, userId },
                { 
                    resumeId,
                    employerStatus,
                    dateApplied,  },
                { new: true } // Return the updated document
            );
    
            if (!updatedRequest) {
                throw new Error("Request not found or you are not authorized to update it.");
            }
    
            return NextResponse.json({
                message: "Request updated successfully",
                success: true,
                updatedRequest
            });
        } catch (error: any) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }