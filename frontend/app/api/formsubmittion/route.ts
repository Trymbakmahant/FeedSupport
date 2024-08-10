import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbConfig";
import FormSubmitionModel from "@/models/FormSubmition";

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      BussinessName,
      BussinessAddress,
      Questions,
      ANS,
      videoUrl,
      imageUrl,
      submitterAddress,
      EASaddress,
      RatingValue,
    } = body;

    const newSubmission = new FormSubmitionModel({
      BussinessName,
      BussinessAddress,
      Questions,
      ANS,
      videoUrl,
      imageUrl,
      submitterAddress,
      EASaddress,
      RatingValue,
    });

    console.log(newSubmission);
    await newSubmission.save();

    return NextResponse.json(
      { success: true, data: newSubmission },
      { status: 201 }
    );
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

    let submissions;

    if (searchString) {
      // If a search string is provided, find the documents by BussinessName
      submissions = await FormSubmitionModel.find({
        BussinessName: new RegExp(searchString, "i"),
      });
    } else {
      // If no search string, return all documents
      submissions = await FormSubmitionModel.find({});
    }

    return NextResponse.json(
      { success: true, data: submissions },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
