import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const authContext = createContext({});

function AuthProvider({ children }){

  const [data, setData] = useState({});

  async function signIn({ email, password }){
    try{
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

    } catch(error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user = localStorage.getItem("@rocketmovies:user");

    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return (
    <authContext.Provider value={ {signIn, user: data.user }}>
      {children}
    </authContext.Provider>
  )
}

function useAuth(){
  const context = useContext(authContext);

  return context;
}

export { AuthProvider, useAuth };