import React from "react"
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { useNavigate } from 'react-router-dom'

export default function ButtonNavBar() {
    let navigate = useNavigate();
    return (
        
        <header>
            <nav>
                <ul>
                    <li><button onClick={()=>navigate("/")}>profile</button></li>
                    <li><button onClick={()=>navigate("/user")}>User</button></li>
                    <li><button onClick={()=>navigate("/librarian")}>Librarian</button></li>
                    {/* <li><button onClick={()=>navigate("/login")}>Login</button></li> */}
                    </ul>
            </nav>
        </header>
    )
}
