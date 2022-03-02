import React, {useState,useEffect} from "react";
// import './DisplayUsers.css'
// import {createRef}       from 'react'
function DisplayUsers(props){
    const [UsersList, settableData] = useState(props.UsersList);
    const [ascending, setascending] = useState(true);

    useEffect(() => {
        settableData(props.UsersList)
    }, [props.tableList]);
    
    function sortByname(){
        let data = [...UsersList];
        if(ascending){
            data.sort((a, b) => {
                let fa = a.Users.id
                let fb = b.Users.id
                return(fa <= fb ? 1 : -1)
            });
            settableData(data);
            setascending(!ascending);
        }
        else{
            data.sort((a, b) => {
                let fa = a.Users.id
                let fb = b.Users
                return(fa < fb ? -1 : 1)
            });
            settableData(data);
            setascending(!ascending);
        }
    }

    
        return (
            <div>
                <table  className=" table text-light">
                    <thead>
                        <tr>
                            <th onClick={() => sortByname(UsersList)}>User Id <span>{ascending ? <i className="fas fa-arrow-up"></i>: <i className="fas fa-arrow-down"></i>}</span></th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Mobile No.</th>
                            <th>Department</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.UsersList.map((User, ind) => {
                                return <tr key={ind}>
                                    <td>{User.id}</td>
                                    <td>{User.user_name}</td>
                                    <td>{User.email}</td>
                                    <td>{User.mobile}</td>
                                    <td>{User.dept}</td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default DisplayUsers;