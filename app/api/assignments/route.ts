import { db } from "@/utils/db";
import { generateSlug } from "@/utils/generateSlug";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // get data
    const { title, description, link_one, link_two, topic } = await req.json();

    const slug = generateSlug(title);

    const existingAss = await db.assignment.findUnique({
      where: {
        slug,
      },
    });
    if (existingAss) {
      return NextResponse.json(
        {
          data: null,
          error: "Assignment Already exists",
          success: false,
        },
        {
          status: 409,
        }
      );
    }

    const newAss = await db.assignment.create({
      data: {
        title,
        slug,
        description,
        link_one,
        link_two,
        topic,
      },
    });
    console.log(newAss);
    return NextResponse.json(
      {
        data: newAss,
        error: null,
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error,
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
export async function GET() {
  try {
    const assignments = await db.assignment.findMany();
    return NextResponse.json(
      {
        data: assignments,
        error: null,
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error,
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
