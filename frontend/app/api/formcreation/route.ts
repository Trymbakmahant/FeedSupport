import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import FormCreationModel from "@/models/FormCreation";
import { sendEmail } from "@/helper/mailer";
import { IFormCreation } from "@/lib/TypesForApiCall";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      BussinessName,
      BussinessAddress,
      Questions,

      media,
      Rating,
      RatingValue,
    }: IFormCreation = body;

    const newForm = new FormCreationModel({
      BussinessName,
      BussinessAddress,
      Questions,

      media,
      Rating,
      RatingValue,
    });

    console.log(newForm);
    await newForm.save();

    return NextResponse.json({ success: true, data: newForm }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      // Handling duplicate key error
      const field = Object.keys(error.keyValue)[0];
      const value = error.keyValue[field];
      return NextResponse.json(
        {
          success: false,
          error: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } "${value}" is already in use`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const searchString = searchParams.get("name");

    let forms;

    if (searchString) {
      // If a search string is provided, find the document by BussinessName
      forms = await FormCreationModel.find({
        BussinessName: new RegExp(searchString, "i"),
      });
      if (forms.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: `No business found with the name "${searchString}"`,
          },
          { status: 404 }
        );
      }
    } else {
      // If no search string, return all documents
      forms = await FormCreationModel.find({});
    }

    return NextResponse.json({ success: true, data: forms }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
