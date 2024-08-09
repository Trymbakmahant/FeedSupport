import nodemailer from "nodemailer";
import BussinessModel from "@/models/Bussinessmodel";
import bycrypt from "bcryptjs";
import { NextResponse } from "next/server";

import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 456,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
} as SMTPTransport.Options);

export const sendEmail = async ({
  email,
  BussinessID,
}: {
  email: string;
  BussinessID: string;
}) => {
  try {
    const hashToken = await bycrypt.hash(BussinessID.toString(), 10);

    await BussinessModel.findByIdAndUpdate(BussinessID, {
      verifyToken: hashToken,
      verifyTokenExpiry: Date.now() + 3600000,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "trymbak0102mahant@gmail.com",
      subject: "Verify your email",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">here</a> to verify your email.</p>
               <p>Or copy and paste the link below in your browser:<br> ${process.env.DOMAIN}/verifyemail?token=${hashToken}</p>`,
    };

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log("Mail sent:", mailresponse);

    return mailresponse;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
};
