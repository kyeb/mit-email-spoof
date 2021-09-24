// Load username/password from .env file
require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "outgoing.mit.edu",
  port: 587,
  secure: false,
  auth: {
    user: process.env.KERBEROS,
    pass: process.env.KERBEROS_PASSWORD,
  },
});


const mailOptions = {
  from: "Not Not Faraz <not-faraz@mit.edu>",
  to: "not-faraz@mit.edu",
  subject: `i am the mailing list`,
  headers: {
    'x-hi-there': `Hey! If you're digging into these headers, you've probably found out who sent this by now. I know it's not truly anonymous, but it's close enough to trick *most* people. It's a real security issue at MIT, in my opinion. If you want to know how to do this, it's pretty straightforward: https://github.com/kyeb/mit-email-spoof`,
  },
  text:
    `👋\n\n` +
    `do not, under any circumstances, blindly trust the "from" header of an email`
};

transporter.sendMail(mailOptions, (err) => {
  if (err) {
    console.error(err);
  }
});
