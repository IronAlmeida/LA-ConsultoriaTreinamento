import { verify } from "jsonwebtoken";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function home({auth, nome}) {
    
    const router = useRouter();
    useEffect(() => {

        if(!auth){
          router.replace('/redirect');
        }
    }, [])

    return(
       <h1>Conectado! Olá {nome}</h1>
    )
}

export async function getServerSideProps(context) {

    const token = await context.req?.cookies.Auth ? context.req?.cookies.Auth : false

    if(token){
        var decoded = verify(token, process.env.TOKEN_SECRETKEY);
        return {
            props: {
                auth: token,
                nome: decoded.nome
            }
        }
    } else {
        context.res.status(401).json('Não Autorizado')
    };
    
    return {
        props: {
            auth: token,
        }
    };
};