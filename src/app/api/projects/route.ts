import {connect} from "@/dbConfig/dbConfig";
import Project from "@/models/projectModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

   const searchParams = request.nextUrl.searchParams;
   const Id = searchParams.get('id');
    try {
        const requests = await Project.find({userId:Id});
       
        return NextResponse.json({
            message: "Projects found",
            data: requests
        })

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}