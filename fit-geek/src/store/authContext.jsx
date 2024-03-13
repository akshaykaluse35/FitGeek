import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthTokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState("");
  const [isLoding, setIsLoading] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  const setLocalStoragetoToken = (serverTokens) => {
    setToken(serverTokens);
    localStorage.setItem("Token", serverTokens);
  };

  let isLoggedIn = !!token;
  console.log(isLoggedIn);

  const LogoutUser = () => {
    setToken(null);
    // setLoggedIn(false)
    return localStorage.removeItem("Token");
  }

  // getting info which user is logged in 
  const getUser = async() => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {Authorization: `Bearer ${token}`},
    });

        if(response.ok){
          const data = await response.json()
          // console.log(data);
          setUser(data);
          setIsLoading(false);
        }else{
          console.log("Error from fetching users data");
          setIsLoading(false);
        }
        

    } catch (error) {
      console.log("this is from getting user logged or not error: ", error);
    }

  };


  useEffect(()=>{ 
    getUser();// eslint-disable-next-line
  }, []);

  return (
    <authContext.Provider value={{ setLocalStoragetoToken, LogoutUser, isLoggedIn, isLoding, token, user}}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(authContext);
  if (!authContextValue) {
    throw new Error("useAuth is not provided in index.js");
  }
  return authContextValue;
};
