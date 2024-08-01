import { useState } from "react";
import { useAuth } from "../store/authContext";
import { useNavigate } from "react-router-dom";
import '../Pages/register.css'
import registerImage from '../images/register.jpg'

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
            }else{
                alert("Login Failed")
            }
        }catch (error) {console.log("Login", error);} 
   }
    return (
      <>
        <section>
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <img
                src={registerImage}
                alt="stats"
                style={{ height: "200px", width: "200px" }}
              />
              <form onSubmit={handleSubmit}>
                <div className="formbold-form-title">
                  <h2 className="">Login now</h2>
                  <p>
                  Access your personalized workout plans, nutrition guides, and progress tracking tools by logging in.
                  </p>
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="email" className="formbold-form-label">email</label>
                    <input
                      type="text"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={updateUser}
                      className="formbold-form-input"
                    ></input>
                  </div>
                  <div></div>
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="password" className="formbold-form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Enter your Password"
                      value={user.password}
                      onChange={updateUser}
                      className="formbold-form-input"
                    ></input>
                  </div>
                </div>

                <div className="formbold-checkbox-wrapper">
                  <label
                    htmlFor="supportCheckbox"
                    className="formbold-checkbox-label"
                  >
                    <div className="formbold-relative">
                      <input
                        type="checkbox"
                        id="supportCheckbox"
                        className="formbold-input-checkbox"
                      />
                      <div className="formbold-checkbox-inner">
                        <span className="formbold-opacity-0">
                          <svg
                            width={11}
                            height={8}
                            viewBox="0 0 11 8"
                            fill="none"
                            className="formbold-stroke-current"
                          >
                            <path
                              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                              strokeWidth="0.4"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    I agree to the defined
                    <a> terms, conditions, and policies</a>
                  </label>
                </div>
                <button type="submit" className="formbold-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}

export default Login;

