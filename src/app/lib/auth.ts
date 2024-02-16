
import {NextRequest, NextResponse} from "next/server";
import { Console } from "console";

export async function redirectBasedOnRole(request : NextRequest, role: string){



  
    if(role=="employee"){
        return NextResponse.redirect(new URL('/user/dashboard', request.url));
    }
    else if(role=="employer"){
        return NextResponse.redirect(new URL('/employer/dashboard', request.url));
    }
    else {
        return NextResponse.redirect(new URL('/unauth', request.url));
    }
}
