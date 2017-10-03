var config = {};

 config.port = process.env.PORT ||  3000;

 config.emailAccount = {
    user: 'your_email',
    pass: 'your_password'
}

config.user = {
    email: 'email@email.com',
    subject: 'username',
    text: ''
}

module.exports = config;

