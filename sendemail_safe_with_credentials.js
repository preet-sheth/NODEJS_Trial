const nodemailer = require('nodemailer');
const { google } = require('googleapis');

require('dotenv').config();

async function sendMail(content, email) {
    const CLIENT_EMAIL = process.env.REACT_APP_EMAIL;
    const CLIENT_ID = process.env.REACT_APP_EMAIL_CLIENT_ID; // Client ID generated on Google console cloud
    const CLIENT_SECRET = process.env.REACT_APP_EMAIL_CLIENT_SECRET; // Client SECRET generated on Google console cloud
    const REDIRECT_URI = process.env.REACT_APP_EMAIL_REDIRECT_URI; // The OAuth2 server (playground)
    const REFRESH_TOKEN = process.env.REACT_APP_EMAIL_REFRESH_TOKEN; // The refreshToken we got from the the OAuth2 playground

    // const CLIENT_EMAIL = 'ghost01coder@gmail.com';
    // const CLIENT_ID = '526191359900-v19mg9icn9lpesnrapoj3t69rnqvd1ak.apps.googleusercontent.com'; // Client ID generated on Google console cloud
    // const CLIENT_SECRET = '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'; // Client SECRET generated on Google console cloud
    // const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; // The OAuth2 server (playground)
    // const REFRESH_TOKEN = '1//04EFSeia4n7XzCgYIARAAGAQSNwF-L9IrR_q6Mgjk416gpd10mjpneFkrq1cslpv5Zx4OjDVOSYf8GbvWBmU3Zl8wg7247cOYhcw'; // The refreshToken we got from the the OAuth2 playground

    const OAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI,
      );
    
    OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    try {
      // Generate the accessToken on the fly
      const accessToken = await OAuth2Client.getAccessToken();
  
     // Create the email envelope (transport)
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: CLIENT_EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
  
      // Create the email options and body 
      // ('email': user's email and 'name': is the e-book the user wants to receive)
      const mailOptions = {
        from: CLIENT_EMAIL,
        to: email,
        subject: 'Sending Email using Node.js',
        text: content,
        // html: `Enjoy learning!`,
        // attachments: [
        //   {
        //     filename: `${name}.pdf`,
        //     path: path.join(__dirname, `e-books-path/${name}.pdf`),
        //     contentType: 'application/pdf',
        //   },
        // ],
      };
  
      // Set up the email options and delivering it
      
      const result = await transport.sendMail(mailOptions);

      return result;
  
    } catch (error) {
      return error;
    }
  }


sendMail('STOCK MARKET !!!','preet.sheth25@gmail.com');


/*
Useful links :-

https://levelup.gitconnected.com/nodemailer-with-gmail-not-working-4ed254258ac
https://javascript.plainenglish.io/sending-emails-with-nodemailer-with-gmail-and-oauth2-e0b609587b7a
https://levelup.gitconnected.com/how-to-create-node-global-variables-to-use-in-react-app-9df1514a4eb7
https://medium.com/geekculture/how-do-i-get-an-oauth-credential-35d6d0e5d617

*/