import React from "react";
import './DisplayBooks.css'
import {createRef}  from 'react'
class DisplayEmployeesBookissue extends React.Component{
    constructor() {
        super();
        this.tableRef = createRef();
    }
    editEmployee(e, emp) {
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
        this.props.editEmployee(emp);
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
     myFunction=()=> {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }
    render() {
        return (
            <div className="mt-5">
                <div>
                <input type="text" id="myInput" onKeyUp={()=>this.myFunction()} className="rounded col-md-5"
                        placeholder="Search for students ids.." title="Type in a name">
                        </input>
                </div>
                <div className="avbooks">Issued Books</div>

                <table className="table" id="myTable" ref={this.tableRef}>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Student Name</th>
                            <th>Student Id</th>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Year</th>
                            <th>Branch</th>
                            <th>Date</th>
                            <th>Fine</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employeesfineList.map((emp, ind) => {
                                return <tr key={ind}>
                                    <td>{emp.id}</td>
                                    <td>{emp.student_name}</td>
                                    <td>{emp.student_id}</td>
                                    <td>{emp.book_id}</td>
                                    <td>{emp.book_name}</td>
                                    <td>{emp.year}</td>
                                    <td>{emp.branch}</td>
                                    <td>{emp.date}</td>
                                    <th>{emp.fine}</th>
                                    
                                    <td>
                                        <button className="btn btn-primary"
                                            onClick={(e)=> this.editEmployee(e, emp)}
                                        >Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={()=>this.props.deleteEmployee(emp.id)}
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

export default DisplayEmployeesBookissue;