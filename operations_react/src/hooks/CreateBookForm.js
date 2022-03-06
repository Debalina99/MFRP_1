import React, {useState} from "react";
import EmployeesOperationsService from "./services/EmployeesBookOperationsService";
import './DisplayBooks.css';


export default function CreateEmployeeBookForm(props) {

    
    let [book_id, setBookId] = useState('');
    let [book_name, setBookName] = useState('');
    let [year, setYear] = useState('');
    let [branch, setBranch] = useState('');
    let [author, setAuthor] = useState('');
    let [edition, setEdition] = useState('');
    let [availability, setAvailability] = useState('');


    let [book_idErr, setBookIdErr] = useState('');
    let [book_nameErr, setBookNameErr] = useState('');
    let [yearErr, setYearErr] = useState('');
    let [branchErr, setBranchErr] = useState('');
    let [authorErr, setAuthorErr] = useState('');
    let [editionErr, setEditionErr] = useState('');
    let [availabilityErr, setAvailabilityErr] = useState('');

    

    const createBook = (e) => {
        e.preventDefault();
     
        let employee = {
            book_id,
            book_name,
            year,
            branch,
            author,
            edition,
            availability
        }
        
        setBookIdErr('');
        setBookNameErr('');
        setYearErr('');
        setBranchErr('');
        setAuthorErr('');
        setEditionErr('');
        setAvailabilityErr('');
        console.log(employee);

        EmployeesOperationsService.addEmployeeBook(employee)
            .then((res) => {
                console.log(res.data);
                let emp = res.data;
                props.addEmployeeBook(emp);
                
                setBookId('');
                setBookName('');
                setYear('');
                setBranch('');
                setAuthor('');
                setEdition('');
                setAvailability('');
            })
            .catch((err) => {
                console.log(err);
                console.log("err.response: ", err.response);
                console.log("err.response.ok: ", err.response.ok);
                console.log("err.response.data: ", err.response.data);
                let errMesgs = err.response.data;
                errMesgs = errMesgs.substring(errMesgs.indexOf(":") + 1);
                errMesgs = errMesgs.trim();
                errMesgs = errMesgs.split(",");
                console.log(errMesgs);

                errMesgs.forEach(errMsg => {
                    console.log(errMsg);
                    
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
                    if (errMsg.includes("author")) {
                        setAuthorErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("edition")) {
                        setEditionErr(errMsg.split(":")[1].trim())
                    }
                    
                    if (errMsg.includes("availability")) {
                        setAvailabilityErr(errMsg.split(":")[1].trim())
                    }
                    
                })
               
            })
    }
    return (
        <div className="container">
                <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={props.handleClose}>X</span>
                        {props.addEmployeeBook}
                    
            <div className="col-md-10 text-start">
                <h3 className="text-center">Add Book Details</h3>
                <form onSubmit={createBook}> 
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
                            value={branch }
                            className="form-control"
                            onChange={(e)=>setBranch(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{branchErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Author:</label>
                        <input type="" name="author"
                            value={author }
                            className="form-control"
                            onChange={(e)=>setAuthor(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{authorErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Edition:</label>
                        <input type="" name="edition"
                            value={ edition}
                            className="form-control"
                            onChange={(e)=>setEdition(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{editionErr}</p>
                        </div>
                    </div>
                    <div>
                        <label>Availability:</label>
                        <input type="" name="availability"
                            value={ availability}
                            className="form-control"
                            onChange={(e)=>setAvailability(e.target.value)}
                        ></input>
                        <div>
                            <p className="text-danger">{availabilityErr}</p>
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary mx-4">Add Book Details</button>
                    </div>

                </form>

            </div>
        </div>
        </div>
        </div>
    )
}