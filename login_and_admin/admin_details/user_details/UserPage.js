import React,{useState,useEffect} from "react"
import UsersOperations from './user_operationsBy_admin/UsersOperations'
import './UserPage.css'
import Displaydata from './Displaydata'
import UsersOperationsService from './user_operationsBy_admin/services/UsersOperationsService'

export default function UserPage(params) {
    let [toggleflag, setToggleFlag]= useState(true)
    let [UsersList, setUsersList] = useState([]);

    useEffect(() => {
        UsersOperationsService.getUsers()
            .then((res) => {
                console.log(res.data);
                setUsersList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const myStyle = {
        backgroundImage:
          "url('https://ak1.picdn.net/shutterstock/videos/20376331/thumb/1.jpg')",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    return(
        <div style={myStyle} className="text-light">
            
            <div>
            {toggleflag&&

                <button className="btn btn-info " onClick={()=>setToggleFlag(!toggleflag)}>                    
                    Update User Data
                    </button>}
                    {!toggleflag &&
                    <button className="btn btn-danger " onClick={()=>setToggleFlag(!toggleflag)}>
                    X
                </button>}
               
                {toggleflag &&
                <div className="container">
                    <br/>
                    <br/>
                    
                <h1>User Details</h1>
                <br/>
                    <Displaydata UsersList={UsersList}></Displaydata>
                </div>}
            
            <div>
            {/* <img  src={require("./Assets/books.jpeg")} alt="First slide" className="d-block w-100"/> */}
            {!toggleflag &&
                <div><UsersOperations></UsersOperations></div>}
            </div>
            </div>
            
        </div>
    )
    
}

