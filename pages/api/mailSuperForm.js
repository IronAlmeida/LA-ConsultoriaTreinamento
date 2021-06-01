const mailSuperForm = require('@sendgrid/mail')
mailSuperForm.setApiKey(process.env.SENDGRID_API_KEY_SUPERFORM)

export default function sendMailSuperForm(req, res) {
    const dataSuperForm = {
        to: 'contato@lourdesalmeidadp.com.br',
        from: 'Contato Site <contato@lourdesalmeidadp.com.br>',
        subject: 'Contato através do site',
        text: 'Nova solicitação',
        html: `
            <div>
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
    }
    mailSuperForm.send(dataSuperForm).then((response) => {
        res.send(response)
    }).catch((error) => {
        res.send(error)
    })
}