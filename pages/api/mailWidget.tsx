import { NextApiRequest, NextApiResponse } from "next"

import mailWidget from '@sendgrid/mail'
mailWidget.setApiKey(process.env.SENDGRID_API_KEY_WIDGET)

export default async function sendMailWidget({ req, res }: { req: NextApiRequest; res: NextApiResponse }): Promise<void> {

   const dataWidget = {
       to: 'ironsantos911@gmail.com',
       from: 'ironsantos1999@gmail.com',
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