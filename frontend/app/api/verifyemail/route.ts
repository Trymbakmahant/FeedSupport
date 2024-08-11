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
      verifyToken: nulliFireHash,
    });
    if (Bussiness) {
      return NextResponse.json({
        status: 200,
        user: Bussiness,
      });
    }
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
