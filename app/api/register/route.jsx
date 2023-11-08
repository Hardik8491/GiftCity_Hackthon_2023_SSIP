import { MongodbConnection } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary'
import bcrypt from "bcryptjs";
await MongodbConnection();

cloudinary.config({ 
  cloud_name: 'dctww9bm8', 
  api_key: '538343139673177', 
  api_secret: 'S0ME4-M49yTpCw5nK4WYK8qhBvY' 
});

export async function POST(req) {
  try {

    const body=await req.json()
    
    const hashPassword = await bcrypt.hash(body.password, 12);

   if(body.img?.length)
   {
      const res=await cloudinary.uploader.upload(body.img);
      body.img=res.secure_url;
      body.public_id=res.public_id;
      
      console.log(res);
   }

    await User.create({...body,password:hashPassword});
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}