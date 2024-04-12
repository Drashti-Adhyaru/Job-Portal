import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Resume from "@/models/resumeModel";

connect();

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id');
        const resumes = await Resume.find({ _id: id });
        return NextResponse.json({
            message: "Resume found",
            data: resumes
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const role = await getRoleFromToken(request);
        
            const reqBody = await request.json();
            const {
                user,
                jobTitle,
                personalDetails,
                education,
                experience,
                project,
                urlName,
                theme
            } = reqBody;

            const {
                firstName,
                lastName,
                email,
                password
            } = user;

            const newResume = new Resume({
                userId,
                firstName,
                lastName,
                email,
                password,
                jobTitle,
                personalDetails,
                education,
                experience,
                project,
                urlName,
                theme
            });

            const savedResume = await newResume.save();

            return NextResponse.json({
                message: "Resume created successfully",
                success: true,
                savedResume
            });
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
