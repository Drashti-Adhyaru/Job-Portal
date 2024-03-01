import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import { connect } from "@/dbConfig/dbConfig";
import Job from "@/models/jobModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongoose";

connect();

export async function GET(request:NextRequest){
    try {
        
        const url = new URL(request.url);
        const searchQuery = url.searchParams.get('search');
        console.log(searchQuery);
        const filter: Record<string, any> = {};


        if (searchQuery) {
            filter.title = { $regex: searchQuery, $options: "i" }; // Case-insensitive search
        }


        // const jobs = await Job.find();
        const jobs = await Job.find(filter);

        return NextResponse.json({
            message: "Jobs found",
            data: jobs
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}


