import {firebaseClient} from "../firebase/apifirebase";
import {verifyIdToken} from "../firebase/firebase-admin";
import nookies from "nookies";
import Cabecalho from "../Components/utils/header";
import Rodape from "../Components/utils/footer";
import Link from "next/link";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {RiRecordCircleLine} from "react-icons/ri";

export default function home({session}) { 
    firebaseClient();

    if (session){
        return (
            <>
                <Cabecalho />
                
                <div>

                </div>
                
                <Rodape />
            </>
        );
    } else {
        return (
            <div>Redirecionando...</div>
        )
    }
};

export async function getServerSideProps(context){
    try{
        const cookies = nookies.get(context)
        const token = await verifyIdToken(cookies.token);
        const id = token.uid;
        return {
            props: {session: id},
          };
    } catch(err){
        context.res.setHeader("Location", "/login");
        context.res.statusCode = 302;
        return { props: {} };
    };
  };