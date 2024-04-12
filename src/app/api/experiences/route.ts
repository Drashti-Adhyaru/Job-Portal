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