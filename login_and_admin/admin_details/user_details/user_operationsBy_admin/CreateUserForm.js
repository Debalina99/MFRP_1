import React, {useState} from "react";

export default function CreateUserForm(props) {
    let [id, setUserId] = useState();
    let [user_name, setUserName] = useState();
    let [email, setEmail] = useState();
    let [mobile, setmobile] = useState();
    let [dept, setDept] = useState();
    
    const createUser = (e) => {
        e.preventDefault();
        
        let User = {
            id,
            user_name,
            email,
            mobile,
            dept
        }
        props.addUser(User);
        setUserId('')        
        setUserName('');
        setEmail('');
        setmobile('')
        setDept('');        
    }

    return (
        <div>            
            <div className="col-md-6 text-start">
                <h3>Create New User</h3>
                <form onSubmit={createUser}> 
                <div>
                        <label>User ID:</label>
                        <input type="" name="User_ID"
                            value={ id}
                            className="form-control"
                            onChange={(e)=>setUserId(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>User Name:</label>
                        <input type="" name="User_name"
                            value={ user_name}
                            className="form-control"
                            onChange={(e)=>setUserName(e.target.value)}
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
                        <label>Mobile No.:</label>
                        <input type="" name="mobile"
                            value={mobile }
                            className="form-control"
                            onChange={(e)=>setmobile(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Department:</label>
                        <input type="" name="dept"
                            value={ dept}
                            className="form-control"
                            onChange={(e)=>setDept(e.target.value)}
                        ></input>
                    </div>
                    <div className="my-3">
                        <button className="btn btn-primary">Create User</button>
                    </div>

                </form>

            </div>
        </div>
    )
}