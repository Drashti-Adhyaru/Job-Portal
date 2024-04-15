import {connect} from "@/dbConfig/dbConfig";
import Customer from "@/models/customerModel";
import Project from "@/models/projectModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

    const searchParams = request.nextUrl.searchParams;
    const Id = searchParams.get('id');
    try {

       
        const requests = await Project.findOne({_id:Id});
       
        return NextResponse.json({
            message: "Project found",
            data: requests
        },{status: 200}
    )

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}