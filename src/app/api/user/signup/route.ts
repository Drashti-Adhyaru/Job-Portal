import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()
// Calls the connect function to establish a connection to the database.
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { firstName, lastName, email, password } = reqBody;

        // Checks if a user with the provided email already exists.
        const user = await User.findOne({ email });

        if (user) {
            console.log(user);
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        } else {
            console.log('User not found');
            // Proceed with user creation
        }

        // Hash password using bcryptjs.
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            phone: "",
            role: "",
            email,
            password: hashedPassword,
        });

        // Saves the new user to the database.
        const savedUser = await User.create(newUser);

        return NextResponse.json({
            message: "User for Portfolio created successfully",
            success: true,
            savedUser
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
