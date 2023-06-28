import nodemailer from 'nodemailer';

const generateEmail = async (email, subject, body) => {
  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_ACCOUNT,
      pass: process.env.EMAIL_APP_PASS,
    },
  };
  const transporter = nodemailer.createTransport(smtpConfig);
  const mailOptions = {
    to: email,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error;
    }
    return info.response;
  });
};

export default generateEmail;
