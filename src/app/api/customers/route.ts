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
        const id = searchParams.get('id');
        const customer = await Customer.findOne({ _id: id });

        const projects = await Project.find({ userId: id });
        const experiences = await Experience.find({ userId: id });
        const educations = await Education.find({ userId: id });


        return NextResponse.json({
            message: "Customer found",
            data: {
                customer: customer,
                projects: projects,
                experiences: experiences,
                educations: educations
            }
        }, { headers: { 'Access-Control-Allow-Origin': '@Crossorigin("*")' ,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',


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
        },{status:200}
       );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}




export async function PUT(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id'); // Get customer ID from URL query parameter

        if (!id) {
            return NextResponse.json({ error: "Customer ID is required" }, { status: 400 });
        }

        const reqBody = await request.json(); // Get data from request body

        const customer = await Customer.findOne({_id:id});
        if (!customer) {
            return NextResponse.json({ error: "Customer not found" }, { status: 404 });
        }

        // Update customer fields with new data from reqBody
        customer.phone = reqBody.phone || customer.phone;
        customer.address = reqBody.address || customer.address;
        customer.email = reqBody.email || customer.email;
        customer.firstName = reqBody.firstName || customer.firstName;
        customer.lastName = reqBody.lastName || customer.lastName;
        customer.summary = reqBody.summary || customer.summary;
        customer.skills = reqBody.skills || customer.skills;
        customer.githubLink = reqBody.githubLink || customer.githubLink;
        customer.linkdinLink = reqBody.linkdinLink || customer.linkdinLink;
        customer.profilePicLink = reqBody.profilePicLink || customer.profilePicLink;

        const updatedCustomer = await customer.save(); // Save the updated customer

        return NextResponse.json({
            message: "Customer updated successfully",
            data: updatedCustomer
        }, { status: 200 });
    } catch (error) {
        console.error("Error updating customer:",error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}