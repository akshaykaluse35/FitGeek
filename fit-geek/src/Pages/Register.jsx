import { useState } from "react";
import { useAuth } from "../store/authContext";
import '../Pages/register.css'
import registerImage from '../images/register.jpg'


const Register = () =>{
    const [user, setUser] = useState({
        username: "",
        email: "",
        weight: "",
        height: "", 
        gender: "",
        age: "",
        activity_level: "",
        deitary_preference: "",
        health_goals: "",
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
                        weight: "",
                        height: "",
                        gender: "",
                        age: "",
                        activity_level: "",
                        deitary_preference: "",
                        health_goals: "",
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

    return (
      <>
        
        <section>
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <img src={registerImage} alt="stats" style={{height:'200px', width:'200px'}}/>
              <form onSubmit={handleSubmit}>
                <div className="formbold-form-title">
                  <h2 className="">Register now</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="firstname" className="formbold-form-label">
                      Username
                    </label> 
                    <input
                      type="text"
                      name="username"
                      required
                      id="firstname"
                      className="formbold-form-input"
                      value={user.username}
                      onChange={updateUser}
                    />
                  </div>
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="email" className="formbold-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      required
                      className="formbold-form-input"
                      value={user.email}
                      onChange={updateUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="weight" className="formbold-form-label">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      className="formbold-form-input"
                      value={user.phone}
                      onChange={updateUser}
                    />
                  </div>
                </div>
                <div className="formbold-mb-3">
                  <label htmlFor="address" className="formbold-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="address"
                    required
                    className="formbold-form-input"
                    alue={user.password}
                    onChange={updateUser}
                  />
                </div>
                <div className="formbold-mb-3">
                  <label htmlFor="address2" className="formbold-form-label">
                    Health Goals
                  </label>
                  <input
                    type="text"
                    name="health_goals"
                    id="address2"
                    required
                    className="formbold-form-input"
                    alue={user.health_goals}
                    onChange={updateUser}
                  />
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="state" className="formbold-form-label">
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="state"
                      required
                      className="formbold-form-input"
                      alue={user.age}
                      onChange={updateUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="formbold-form-label">
                      Gender:
                    </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={user.gender === "male"}
                      onChange={updateUser}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={user.gender === "female"}
                      onChange={updateUser}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={user.gender === "other"}
                      onChange={updateUser}
                    />
                    Other
                  </label>
                  </div>
                </div>
                <div className="formbold-input-flex">
                  <div>
                    <label htmlFor="post" className="formbold-form-label">
                      Height
                    </label>
                    <input
                      type="text"
                      name="height"
                      required
                      id="post"
                      className="formbold-form-input"
                      alue={user.height}
                      onChange={updateUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="formbold-form-label">
                      Weight
                    </label>
                    <input
                      type="text"
                      required
                      name="weight"
                      id="area"
                      className="formbold-form-input"
                      alue={user.weight}
                      onChange={updateUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="formbold-form-label">
                      Deitery Preference
                    </label>
                    <input
                      type="text"
                      required
                      name="deitary_preference"
                      id="area"
                      className="formbold-form-input"
                      alue={user.deitary_preference}
                      onChange={updateUser}
                    />
                  </div>
                  <div>
                    <label htmlFor="area" className="formbold-form-label">
                      Acitivity Level
                    </label>
                    <input
                      type="text"
                      name="activity_level"
                      id="area"
                      required
                      className="formbold-form-input"
                      alue={user.activity_level}
                      onChange={updateUser}
                    />
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
                    <a > terms, conditions, and policies</a> 
                  </label>
                </div> 
                <button type="submit" className="formbold-btn">Register Now</button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
}

export default Register;