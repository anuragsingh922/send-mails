const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  try {
    const {
      toEmails,
      companyName,
      subject,
      textMessage,
      fromEmail,
      fromPassword,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: fromEmail,
        pass: fromPassword,
      },
    });

    console.log(toEmails);
    const response = await transporter.sendMail({
      from: `${companyName} ${fromEmail}`,
      to: toEmails,
      subject: subject,
      text: textMessage,
    });

    if (response?.accepted?.length) {
      console.log("Email sent:", response);
      res.send(`Email sent to these emails: ${response.accepted.join(", ")}`);
    } else {
      console.log("Failed to send email:", response);
      res.send(`Failed to send the email.`);
    }
  } catch (error) {
    console.log("Error in sending email : ", error);
    res.send(`Failed to send the email. :` , error);
  }
};

module.exports = { sendEmail };