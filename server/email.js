
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
    
    var  sender =  (account, user) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(smtpTransport({
            host: 'smtp.live.com',
            port: 587,
            secure: false, //use ssl
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        }));
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: account.user, // sender address
            replyTo: user.email,
            to: account.user, // list of receivers
            subject: user.subject, // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };
    

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    
    }
        

    module.exports.sender = sender;