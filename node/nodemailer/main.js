var nodemailer = require("nodemailer");
var express = require("express");

var app = express();

app.post("/send-email",(req,res) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'missingpetsunlam@gmail.com',
            pass: 'apoxkxohdejpnhyw',
        },
    });

    var mailOptions = {
        from: "Remitente",
        to: "jracosta1991@gmail.com",
        subject: "Enviado desde nodemailer",
        text: "Esto es un mail de prueba de Node.js"
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            res.status(500).send(error.message);
        }else{
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000");
});