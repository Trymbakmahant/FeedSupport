import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { action } = await request.json(); // Extract app_id from request body

    const response = await fetch(
      `https://developer.worldcoin.org/api/v2/create-action/app_${process.env.NEXT_PUBLIC_WORLD_ID_API}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.DEV_PORTAL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: action,
          name: action,
          description: "This is for only one time form submission",
          max_verifications: 1,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error creating action:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
