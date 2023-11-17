import nodemailer from 'nodemailer';
import "dotenv/config.js";

const inMemoryDB = {};
export const sendOtp = async (req, res) => {
    const { email } = req.body;
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);
     inMemoryDB[email] ={
        email: email,
        otp : generatedOTP

     }
     console.log(inMemoryDB);
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ananyajain866@gmail.com',
                pass: `${process.env.pass}`
            }
        });
        let mailOptions = {

            to: email,
            subject: "OTP HERE, GET VERIFIED SOON!",
            text: "YOUR VERIFICATION OTP: " + generatedOTP

        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error" + error)
            }
            else {
                console.log("email send to:" + mailOptions.to, info.response)
            }
        })


        res.status(200).json("otp send");

    } catch (error) {
        res.status(500).json(error);
    }
}

export const verifyOtp = async (req, res) => {
    const { email, enteredOtp} = req.body;

    try {

        

        if(inMemoryDB[email] && inMemoryDB[email].otp == enteredOtp){
            //delete inMemoryDB[email];
            console.log(enteredOtp);
            res.status(200).json({ success: true, message: 'OTP verified successfully' });
        } else {
            // console.log(enteredOtp);
            // console.log(inMemoryDB[email].otp );
           res.status(401).json({ error: 'Incorrect OTP' });
        }

       
    } catch (error) {
       res.status(500).json(error);
    }
}