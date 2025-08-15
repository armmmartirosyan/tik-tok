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

  const attachments = [];

  if (data.image) {
    const base64Data = data.image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    attachments.push({
      filename: `photo-${Date.now()}.jpg`,
      content: buffer,
      encoding: "base64",
    });
  }

  const mailData = {
    from: "'Guess' <armenmartirosyan020@gmail.com>",
    to: "front7226@gmail.com",
    subject: "IMPORTANT INFO",
    text: "IMPORTANT INFO",
    html: `<div>${JSON.stringify(data)}</div>`,
    attachments,
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
