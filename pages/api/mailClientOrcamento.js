const mailClientOrcamento = require('@sendgrid/mail')
mailClientOrcamento.setApiKey(process.env.SENDGRID_API_KEY_CLIENTORCAMENTO)

export default function sendMailClientOrcamento(req, res) {

    const nomeCompleto = req.body.nome;
    const nomediv = nomeCompleto.split(" ")

    const dataClientOrcamento = {
        to: req.body.email,
        from: 'Lourdes Almeida <contato@lourdesalmeidadp.com.br>',
        subject: 'Orçamento',
        text: 'Solicitação de orçamento em análise',
        html:
        `
        <div style="width: 100%; background-color: #E5E7EB;">
            <div style="background-color: white;  max-width: 600px; margin: 0 auto; border: 2px solid #D1D5DB;">

                <div style="width: 63%; margin: 0 auto; padding: 16px 0;">
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3e5sWjPuWSl0TbjfEwaGmb_MVdKlKJXKCgZ46R2Tfg9FxrkgCrg3ovNKxgzC8mLZf1W4-sxZZlsV0XKD9rf12gkWt3I1yBYXCZLxnIjftlmWXrPqOSma7uiULmYP88784ttIK0V0d3NHHdFJSJhEHUc=w1490-h500-no?authuser=0" width="100%" height="125px" />
                </div>
                

                <div style="width: 100%; background-color: #B91C1C; background-image: linear-gradient(to right, #DC2626 , #B91C1C, #DC2626); text-align: center;">
                    <span style="color: white; font-size: 32px;">Olá ${nomediv[0]}!</span>
                </div>

                <div style="width: 90%; margin: 0 auto; padding: 16px 0;">
                    <p style="font-size: 18px; color: #1F2937;">Sua solicitação foi recebida e logo entraremos em contato com as informações do orçamento.</p>
                </div>
                
                <div style="width: 90%; margin: 0 auto; padding: 16px 0;">
                    <p style="font-size: 14px; color: #1F2937; margin-left: 16px;"><strong>Atenciosamente,</strong></p>
                    <p style="font-size: 14px; color: #1F2937; margin-left: 16px;"><strong>Equipe da LA</strong></p>   
                </div>
                
            
                <div style="width: 90%; margin: 0 auto; padding: 16px 0;">
                    <img src="https://lh3.googleusercontent.com/pw/ACtC-3fO6FlcNxqjHlhOLIRsw_PD-whgKKgD3G0qYFwbuHNw6SEQqaureGhNYlHIzTNXlTyJGXpc6DRfV5V5bIpaM8BDyMsADsmMzl2HMZ-7joyYkkhc11SC05xr84WUVMeSq3XuRA54Q_vxqBLFjZuGBpmL=w379-h120-no?authuser=0" width="379px" height="120px">
                </div>
                
            </div>                
        </div>    
        `
    }

   mailClientOrcamento.send(dataClientOrcamento).then((response) => {
       res.send(response)
   }).catch((error) => {
       res.send(error)
   })
}