import { useState } from "react";
import { useAuth } from "../store/authContext";


const Register = () =>{
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const updateUser = (event) =>{
        let target = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [target]: value
        });
    }    

    const {setLocalStoragetoToken} = useAuth();


    const handleSubmit = async(e) =>{
        try {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/register", { //creating POST req to the backend 
            headers:{
                "Content-Type": "application/json"           
            },
            method: "POST",
            body:JSON.stringify(user) //converting user to JSON format
        });

        const res_token = await response.json();
        

            if(response.ok){
                setUser(
                    {
                        username: "",
                        email: "",
                        phone: "",
                        password: ""
                })             
                const getToken = res_token.token;
                // console.log(getToken);
                setLocalStoragetoToken(getToken);
            }else{
                console.log(res_token.extraDetailedMessage);
                alert(res_token.message);
            }
            // console.log(response);
        } catch (error) {
            console.log("register", error);
        }
    }

    return(
        <>
            <section>
                <div className="heading">
                    Registration Form
                </div>
                <div className="container">
                    <div className="side-image">HEllo

                    </div>
                    <div className="register-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" required placeholder="Enter your Username" autoComplete="off" value={user.username} onChange={updateUser} ></input>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="text" name="email" required placeholder="Enter your email" value={user.email} onChange={updateUser}></input>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name="phone" required placeholder="Enter your Phone number" value={user.phone} onChange={updateUser}></input>
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

export default Register;