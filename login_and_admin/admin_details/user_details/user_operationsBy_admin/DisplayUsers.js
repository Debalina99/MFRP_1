import React from "react";
import './DisplayUsers.css'
import {createRef}       from 'react'
class DisplayUsers extends React.Component{
    constructor() {
        super();
        this.tableRef = createRef();
    }
    editUser(e, User) {
        console.log(e.target);
        console.log(this.tableRef);
        // let trs = document.getElementsByClassName("current-record");
        let trs = this.tableRef.current.getElementsByClassName("current-record");
        // console.log("trs", trs);
        trs = [...trs];
        trs.forEach(element => {
            element.classList.remove("current-record")
        });
        console.log(e.target);
        // let el = e.target;
        let rowEl = e.currentTarget.parentNode.parentNode;
        rowEl.classList.add("current-record")
        // console.log(e.currentTarget.parentNode.parentNode);
        this.props.editUser(User);
    }
    componentDidUpdate() {
        if (this.props.form === 'create') {
            let trs = document.getElementsByClassName("current-record");
            trs = [...trs];
            trs.forEach(element => {
                element.classList.remove("current-record")
            });
        }
    }
    render() {
        return (
            <div>
                <table ref={this.tableRef} className=" table text-light">
                    <thead>
                        <tr >
                            <th>User Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Mobile No.</th>
                            <th>Department</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.UsersList.map((User, ind) => {
                                return <tr key={ind}>
                                    <td>{User.id}</td>
                                    <td>{User.user_name}</td>
                                    <td>{User.email}</td>
                                    <td>{User.mobile}</td>
                                    <td>{User.dept}</td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={(e)=> this.editUser(e, User)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={()=>this.props.deleteUser(User.id)}
                                    >Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayUsers;