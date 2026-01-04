import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, education, interest } = await req.json();

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return NextResponse.json({ message: "Server configuration error: Missing email credentials." }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
            subject: `Internship Application from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEducation: ${education}\nInterest: ${interest}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to submit application", error: error.message || error.toString() }, { status: 500 });
    }
}
