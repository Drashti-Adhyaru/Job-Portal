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
        })

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}