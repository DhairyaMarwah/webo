import React,{useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";
import About from "./Pages/About";
 import Landing from "./Pages/Landing";
import WebBuilder from "./Pages/WebBuilder";
export default function Navigation() { 

    // useEffect(()=>{
    //     console.log(authStatus,userData);
    //     if(!authStatus){
    //         const user = TokenService.getUser();
    //         if(user){
    //           dispatch(userDetails(user))
    //           dispatch(userAuthStatus(true));

    //           if(window.location.pathname==="/login"){

    //             navigate('/')
    //           }
    //         }
    //         else{
    //             dispatch(userDetails({}))
    //             // dispatch(userAuthStatus(false));
    //             // navigate('/login')
    //         }
    //     }
    // },[authStatus])

    return( 
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/app" element={<WebBuilder />} />
                <Route path="/about" element={<About />} />
            </Routes>
    )
}