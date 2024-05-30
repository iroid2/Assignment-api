import { db } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest,{params:{slug}}:{params:{slug:string}}){
    try {
    console.log(slug)
    const assignment =await db.assignment.findUnique({
        where:{
            slug
        }
    })
    if(!assignment){
        return NextResponse.json({
            data:null,
            error:"Assinment does not exist",
            success:false
        },{
            status:200
        })   
    }
        return NextResponse.json({
            data:assignment,
            error:null,
            success:true
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            data:null,
            error,
            success:false
        },{
            status:400
        })
    }
    }