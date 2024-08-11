import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // Use req.json() to parse the body

    const apiUrl = `https://developer.worldcoin.org/api/v2/verify/app_${process.env.NEXT_PUBLIC_WORLD_ID_API}`;
    console.log(apiUrl);
    console.log(data);

    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("Verification failed");
    }

    return NextResponse.json({ success: true, data: response.data });
  } catch (err: any) {
    console.log(err.response.data);
    return NextResponse.json(
      {
        success: false,
        error: err.response.data,
      },
      { status: 500 }
    );
  }
}
