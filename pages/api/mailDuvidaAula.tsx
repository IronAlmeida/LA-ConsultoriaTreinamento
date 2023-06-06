import { NextApiRequest, NextApiResponse } from "next"

const mailDuvida = require('@sendgrid/mail')
mailDuvida.setApiKey(process.env.SENDGRID_API_KEY_DUVIDAS)

export default async function sendMailDuvidas(req: NextApiRequest, res: NextApiResponse) {

   const dataDuvidas = {
       to: 'consultoria@lourdesalmeidadp.com.br',
       from: 'Dúvida na Aula <consultoria@lourdesalmeidadp.com.br>',
       subject: 'Contato através do site',
       text: 'Dúvida de aluno',
       html: `
        <div>
            <h2><strong>Alguém deixou uma dúvida na seguinte aula: </strong></h2>
            <br/>
            <br/> 

            <p>${req.body.aula}</p>
            <p>Email do aluno: ${req.body.email}</p>
            <p><strong>Dúvida:</strong></p>
            <br>
            <p>${req.body.message}</p>
        </div>
       `
   }

   await mailDuvida.send(dataDuvidas).then((response) => {
       res.send(response)
   }).catch((error) => {
       res.send(error)
   })
}