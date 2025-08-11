import React, {useState} from "react";
const Login = ({setUser, navigate})=>{
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")

    // const handleLogin=()=>{
    //     const users = JSON.parse(localStorage.getItem("user")||[]);
    //     const user = users.find(u=>{u.Email == Email && u.Password === Password});
    //     if(!user){
    //         alert("Invalid Credentials");
    //         return;
    //     }
    //     localStorage.setItem("currentUser", JSON.stringify(user));
    //     setUser(user);
    //     navigate("/");
    // };
    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Log In</h2>
            <input type="Email" 
            // value={Email} onChange={e=>setEmail(e.target.value)} 
            placeholder="Email" className="block mb-2 p-2 border" />
            <input type="Password" 
            // value={Password}
            //  onChange={e => setPassword(e.target.value)}
              placeholder="Password"
               className="block mb-2 p-2 border" />
            <button 
            // onClick={handleLogin} 
            className="bg-green500 text-white px-4 py-2 rounded">Log In</button>
        </div>
    );
};

export default Login();