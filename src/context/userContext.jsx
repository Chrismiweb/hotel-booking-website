// import { createContext, react, useEffect, useState } from "react"

// export const UserContext = createContext()

// export function UserInfoProvider({children}){
//     const [userInfo, setUserInfo] = useState(()=>{
//         const user = localStorage.getItem("token")
//         return user ? JSON.parse(userInfo) : null
//     })

//     useEffect(()=>{
//         if(userInfo){
//             return localStorage.setItem("token")
//         }
//         else{
//             localStorage.removeItem("token")
//         }
//     }, [userInfo])

//     return(
//         <UserContext.Provider value={{userInfo, setUserInfo}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserInfoProvider({ children }) {
    const [userInfo, setUserInfo] = useState(() => {
        const username = localStorage.getItem("username");
        return username ? { userName: username } : null;
    });

    useEffect(() => {
        if (userInfo) {
            localStorage.setItem("username", userInfo.userName); // Save username in localStorage
        } else {
            localStorage.removeItem("username");
        }
    }, [userInfo]);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}
