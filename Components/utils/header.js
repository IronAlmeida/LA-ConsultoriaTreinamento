import firebase from "firebase/app";
import {firebaseClient} from "../../firebase/apifirebase";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";


export function Cabecalho(props) {
    firebaseClient();
    const router = useRouter();

    return(
        <div className="w-full bg-red-600 px-4 py-2">
            <div className="flex sm:w-3/4 justify-between m-auto items-center">
                <Image src="/LA-Logo.png" width={70} height={70} />
                <div>
                    <Link href="#"><a className="text-white text-sm rounded-3xl bg-gray-800 p-2.5 mr-3">Minha Conta</a></Link>
                    <button onClick={async () => {
                        await firebase.auth().signOut();
                        router.replace('/');
                    }} className=" text-lg text-white">Sair</button>
                </div>
            </div>
        </div>
    );
}