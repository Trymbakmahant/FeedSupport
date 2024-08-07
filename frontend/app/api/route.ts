import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
connect();
export async function GET() {
  try {
    return new NextResponse("dfosjf");
    //return logic here
  } catch (error) {
    //return logic here
  }
}
