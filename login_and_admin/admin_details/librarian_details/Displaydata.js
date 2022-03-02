import React from "react";
// import './DisplayLibrarians.css'
import {createRef}       from 'react'
class Displaydata extends React.Component{
    constructor() {
        super();
        this.tableRef = createRef();    }
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
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Displaydata;