import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Resume from "@/models/resumeModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){
    try {
        const userId = await getDataFromToken(request);
        const resumes = await Resume.find({userId:userId});
        return NextResponse.json({
            message: "Resume found",
            data: resumes
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}


export async function POST(request: NextRequest){
    // Defines an asynchronous POST request handler.
        try {
            const userId = await getDataFromToken(request);
            const role = await getRoleFromToken(request);
         

            const reqBody = await request.json()
            const {
                firstName,
                lastName,
                age,
                experience,
                aboutYou, 
                highestQualification,
                availibility,
                address,
                status} = reqBody
    
            const newResume = new Resume({
                userId,
                firstName,
                lastName,
                age,
                experience,
                aboutYou, 
                highestQualification,
                availibility,
                address,
                status
            })
    
            console.log(newResume);
    // Saves the new user to the database.
            const savedResume = await newResume.save()
    
            
            return NextResponse.json({
                message: "Resume created successfully",
                success: true,
                savedResume
            })
    
    
        } catch (error: any) {
            return NextResponse.json({error: error.message}, {status: 500})
    
        }
}


