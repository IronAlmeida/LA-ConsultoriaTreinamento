import { connectToDatabase } from "../../utils/dbconect";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { setCookie } from "../../utils/cookies";

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
                    let split = user[0].nome.split(" ");
                    const claims = {sub: user[0]._id, nome: split[0]};
                    const jwt = sign(claims, process.env.TOKEN_SECRETKEY, {expiresIn: '1 day'});

                    setCookie(res, 'Auth', jwt, {
                        path: '/',
                        maxAge: 86400
                    })
                    res.end(res.getHeader('Set-Cookie'));
                }; 
            });        
          });
    } else {
        res.status(405).json({error: 'Somente método POST'});
    };
};