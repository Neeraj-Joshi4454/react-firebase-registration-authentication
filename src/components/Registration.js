import React, { useState } from 'react';
import { signupUser } from '../firebase_config';
import UserServices from '../services/regi_services'


function Registration() {


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [owner, setOwner] = useState("");

    // handlesubmit starts

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, number, email, password, owner);  
     
        try{
            
            await signupUser(email,password);
            // dont move this newUser anywhere first user will create after that object gets the uid
            const newUser = {
                name,
                number,
                email,
                password,
                owner,
                date: Date(),
                id: localStorage.getItem("uid")
            }
            await UserServices.addUser(newUser);
            window.alert('registration successful');

        }catch(err){
            // if any error it will show on console
            console.log(err);

            window.alert(err);
        }
    }

    // selction logic


    return (
        <>
            <h1>Registration Form</h1>

            <form method={"POST"} onSubmit={handleSubmit}>

                <input type={"text"}
                    placeholder={"enter your Name"}
                    required
                    onChange={(e) => setName(e.target.value)}
                /><br />

                <input type={"tel"}
                    placeholder={"enter your phone number"}
                    maxLength={10}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                /><br />

                <input type={"email"}
                    placeholder={"enter your email"}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input type={"password"}
                    placeholder={"enter password"}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                /><br />

                {/* for user type  */}

                <select onChange={(e) => setOwner(e.target.value)}>

                    <option value="Admin">Admin</option>
                    <option value="SuperUser">SuperUser</option>

                </select>

                <br />



                <input type={'submit'} value={'Register'} />

            </form>
        </>
    )
}

export default Registration;