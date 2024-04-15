import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { getRoleFromToken } from "@/app/helper/getRoleFromToken";
import { connect } from "@/dbConfig/dbConfig";
import Customer from "@/models/customerModel";
import Education from "@/models/educationModel";
import Experience from "@/models/experienceModel";
import Project from "@/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request: NextRequest) {
    try {

        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('url');
        const customer = await Customer.findOne({ urlName: id });

        
        const id2 = customer._id;

        const projects = await Project.find({ userId: id2});
        const experiences = await Experience.find({ userId: id2 });
        const educations = await Education.find({ userId: id2});


        return NextResponse.json({
            message: "Customer found",
            data: {
                customer: customer,
                projects: projects,
                experiences: experiences,
                educations: educations
            }
        }, { headers: { 'Access-Control-Allow-Origin': '*' ,
        
        'Referrer-Policy': 'strict-origin-when-cross-origin'

        } });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}



export async function POST(request: NextRequest) {
    // Defines an asynchronous POST request handler.
    try {


        const reqBody = await request.json()
        const {
            _id,
            phone,
            address,
            email,
            firstName,
            lastName,
            summary,
            skills,
            githubLink,
            linkdinLink,
            urlName,
            themeColor,
            profilePicLink,
            educations,
            experiences,
            projects
        } = reqBody

        const newResume = new Customer({
            _id,
            phone,
            address,
            email,
            firstName,
            lastName,
            summary,
            skills,
            githubLink,
            linkdinLink,
            urlName,
            themeColor,
            profilePicLink
        })


        const savedResume = await newResume.save()

        const userId = savedResume._id;

        if (educations && Array.isArray(educations)) {
            await Promise.all(educations.map(async (edu) => {
                await Education.create({
                    ...edu,
                    userId: userId
                });
            }));
        }

        if (projects && Array.isArray(projects)) {
            await Promise.all(projects.map(async (edu) => {
                await Project.create({
                    ...edu,
                    userId: userId
                });
            }));
        }

        if (experiences && Array.isArray(experiences)) {
            await Promise.all(experiences.map(async (edu) => {
                await Experience.create({
                    ...edu,
                    userId: userId
                });
            }));
        }

        return NextResponse.json({
            message: "Customer created successfully",
            success: true,
            savedResume
        }, { headers: { 'Access-Control-Allow-Origin': '*',
        'Referrer-Policy': 'strict-origin-when-cross-origin'


         } });





    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}
