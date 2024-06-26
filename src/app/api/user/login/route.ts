import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
require("dotenv").config();

connect()
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
       console.log(reqBody)
       console.log(process.env.TOKEN_SECRET);
        //check if user exists
        const user = await User.findOne({email})
        console.log(user)

        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 300})
        }
        
        //check if password is correct
        const validPassword = await bcryptjs.compare
      
        (password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invlid password"}, {status: 300})
        }

//create token data
// A JavaScript object (tokenData) is created to store essential user 
// information. In this case, it includes the user's unique identifier (id), 
// username, and email.

        console.log(user.role)

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }

        // Create a token with expiration of 1 day
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        // Create a JSON response indicating successful login
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            data: tokenData
        },{status:200});
        
       
        // Set the token as an HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        })
      
        response.cookies.set("userId",  user._id, {
            httpOnly: true,
        })
        response.cookies.set("role",   user.role, {
            httpOnly: true,
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 300})

    }
}