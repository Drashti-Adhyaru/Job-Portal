import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import Customer from "@/models/customerModel";
connect();

export async function GET(request: NextRequest) {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        };
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id'); // Assuming the id is passed as a route parameter
        

              return NextResponse.json({
            message: "User Found",
            data: id
        }, { headers, status: 200 });
    } catch (error: any) {
        console.error('Failed to process request:', error);
        return NextResponse.json({
            error: "An error occurred while processing the request",
            details: error.message
        }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        };
       // Assuming the id is passed as a route parameter

        const reqBody = await request.json();

        const user = await User.findOne({email:reqBody.email})

        let isUrl = false;
        let urlname = "";

        // console.log(user)
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 300})
        }
        
        const validPassword = await bcryptjs.compare
      
        (reqBody.password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invlid password"}, {status: 300})
        }

       
        const customer = await Customer.findOne({_id:user._id});
        if(customer){
            console.log(customer.urlName);
            isUrl = true;
            urlname = customer.urlName;
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            isUrl: isUrl,
            urlName: urlname
        }

        // Create a token with expiration of 1 day
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})


        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            data: tokenData,
           
        },{status:200});
        
            response.cookies.set("token", token, {
            httpOnly: true,
        });
      
        response.cookies.set("userId",  user._id, {
            httpOnly: true,
        });
      
        if(isUrl==true){
            response.cookies.set("urlName",  customer.urlName, {
                httpOnly: true,
            });
        }

        return response;



        // return NextResponse.json({
        //     message: "User Found",
        //     data: user
        // }, { headers, status: 200 });

    } catch (error: any) {
        console.error('Failed to process request:', error);
        return NextResponse.json({
            error: "An error occurred while processing the request",
            details: error.message
        }, { status: 500 });
    }
}
