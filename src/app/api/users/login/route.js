import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Jika user belum verifikasi, kirim pesan error
    if (findUser.verified === false) {
      return NextResponse.json({ errorMessage: "Please verify your account first" }, { status: 401 });
    }

    // Jika user tidak ditemukan, kirim pesan error
    if (!findUser) {
      return NextResponse.json({ errorMessage: "User not found" }, { status: 404 });
    }

    // Bandingkan password yang diinput dengan password di database
    const comparePassword = await bcrypt.compare(password, findUser.password);

    // Jika password tidak cocok, kirim pesan error
    if (!comparePassword) {
      return NextResponse.json({ errorMessage: "Invalid Credentials" }, { status: 401 });
    }

    // Jika password cocok, kirim data user
    const payload = {
      id: findUser.id,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      username: findUser.username,
      email: findUser.email,
    };

    // Buat token
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    const res = NextResponse.json({ data: payload, message: "Login succesfully" }, { status: 200 });
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: "Something went wrong. Please try again later" }, { status: 500 });
  }
}
