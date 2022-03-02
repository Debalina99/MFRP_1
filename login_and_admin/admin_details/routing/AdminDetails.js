import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import ButtonNavBar from "./ButtonNavBar"
// import ClassButtonNavBar from "./ClassButtonNavBar"
import User from "./User"
import Librarian from "./Librarian"
import NavBar from "./NavBar"
import Profile from "./Profile"
// import Login from "./Login"
// import EmployeesOperations from './emps_operations_axios_use_state_use_effect/EmployeesOperations'



export default function AdminDetails(props) {
    return (
        <div>
            <BrowserRouter >
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Profile/>}></Route>
                    <Route path="/user" element={<User/>}></Route >
                    <Route path="/librarian" element={<Librarian/>}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route > */}
                    </Routes>
            </BrowserRouter>
        </div>
    )
}