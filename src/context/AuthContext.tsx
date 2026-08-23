import { createContext, useContext } from "react";
import { login } from "../services/users/endpoints";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { IAuthContext, IAuthContextProvider, IUserData } from "../services/users/types";


export const AuthContext = createContext({} as IAuthContext)

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}


export function AuthContextProvider({children}:IAuthContextProvider){

    const [accessToken, setAccessToken] = useLocalStorage("accessToken","");
    // const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken","");
    const [userData, setUserData] = useLocalStorage<IUserData | null>("refreshToken",null);
    const isLogin = Boolean(accessToken);
    const signInHandler = async(usename:string,password:string , expiresInMins:number)=>{ 

    const data = await login(usename,password,expiresInMins)
            setAccessToken(data.accessToken)
            // setRefreshToken(data.refreshToken)
            setUserData({
                id: data.id,
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                image: data.image,
                gender: data.gender
            })
            console.log(userData);
            
            return data 
    }
    const signOutHandler = ()=>{
        setAccessToken("")
        // setRefreshToken("")
    }

    

    return(
        <AuthContext.Provider value={{isLogin , signInHandler , signOutHandler , userData }}>
            {children}
        </AuthContext.Provider>
    )
}