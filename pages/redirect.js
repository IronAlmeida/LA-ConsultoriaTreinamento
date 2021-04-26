import { useRouter } from "next/router";
import {useEffect} from "react";
import Image from "next/image";

export default function Redirect({auth}) {
    const router = useRouter();
    
    useEffect(() => {

        if(!auth){
          setTimeout(() => {
            router.replace('/');
          }, 2000);
        } else {
            router.push('/home')
        }
    }, [])

    return(
        <div className="w-screen h-screen relative">
            <div className="text-center text-gray-800 text-lg font-medium w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image className="opacity-75 animate-pulse" src="/logo-colorida.png" width={"600"} height={"233"} />
                <br /><br />
                <p>Redirecionando para tela inicial...</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {

    const token = context.req?.cookies.Auth ? context.req?.cookies.Auth : false

    return {
        props: {auth: token}
    };
};