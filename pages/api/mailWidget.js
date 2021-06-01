const nodemailer = require('nodemailer')
const USERMAIL = process.env.USERMAIL
const PASSMAIL = process.env.PASSMAIL

export default function sendMailWidget(req, res) {

    let transporter = nodemailer.createTransport({
        host: "smtp.umbler.com",
        port: 587,
        auth: {
            user: USERMAIL,
            pass: PASSMAIL
        },
    })

    transporter.sendMail({
        from: `"Mensagem Site" <${USERMAIL}>`,
        to: USERMAIL,
        subject: `Mensagem através do Site` ,
        text: `Nova mensagem`,
        html: 
        `   <div>
                <h2><b>Alguem enviou uma nova mensagem através do site!</b></h2>
                <br/>
                <br/> 
                
                <p>Nome: ${req.body.nome}</p>
                <p>Email: ${req.body.email}</p>
                
                <p>${req.body.message}</p>
            </div>
        `
    }).then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}