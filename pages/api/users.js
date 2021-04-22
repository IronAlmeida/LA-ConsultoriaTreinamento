import connection from "../../utils/dbconect";
import { hash } from "bcryptjs";

export default async (req, res) => {
    if (req.method === "POST"){
        hash(req.body.senha, 10, async function(err, hash) {
            
            const { nome, email } = req.body;
            
            const {db} = await connection();

            const response = await db.collection("users").insertOne({
                nome,
                email,
                hash,
            });
        });
    } else {
        res.status(400).json({Error: 'Metodo de requisição errada!'})
    }
}