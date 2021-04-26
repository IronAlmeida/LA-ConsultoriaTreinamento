import firebase from "firebase/app";
import "firebase/storage";

const WriteToCloudFirestore = () => {

    const sendData = () => {
        var db = firebase.firestore();

        db.collection("users").add({
            first: "Alan",
            middle: "Mathison",
            last: "Turing",
            born: 1912
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    

    return (
        <>
            <button onClick={sendData}>Send Data To Cloud Firestore</button>
        </>
    )
}

export default WriteToCloudFirestore