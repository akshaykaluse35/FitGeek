import { useState } from "react";
import { useAuth } from "../store/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""  
    });
    const navigate = useNavigate();
    

    const updateUser = (e) => {
        let name = e.target.name;
        // console.log(name);
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value  //it will take the name which we declare in the input field automatically
        })
    }
    const {setLocalStoragetoToken} = useAuth(); // useContext hook overhere 
    // const {Login} = useAuth();
    
   const handleSubmit = async(e) =>{
    
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(user)
        });
            console.log(response);

            if(response.ok){
                const res_token = await response.json();
                const getToken = res_token.token;
                setLocalStoragetoToken(getToken)
                // localStorage.setItem("Token",getToken);
                navigate("/user");
            }
        }catch (error) {console.log("Login", error);} 
   }
    return(
        <>
            <section>
                <div className="heading">
                    Login Form
                </div>
                <div className="container">
                    <div className="side-image">Image here

                    </div>
                    <div className="register-form">
                        <form onSubmit={handleSubmit}>   
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="text" name="email" required placeholder="Enter your email" value={user.email} onChange={updateUser}></input>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" required placeholder="Enter your Password" value={user.password} onChange={updateUser}></input>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;