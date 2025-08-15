"use server";

import nodemailer from "nodemailer";

const user = process.env.NEXT_PUBLIC_EMAIL_USER_NAME;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user,
      pass,
    },
  });

  const mailData = {
    from: "'Guess' <armenmartirosyan020@gmail.com>",
    to: "front7226@gmail.com",
    subject: "IMPORTANT INFO",
    text: "IMPORTANT INFO",
    html: `<div>${JSON.stringify(data)}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: "",
      success: false,
    };
  }

  return {
    success: true,
    message: "",
  };
}
