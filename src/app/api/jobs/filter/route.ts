import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import {connect} from "@/dbConfig/dbConfig";
import Job from "@/models/jobModel";
import Request from "@/models/requestModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongoose";

connect()

export async function GET(request:NextRequest){
    try {

        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);
        const role = await getRoleFromToken(request);
        const url = new URL(request.url);
        const type = url.searchParams.get('type');
        const pay = url.searchParams.get('pay');
        const category = url.searchParams.get('category');
        const location = url.searchParams.get('location');

        const Jobswithusers = [];
        console.log(role);
        console.log(userId);
    
        const filter: Record<string, any> = {};

        // Add filter conditions based on provided parameters
        if (type) filter.type = type;
        if (pay) filter.pay = pay;
        if (category) filter.category = category;
        if (location) filter.location = location;



        const jobs = await Job.find(filter);
        console.log(jobs);

        for (const job of jobs) {
            const user = await User.findOne({ _id: (job.userId) }); // Assuming jobId is the reference to the job
            if (user) {
                Jobswithusers.push({ job, user });
            }
        }
        return NextResponse.json({
            message: "Jobs found with associated with user info",
            data: Jobswithusers
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
        
    }
}