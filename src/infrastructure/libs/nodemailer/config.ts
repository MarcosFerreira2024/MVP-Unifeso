import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marcosfp2021@hotmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export { transporter };
