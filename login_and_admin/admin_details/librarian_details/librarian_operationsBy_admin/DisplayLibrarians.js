import React from "react";
import './DisplayLibrarians.css'
import {createRef}       from 'react'
class DisplayLibrarians extends React.Component{
    constructor() {
        super();
        this.tableRef = createRef();
    }
    editLibrarian(e, Lib) {
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
        this.props.editLibrarian(Lib);
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
            <div >
                <table className="table text-light " ref={this.tableRef}>
                    <thead>
                        <tr>
                            <th>LibrarianId</th>
                            <th>LibrarianName</th>
                            <th>Email</th>
                            <th>Mobile No.:</th>
                            <th>shift</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.LibrariansList.map((Lib, ind) => {
                                return <tr key={ind}>
                                    <td>{Lib.id}</td>
                                    <td>{Lib.Lib_name}</td>
                                    <td>{Lib.email}</td>
                                    <td>{Lib.mobile}</td>
                                    <td>{Lib.shift}</td>
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={(e)=> this.editLibrarian(e, Lib)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={()=>this.props.deleteLibrarian(Lib.id)}
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

export default DisplayLibrarians;