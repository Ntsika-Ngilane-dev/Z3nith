import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveEmail = async(email) => {
    try {
        await addDoc(collection(db, "subscribers"), {
            email,
            createdAt: serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error("Error adding email:", error);
        return false;
    }
};