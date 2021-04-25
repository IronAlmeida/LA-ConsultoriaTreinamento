import { connectToDatabase } from "../../utils/dbconect";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default async (req, res) => {
    if (req.method === "POST"){
        const {db} = await connectToDatabase();

        const email = req.body.email;
        const lowercase = await email.toLowerCase();
        db.collection("users").find({email: lowercase}).toArray((err, user) => {
            if (err)
            console.log(err)

            if(!user[0]){
                res.status(404).json({message: 'Ops!'})
            } else {
                compare(req.body.senha, user[0].senha, function(err, result) {
                    if(!err && result){
                        const claims = {sub: user[0]._id};
                        const jwt = sign(claims, process.env.TOKEN_SECRETKEY);

                        res.json({token: jwt});
                    } else {
                        res.status(404).json({message: "Failed"});
                    }
                
                });
            };
        });
    } else {
        res.status(405).json({error: 'Somente método POST'})
    }
}