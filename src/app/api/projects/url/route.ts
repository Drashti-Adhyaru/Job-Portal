import {connect} from "@/dbConfig/dbConfig";
import Customer from "@/models/customerModel";
import Project from "@/models/projectModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request:NextRequest){

    const searchParams = request.nextUrl.searchParams;
    const Id = searchParams.get('url');
    try {

        const customer = await Customer.findOne({ urlName: Id });

        
        const id2 = customer._id;
        const requests = await Project.find({userId:id2});
       
        return NextResponse.json({
            message: "Projects found",
            data: requests
        },  {status:200})

       
        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}