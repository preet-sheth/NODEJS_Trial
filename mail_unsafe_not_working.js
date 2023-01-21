var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  // host: "smtp.gmail.com",
  // port: 465,
  // secure: true,


  auth: {
    user: 'ghost01coder@gmail.com',
    pass: '1!1!1!10'

    // user: 'preet.sheth25@gmail.com',
    // pass: 'Pvs!2345'

  }
});

var mailOptions = {
  from: 'ghost01coder@gmail.com',
  to: 'preet.sheth25@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

console.log("created");

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});