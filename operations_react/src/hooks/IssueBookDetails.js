import React, {useState} from "react";
import EmployeesOperationsService from "./services/EmployeesBookOperationsService";
import './DisplayBooks.css';


export default function IssueEmployeeBookForm(props) {

    let [student_name, setStudentName] = useState('');
    let [student_id, setStudentId] = useState('');
    let [book_id, setBookId] = useState('');
    let [book_name, setBookName] = useState('');
    let [year, setYear] = useState('');
    let [branch, setBranch] = useState('');
    let [date, setDate] = useState('');
    let [fine, setFine] = useState('');
    

    let [student_nameErr, setStudentNameErr] = useState('');
    let [student_idErr, setStudentIdErr] = useState('');
    let [book_idErr, setBookIdErr] = useState('');
    let [book_nameErr, setBookNameErr] = useState('');
    let [yearErr, setYearErr] = useState('');
    let [branchErr, setBranchErr] = useState('');
    let [dateErr, setDateErr] = useState('');
    let [fineErr, setFineErr] = useState('');

    

    const createBook = (e) => {
        e.preventDefault();
     
        let employee = {
            student_name,
            student_id,
            book_id,
            book_name,
            year,
            branch,
            date,
            fine
        }
        
        setStudentNameErr('');
        setStudentIdErr('');
        setBookIdErr('');
        setBookNameErr('');
        setYearErr('');
        setBranchErr('');
        setDateErr('');
        setFineErr('');
        
        console.log(employee);

        EmployeesOperationsService.addEmployeeBookissue(employee)
            .then((res) => {
                console.log(res.data);
                let emp = res.data;
                props.addEmployeeBookissue(emp);
                setStudentName('');
                setStudentId('');
                setBookId('');
                setBookName('');
                setYear('');
                setBranch('');
                setDate('');
                setFine('');
               
            })
            .catch((err) => {
                console.log(err);
                console.log("err.response: ", err.response);
                // console.log("err.response.ok: ", err.response.ok);
                console.log("err.response.data: ", err.response.data);
                let errMesgss = err.response.data;
                errMesgss = errMesgss.substring(errMesgss.indexOf(":") + 1);
                errMesgss = errMesgss.trim();
                errMesgss = errMesgss.split(",");
                console.log(errMesgss);

                errMesgss.forEach(errMsg => {
                    console.log(errMsg);
                    if (errMsg.includes("student_name")) {
                        setStudentNameErr(errMsg.split(":")[1].trim())
                    }
                    if (errMsg.includes("student_id")) {
                        setStudentIdErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("book_id")) {
                        setBookIdErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("book_name")) {
                        setBookNameErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("year")) {
                        setYearErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("branch")) {
                        setBranchErr(errMsg.split(":")[1].trim())
                    }
                    if (errMsg.includes("date")) {
                        setDateErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("fine")) {
                        setFineErr(errMsg.split(":")[1].trim())
                    }
                    
                    
                    
                })
               
            })
    }
    return (
        <div className="container">
               
            <div className="col-md-10 text-start">
                <h3 className="text-center">Issue Book Details</h3>
                <form onSubmit={createBook}> 
                    <div>
                        <label>Student Name:</label>
                        <input type="" name="student_name"
                            value={student_name}
                            className="form-control"
                            onChange={(e)=>setStudentName(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{student_nameErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Student Id:</label>
                        <input type="" name="student_id"
                            value={student_id}
                            className="form-control"
                            onChange={(e)=>setStudentId(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{student_idErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Book Id:</label>
                        <input type="" name="book_id"
                            value={book_id}
                            className="form-control"
                            onChange={(e)=>setBookId(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{book_idErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Book Name:</label>
                        <input type="" name="book_name"
                            value={book_name}
                            className="form-control"
                            onChange={(e)=>setBookName(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{book_nameErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Year:</label>
                        <input type="" name="year"
                            value={year}
                            className="form-control"
                            onChange={(e)=>setYear(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{yearErr}</p>
                        </div>
                    </div>
                    
                    <div>
                        <label>Branch:</label>
                        <input type="" name="branch"
                            value={branch}
                            className="form-control"
                            onChange={(e)=>setBranch(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{branchErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="" name="date"
                            value={date }
                            className="form-control"
                            onChange={(e)=>setDate(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{dateErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Fine:</label>
                        <input type="" name="fine"
                            value={ fine}
                            className="form-control"
                            onChange={(e)=>setFine(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{fineErr}</p>
                        </div>
                    </div>
                    
                    <div className="my-3">
                        <button className="btn btn-primary mx-4">Issue Book Details</button>
                    </div><br></br>

                </form>

                

            </div>
        </div>
        // </div>
        // </div>
    )
}