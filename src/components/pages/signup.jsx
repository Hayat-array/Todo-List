import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
const Signup = ({navigate}) =>{
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

//     const handleSignUp =()=>{
//         if(Password.length < 8){
//             alert("Password must be at least 8 characters long.");
//             return;
//         }
//         const user = JSON.parse(localStorage.getItem("user") || "[]");
//         const existingUser = user.find(user=> user.Email === Email);
//         if(existingUser){
//             alert("User already exists. Please log in.");
//             return;
//         }
//         const newUser = {id: uuidv4(), Email, Password};
//         user.push(newUser);
//         localStorage.setItem("user", JSON.stringify(user));
//         alert("Signup Successful! Please log in.");
//         navigate("/login");
// };
return (
    <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input type="Email" 
        
        // value={Email} onChange={e=>setEmail(e.target.value)} 
        placeholder="Email" className="block mb-2 p-2 border" />
        <input type="Password" 
        
        // value={Password} onChange={e=>setPassword(e.target.value)}
         placeholder="Password" className="block mb-2 p-2 border" />
        <button 
        
        // onClick={handleSignUp} 
        className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
)
};
export default Signup;
