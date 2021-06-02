const mailWidget = require('@sendgrid/mail')
mailWidget.setApiKey(process.env.SENDGRID_API_KEY_WIDGET)

export default async function sendMailWidget(req, res) {

   const dataWidget = {
       to: 'contato@lourdesalmeidadp.com.br',
       from: 'Contato Site SendGrid <contato@lourdesalmeidadp.com.br>',
       subject: 'Contato através do site',
       text: 'Nova mensagem',
       html: `
        <div>
            <h2><b>Alguem enviou uma nova mensagem através do site!</b></h2>
            <br/>
            <br/> 
            
            <p>Nome: ${req.body.nome}</p>
            <p>Email: ${req.body.email}</p>
            
            <p>Mensagem: ${req.body.message}</p>
        </div>
       `
   }

   await mailWidget.send(dataWidget).then((response) => {
       res.send(response)
   }).catch((error) => {
       res.send(error)
   })
}