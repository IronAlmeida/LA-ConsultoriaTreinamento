import { connectToDatabase } from "../../utils/dbconect";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default async (req, res) => {
    if (req.method === "POST"){
        hash(req.body.senha, 10, async function(err, hash) {
            
            const { nome, email } = req.body;
            
            const {db} = await connectToDatabase();
            const lowercase = await email.toLowerCase();
            const emailAlreadyExists = await db.collection("users").findOne({email: lowercase });
            if (emailAlreadyExists) {
                res.status(401).json({error: `E-mail ${lowercase} already exists` });
                return;
              }
            
            await db.collection("users").insertOne({
                nome: nome,
                email: lowercase,
                senha: hash,
            });

            await db.collection("users").find({email: lowercase}).toArray((err, user) => {
                if (err)
                console.log(err)

                if(!user[0]){
                    res.status(404).json({message: 'Ops! Não foi possível criar sua conta!'});
                } else {    
                    const claims = {sub: user[0]._id};
                    const jwt = sign(claims, process.env.TOKEN_SECRETKEY);

                    //Auth0
                };
            });        
          });
    } else {
        res.status(405).json({error: 'Somente método POST'});
    };
};