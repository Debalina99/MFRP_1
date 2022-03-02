import React, { useEffect, useState} from "react";

function EditLibrarianForm(props) {
    let [id, setId] = useState('');
    let [Lib_name, setLibName] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setmobile] = useState('');
    let [shift, setshift] = useState('');

    useEffect(() => {
        console.log(props);
        let Lib = props.currentEditLib;
        setId(Lib.id);
        setLibName(Lib.Lib_name);
        setEmail(Lib.email);
        setmobile(Lib.mobile);
        setshift(Lib.shift);
        
     }, [props]);
    
    const updateLibrarian = (e) => {
        console.log("from updateLibrarian of EditLibrarianForm");
        e.preventDefault();
        let Librarian = {id, Lib_name, email, mobile, shift}
        props.updateLibrarian(Librarian);
        setId("");
        setLibName('');
        setEmail('');
        setmobile('');
        setshift('');
        
    }
    console.log("from render of EditLibrarianForm");
    console.log("props: ", props);
    return (
        <div>
            <div className="col-md-6 text-start">
                <h3>Edit Librarian Form</h3>
                <form onSubmit={updateLibrarian}>
                    <div>
                        <label>Librarian ID:</label>
                        <input type="" name="id"
                            value={ id}
                            className="form-control"
                            // onChange={this.changeHandler}
                            readOnly
                        ></input>
                    </div>
                    <div>
                        <label>Librarian Name:</label>
                        <input type="" name="Lib_name"
                            value={ Lib_name}
                            className="form-control"
                            onChange={(e)=>setLibName(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="" name="email"
                            value={email }
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Mobile No</label>
                        <input type="" name="mobile"
                            value={mobile }
                            className="form-control"
                            onChange={(e)=>setmobile(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>shift:</label>
                        <input type="" name="shift"
                            value={ shift}
                            className="form-control"
                            onChange={(e)=>setshift(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary">Update Librarian</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default EditLibrarianForm;