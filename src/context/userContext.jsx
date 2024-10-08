// import { createContext, useEffect, useState } from "react"

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
        const email = localStorage.getItem("email");

        return username && email ? { userName: username, email: email } : null;
    });

    useEffect(() => {
        if (userInfo) {
            localStorage.setItem("username", userInfo.userName); // Save username in localStorage
            localStorage.setItem("email", userInfo.email); // Save username in localStorage

        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("email");

        }
    }, [userInfo]);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}
