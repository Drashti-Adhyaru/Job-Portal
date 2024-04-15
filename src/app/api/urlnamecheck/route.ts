import { connect } from "@/dbConfig/dbConfig";
import Customer from "@/models/customerModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('url');
        
        // Find the customer by urlName
        const customer = await Customer.findOne({ urlName: id });

        if (!customer) {
            // If customer not found, return false
            return NextResponse.json({ exists: false });
        }

        // If customer found, return true
        return NextResponse.json({ exists: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
