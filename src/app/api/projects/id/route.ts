import { connect } from "@/dbConfig/dbConfig";
import Customer from "@/models/customerModel";
import Project from "@/models/projectModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    try {
        const project = await Project.findOne({ _id: id });
        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        const customer = await Customer.findOne({ _id: project.userId });
        if (!customer) {
            return NextResponse.json({ error: "Customer not found for this project" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Project found",
            data: {
                project,
                urlName: customer.urlName
            }
        }, { status: 200 });

    } catch (error: any) {
        console.error("Error fetching data:", error.message);
        return NextResponse.json({ error: "An error occurred while fetching data" }, { status: 500 });
    }
}
