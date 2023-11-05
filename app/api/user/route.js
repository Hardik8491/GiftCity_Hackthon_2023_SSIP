import { MongodbConnection } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req) {
  try {
    const url = new URL(req.url);

    const searchParams = new URLSearchParams(url.search);

    const email = searchParams.get("email");
    console.log(email);

    await MongodbConnection();
    const data = await User.findOne({ email });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Intern Server Error", { status: 500 });
  }
}
