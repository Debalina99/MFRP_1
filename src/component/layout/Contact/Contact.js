import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2 className="text-decoration-none">For additional Queries :</h2>
      
      <a className="mailBtn" href="#">
      
        
        <Button>Contact: University@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
