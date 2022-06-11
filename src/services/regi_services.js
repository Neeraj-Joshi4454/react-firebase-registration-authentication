import { db } from "../firebase_config";

import { collection, addDoc } from "firebase/firestore";

const userCollectionRef = collection(db,"users");

class UserServices{

    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    }

}


export default new UserServices();