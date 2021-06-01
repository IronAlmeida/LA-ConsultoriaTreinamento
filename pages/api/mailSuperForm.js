const nodemailer = require('nodemailer')
require("dotenv").config();
const USERMAIL = process.env.USERMAIL
const PASSMAIL = process.env.PASSMAIL

export default function sendMailSuperForm(req, res) {

    const nomeCompleto = req.body.nome;
    const cursos = req.body.cursos;
    const orcamento = req.body.orcamento;
    const nomediv = nomeCompleto.split(" ")

    let transporter = nodemailer.createTransport({
        host: "smtp.umbler.com",
        port: 587,
        secure: false,
        auth: {
            user: USERMAIL,
            pass: PASSMAIL
        },
    })

    transporter.sendMail({
        from: `"Contato Site" <${USERMAIL}>`,
        to: USERMAIL,
        subject: `Contato através do Site` ,
        text: `Nova solicitação`,
        html: 
        `   <div>
                <h2><b>Nova Solicitação! As informações do cliente segue abaixo: </b></h2>
                <br/>
                <br/> 
                
                <p>Nome: ${req.body.nome}</p>
                <p>Email: ${req.body.email}</p>
                <p>Telefone: ${req.body.telefone}</p>
                <p>Interessado no(s) serviço(s): ${req.body.servicos}</p>
                <p>Interessado no(s) curso(s): ${req.body.cursos} </p>

                <h3>Informações de Orçamento</h3>
                <p>Orçamento para: ${req.body.orcamento}</p>
                <p>Função na empresa: ${req.body.funcao}</p>
                <p>CPF/CNPJ: ${req.body.cadastro}</p> 
                <p>Total de empregados: ${req.body.qtdEmpregado}</p>
                <p>Possui contribuiente individual? ${req.body.individual}</p>
                <p>Possui estagiários? ${req.body.estagiario}</p>
                <p>Possui aprendiz? ${req.body.aprendiz}</p>
                <p>Tipo de Tributação: ${req.body.tribEmpresa}</p>
            </div>
        `
    }).then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })

    if(orcamento.length > 0){
        transporter.sendMail({
            from: `"Lourdes Almeida" <${USERMAIL}>`,
            to: req.body.email,
            subject: `Orçamento` ,
            text: `Solicitação de orçamento em análise`,
            html: 
            `   <div style="width: 100%; background-color: #E5E7EB;">
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
        }).then((response) => {
            res.send(response)
        })
        .catch((error) => {
            res.send(error)
        })    
    }
    
    
    if(cursos.length > 0){
        transporter.sendMail({
            from: `"Lourdes Almeida" <${USERMAIL}>`,
            to: req.body.email,
            subject: `Cursos LA` ,
            text: ``,
            html: 
            `   <div style="width: 100%; background-color: #E5E7EB;">
                    <div style="background-color: white;  max-width: 600px; margin: 0 auto; border: 2px solid #D1D5DB;">
    
                        <div style="width: 63%; margin: 0 auto; padding: 16px 0;">
                            <img src="https://lh3.googleusercontent.com/pw/ACtC-3e5sWjPuWSl0TbjfEwaGmb_MVdKlKJXKCgZ46R2Tfg9FxrkgCrg3ovNKxgzC8mLZf1W4-sxZZlsV0XKD9rf12gkWt3I1yBYXCZLxnIjftlmWXrPqOSma7uiULmYP88784ttIK0V0d3NHHdFJSJhEHUc=w1490-h500-no?authuser=0" width="100%" height="125px" />
                        </div>
                        
    
                        <div style="width: 100%; background-color: #B91C1C; background-image: linear-gradient(to right, #DC2626 , #B91C1C, #DC2626); text-align: center;">
                            <span style="color: white; font-size: 32px;">Olá ${nomediv[0]}!</span>
                        </div>
    
                        <div style="width: 90%; margin: 0 auto; padding: 16px 0;">
                            <p style="font-size: 18px; color: #1F2937;">Obrigado pelo interrese em nosso(s) curso(s)! Logo entraremos em contato com mais informações.</p>
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
        }).then((response) => {
            res.send(response)
        })
        .catch((error) => {
            res.send(error)
        })
    }
}