import React from "react"
export default function Login() {
    return (
        <div>
            <img  src={require("https://media.istockphoto.com/photos/book-stack-is-placed-on-the-library-desk-education-background-back-to-picture-id974627908?k=6&m=974627908&s=170667a&w=0&h=LCt8NyFaCkQhZjzdhOlftA7S_GIEK_BTP07ZyGP1nAM=")} alt="First slide" className="d-block w-100"/>
            <div className="carousel-caption mb-5 text-start">   
            <form action="./Login">            
                <div className="col-md-5 offset-md-2  ">

                    <div className="border-4 border-primary card p-5 mt-5 rounded-0"> 
                        <h2 className="text-primary text-center">ADMIN</h2>
                        <div className="text-start ">
                            <label className="text-primary">User ID:</label>                
                            <input type="text" className="form-control border-2 border-primary"></input>
                        </div>
                        <br/>
                        <div className="text-start ">
                            <label className="text-primary">Password:</label>
                            <input type="password" className="form-control border-2 border-primary"></input>
                        </div>
                            <br/>
                        <div className="row"> 
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>        
        </div>
    )

}