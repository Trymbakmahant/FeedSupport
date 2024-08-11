import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import BussinessModel from "@/models/Bussinessmodel";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBODY = await request.json();
    console.log(reqBODY);
    const { address, nulliFireHash, email } = reqBODY;
    console.log(nulliFireHash);
    const Bussiness = await BussinessModel.findOne({
      address: address,
      email: email,
    });
    console.log(Bussiness);
    const updatedBussienss = await BussinessModel.findByIdAndUpdate(
      Bussiness._id,
      {
        verifyToken: nulliFireHash,
      }
    );
    if (Bussiness) {
      return NextResponse.json({
        status: 200,
        user: updatedBussienss,
        ok: true,
      });
    }
    return NextResponse.json({
      ok: false,
      status: 200,
      message: "you don't have any account please signup",
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
