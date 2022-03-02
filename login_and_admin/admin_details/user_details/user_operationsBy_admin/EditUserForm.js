import React, { useEffect, useState} from "react";

function EditUserForm(props) {
    let [id, setId] = useState('');
    let [user_name, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setmobile] = useState('');
    let [dept, setDept] = useState('');

    useEffect(() => {
        console.log(props);
        let User = props.currentEditUser;
        setId(User.id);
        setUserName(User.user_name);
        setEmail(User.email);
        setmobile(User.mobile);
        setDept(User.dept);
        
     }, [props]);
    
    const updateUser = (e) => {
        console.log("from updateUser of EditUserForm");
        e.preventDefault();
        let User = {id, user_name, email, mobile, dept}
        props.updateUser(User);
        setId("");
        setUserName('');
        setEmail('');
        setmobile('');
        setDept('');
        
    }
    console.log("from render of EditUserForm");
    console.log("props: ", props);
    return (
        <div>
            <div className="col-md-6 text-start">
                <h3>Edit User Form</h3>
                <form onSubmit={updateUser}>
                    <div>
                        <label>User ID:</label>
                        <input type="" name="id"
                            value={ id}
                            className="form-control"
                            // onChange={this.changeHandler}
                            readOnly
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
                        <label>Mobile No:</label>
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
                        <button className="btn btn-primary">Update User</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default EditUserForm;