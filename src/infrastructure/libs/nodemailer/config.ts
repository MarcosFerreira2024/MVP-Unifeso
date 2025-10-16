import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marcosfp2787@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export { transporter };
