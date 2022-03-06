import React, { useEffect, useState} from "react";

function EditEmployeeBookForm(props) {
    let [id, setId] = useState('');
    let [book_id, setBookId] = useState('');
    let [book_name, setBookName] = useState('');
    let [year, setYear] = useState('');
    let [branch, setBranch] = useState('');
    let [author, setAuthor] = useState('');
    let [edition, setEdition] = useState('');
    let [availability, setAvailability] = useState('');

    useEffect(() => {
        console.log(props);
        let emp = props.currentEditEmp;
        setId(emp.id);
        setBookId(emp.book_id);
        setBookName(emp.book_name);
        setYear(emp.year);
        setBranch(emp.branch);
        setAuthor(emp.author);
        setEdition(emp.edition);
        setAvailability(emp.availability);


        
     }, [props]);
    
    const updateEmployee = (e) => {
        console.log("from updateEmployee of EditEmployeeBookForm");
        e.preventDefault();
        let employee = {id, book_id, book_name, year, branch, author, edition, availability}
        props.updateEmployee(employee);
        setId("");
        setBookId("");
        setBookName('');
        setYear('');
        setBranch('');
        setAuthor('');
        setEdition('');
        setAvailability('');
        
    }
    console.log("from render of EditEmployeeBookForm");
    console.log("props: ", props);
    return (
        <div className="container">
            <div className="col-md-6 ">
                <h3>Edit Book Details Form</h3>
                <form onSubmit={updateEmployee}>
                    <div className="row mt-5">
                        <label>Serial No:</label>
                        
                            <input type="" name="id" 
                                value={ id}
                                className="form-control"
                                // onChange={this.changeHandler}
                                readOnly
                            ></input>
                        
                    </div>
                    <div className="row mt-3">
                        <label>Book Id:</label>
                       
                            <input type="" name="book_id"
                                value={ book_id}
                                className="form-control"
                                onChange={(e)=>setBookId(e.target.value)}
                            ></input>
                        
                    </div>
                    <div className="row mt-3">
                        <label>Book Name:</label>
                        <input type="" name="book_name"
                            value={ book_name}
                            className="form-control"
                            onChange={(e)=>setBookName(e.target.value)}
                        ></input>
                    </div>
                    <div className="row mt-3">
                        <label>Year:</label>
                        <input type="" name="year"
                            value={year }
                            className="form-control"
                            onChange={(e)=>setYear(e.target.value)}
                        ></input>
                    </div>
                    <div className="row mt-3">
                        <label>Branch:</label>
                        <input type="" name="branch"
                            value={branch }
                            className="form-control"
                            onChange={(e)=>setBranch(e.target.value)}
                        ></input>
                    </div>
                    <div className="row mt-3">
                        <label>Author:</label>
                        <input type="" name="author"
                            value={ author}
                            className="form-control"
                            onChange={(e)=>setAuthor(e.target.value)}
                        ></input>
                    </div>
                    <div className="row mt-3">
                        <label>Edition:</label>
                        <input type="" name="edition"
                            value={ edition}
                            className="form-control"
                            onChange={(e)=>setEdition(e.target.value)}
                        ></input>
                    </div>
                    <div className="row mt-3">
                        <label>Availability:</label>
                        <input type="" name="availability"
                            value={ availability}
                            className="form-control"
                            onChange={(e)=>setAvailability(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary my-5 ">Update Details</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default EditEmployeeBookForm;


