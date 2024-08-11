import { NextRequest, NextResponse } from "next/server";
import FormCreationModel from "@/models/FormCreation";
import { connect } from "@/dbConfig/dbConfig";
connect();
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Check if the ID is valid (you might want to add more validation here)
    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID parameter is required." },
        { status: 400 }
      );
    }

    const form = await FormCreationModel.findById(id);

    if (!form) {
      return NextResponse.json(
        { success: false, message: `No document found with ID "${id}"` },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: form }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
