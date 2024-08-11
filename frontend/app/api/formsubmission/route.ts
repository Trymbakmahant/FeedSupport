import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbConfig";
import FormSubmitionModel from "@/models/FormSubmition";

connect();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const submission = new FormSubmitionModel(data);
    await submission.save();
    return NextResponse.json({ success: true, submission });
  } catch (error: any) {
    console.error("Error saving form submission:", error);
    return NextResponse.json({ success: false, error: error.message });
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
