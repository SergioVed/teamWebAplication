const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

module.exports.sendActivationMail = async (to, link) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Активація акаунта',
        text: '',
        html:
            `
               <div>
                    <h1>Щоб активувати акаунт на нашому сайті перейдіть за посиланням нижче</h1>

                    <a href="${link}">${link}</a>
                </div>
            `
    })
}