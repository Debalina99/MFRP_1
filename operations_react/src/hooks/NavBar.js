import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar(){
    return (
        <header>
            <nav>
                <ul>
                    <li className='site'>&#128218; Library.com</li>
                    <li className='option'> <Link to="/">Add Books</Link></li>
                    <li className='option'> <Link to="/DisplayEmployeesBookissue">Display Issued Books</Link></li>
                    <li className='option'> <Link to="/IssueBookDetails">Issue Books</Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;