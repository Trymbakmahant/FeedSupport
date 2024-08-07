import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import BussinessModel from "@/models/Bussinessmodel";
connect();
export async function POST(request: NextRequest) {
  try {
    const reqBODY = await request.json();
    const { username, address, description, pfp } = reqBODY;
    const Bussiness = await BussinessModel.findOne({
      username: username,
      address: address,
    });
  } catch (error: any) {
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
