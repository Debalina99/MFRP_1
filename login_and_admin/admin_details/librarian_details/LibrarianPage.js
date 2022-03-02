import React,{useState, useEffect} from "react"
import LibrariansOperations from './librarian_operationsBy_admin/LibrariansOperations'
// import DisplayLibrarians from "./librarian_operationsBy_admin/DisplayLibrarians"
import LibrariansOperationsService from './services/LibrariansOperationsService'
import Displaydata from "./Displaydata"
// import Ict2 from "./ict2/Ict2"

import './LibrarianPage.css'

export default function LibrarianPage(params) {
    let [toggleflag, setToggleFlag]= useState(true);
    let [LibrariansList, setLibrariansList] = useState([]);

    useEffect(() => {
        LibrariansOperationsService.getLibrarians()
            .then((res) => {
                console.log(res.data);
                setLibrariansList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const myStyle = {
        backgroundImage:
          "url('https://ak5.picdn.net/shutterstock/videos/20344795/thumb/1.jpg')",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    return(
        <div style={myStyle} className="text-light">
            
            <div>
                <button className="btn btn-primary col-md-2" onClick={()=>setToggleFlag(!toggleflag)}>
                    {toggleflag&&
                    "Update Librarian Data"}
                    {!toggleflag &&
                    "close"}
            </button> 

            {/* <div>
            {toggleflag &&
                <div><Ict2></Ict2></div>}                
            </div>    */}

           <div>
                {toggleflag &&
                <div className="container">
                    <br/>
                    <br/>
                    
                <h1>Librarians Details</h1>
                <br/>
                <Displaydata LibrariansList={LibrariansList}></Displaydata></div>}
                </div>
            <div>          
            {!toggleflag &&
                <div><LibrariansOperations></LibrariansOperations></div>}
            </div>
            
            </div>
            <br/>
            
            
            
        </div>
    )
    
}

