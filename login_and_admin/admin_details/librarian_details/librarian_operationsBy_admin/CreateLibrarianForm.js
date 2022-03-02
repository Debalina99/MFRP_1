import React, {useState} from "react";

import './CreateLibrarianForm.css'

export default function CreateLibrarianForm(props) {
    let [id,setLibId] =useState()
    let [Lib_name, setLibName] = useState();
    let [email, setEmail] = useState();
    let [mobile, setmobile] = useState();
    let [shift, setshift] = useState();
    
    const createLibrarian = (e) => {
        e.preventDefault();
        
        let Librarian = {
            id,
            Lib_name,
            email,
            mobile,
            shift
        }
        props.addLibrarian(Librarian);
        setLibId('')        
        setLibName('');
        setEmail('');
        setmobile('')
        setshift('');
        
    }

    return (
        <div>
            
            <div className="col-md-6 text-start">
                <h3>Create New Librarian</h3>
                <form onSubmit={createLibrarian}>
                <div>
                        <label>Librarian ID:</label>
                        <input type="" name="Lib_name"
                            value={ id}
                            className="form-control border-1 border-primary"
                            onChange={(e)=>setLibId(e.target.value)}
                        ></input>
                    </div> 
                    <div>
                        <label>Librarian Name:</label>
                        <input type="" name="Lib_name"
                            value={ Lib_name}
                            className="form-control border-1 border-primary"
                            onChange={(e)=>setLibName(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="" name="email"
                            value={email }
                            className="form-control border-1 border-primary"
                            onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Mobile No.:</label>
                        <input type="" name="mobile"
                            value={mobile }
                            className="form-control border-1 border-primary"
                            onChange={(e)=>setmobile(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>shift:</label>
                        <input type="" name="shift"
                            value={ shift}
                            className="form-control border-1 border-primary"
                            onChange={(e)=>setshift(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary">Create Librarian</button>
                    </div>
                    <br></br>

                </form>

            </div>
        </div>
    )
}