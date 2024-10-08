import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import BussinessModel from "@/models/Bussinessmodel";
import { sendEmail } from "@/helper/mailer";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBODY = await request.json();
    console.log(reqBODY);
    const { username, description, email, address, nulliFireHash } = reqBODY;
    console.log(nulliFireHash);
    const Bussiness = await BussinessModel.findOne({
      username: username,
      email: email,
    });
    if (Bussiness) {
      return NextResponse.json({
        error: "user already exist",
        status: 409,
      });
    }
    const SavedBussiness = new BussinessModel({
      username,
      email,
      description,
      address,
      verifyToken: nulliFireHash,
    });
    console.log("sodfajs", SavedBussiness);
    const SavedUser = await SavedBussiness.save();

    // await sendEmail({
    //   email: email,
    //   BussinessID: SavedUser._id,
    // });
    return NextResponse.json({
      message: "User created Succesfully",
      success: true,
      status: 200,
      user: SavedUser,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
