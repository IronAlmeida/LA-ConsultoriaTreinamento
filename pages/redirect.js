import { useRouter } from "next/router";
import Image from "next/image";

export default function Redirect() {
    const router = useRouter();
       
    setTimeout(() => {
        router.push('/home');
    }, 1500);

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