import nodemailer from "nodemailer"
import jwt from "jsonwebtoken"
import { emailHtml } from "./emailHtml.js";

export const sendEmail=async(email)=>{
    const transporter = nodemailer.createTransport({
      
        service:"gmail",
        auth: {
          user: "elmghrby025@gmail.com",
          pass: "jonovazbebghcucz",
        },
      });

      jwt.sign({email},'myNameIsAhmed',async(err,token)=>{
        const info = await transporter.sendMail({
            from: '"elmghraby Node"<elmghrby025@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: emailHtml(token), // html body
          });
      })

 
}