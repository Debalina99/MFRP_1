import React from "react"
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
    return (
        <header >
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) =>  (isActive ? 'active-menu': 'regular-menu')}>Profile</NavLink></li>
                    <li><NavLink to="/user" className={({ isActive }) => (isActive ? 'active-menu' : 'regular-menu')}>Users</NavLink></li>
                    <li><NavLink to="librarian" className={({isActive}) => (isActive ? 'active-menu': 'regular-menu')}>Librarians</NavLink></li>
                    {/* <li><NavLink to="/login" className={({isActive}) => (isActive ? 'active-menu': 'regular-menu')}>Login</NavLink></li> */}
                    {/* <li><NavLink to="/emps_operations_axios_use_state_use_effect/EmployeesOperations" className={({isActive}) => (isActive ? 'active-menu': 'regular-menu')}>employee</NavLink></li> */}
                    
                </ul>
            </nav>
        </header>
    )
}

