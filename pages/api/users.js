import connection from "../../utils/dbconect";
import { hash } from "bcryptjs";

export default async (req, res) => {
    if (req.method === "POST"){
        hash(req.body.senha, 10, async function(err, hash) {
            
            const { nome, email } = req.body;
            
            const {db} = await connection();
            const lowercase = await email.toLowerCase();
            const emailAlreadyExists = await db.collection("users").findOne({email: lowercase });
            if (emailAlreadyExists) {
                res.status(401).json({error: `E-mail ${lowercase} already exists` });
                return;
              }
            
            const response = await db.collection("users").insertOne({
                nome: nome,
                email: lowercase,
                senha: hash,
            });

            res.status(200); //Gerar um JWT para autenticação
        });
    } else {
        res.status(405).json({error: 'Somente método POST'})
    }
}