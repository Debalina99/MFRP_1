import React, {useEffect, useState} from "react";
// import axios from 'axios';
import './BookOperations.css';
import NavBar from "./NavBar";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEmployeeBookForm from "./CreateBookForm";
import DisplayEmployeesBook from "./DisplayBooks";
import EditEmployeeBookForm from "./EditBookForm";
import IssueEmployeeBookForm from "./IssueBookDetails";
import EmployeesOperationsService from './services/EmployeesBookOperationsService';
import DisplayEmployeesBookissue from './DisplayEmployeesBookissue'

// const forms = [CreateEmployeeBookForm, EditEmployeeBookForm]
export default function EmployeesOperationsExpressJS(props){ 
    let [employeesList, setEmployeesList] = useState([]);
    let [currentEditEmp, setCurrentEditEmp] = useState({});
    let [form, setForm] = useState('create');

    let [employeesfineList, setEmployeesfineList] = useState([]);


    
    useEffect(() => {
        EmployeesOperationsService.getEmployeesBook()
            .then((res) => {
                console.log(res.data);
                setEmployeesList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    
    const addEmployeeBook = (employee)=> {
        EmployeesOperationsService.getEmployeesBook()
                    .then((res) => {
                        console.log(res.data);
                        setEmployeesList(res.data);
                    })
    }


    //
    const addEmployeeBookissue = (employee)=> {
        EmployeesOperationsService.addEmployeeBookissue()
                    .then((res) => {
                        console.log(res.data);
                        setEmployeesfineList(res.data);
                    })
    }
    const deleteEmployeeBookissue = (id) => {
        EmployeesOperationsService.deleteEmployeeBook(id)
            .then((res) => {
                console.log(res.data);
                EmployeesOperationsService.getEmployeesBook()
                .then((res) => {
                    console.log(res.data);
                    setEmployeesList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const editEmployeeBookissue = (emp) => {
        setCurrentEditEmp(emp);
        setForm('edit' );
    }
    //


    const deleteEmployeeBook = (id) => {
        EmployeesOperationsService.deleteEmployeeBook(id)
            .then((res) => {
                console.log(res.data);
                EmployeesOperationsService.getEmployeesBook()
                .then((res) => {
                    console.log(res.data);
                    setEmployeesList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const editEmployeeBook = (emp) => {
        setCurrentEditEmp(emp);
        setForm('edit' );
    }
    const updateEmployeeBook  = (emp) => {
        EmployeesOperationsService.updateEmployeeBook(emp)
            .then((res) => {
                console.log(res.data);
                EmployeesOperationsService.getEmployeesBook()
                .then((res) => {
                    console.log(res.data);
                    setEmployeesList(res.data);
                    setForm('create' );
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    
//     
    
// 
const [isOpen, setIsOpen] = useState(false);
// const [isOpenbook, setIsOpenbook] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
//   const togglePopupissue = () => {
//     setIsOpenbook(!isOpenbook);
//   }

return(
    <div className="">
        
        <div className="container">
            <div>
                <BrowserRouter>
                    <NavBar></NavBar>
                    <Routes >
                        <Route path="/IssueBookDetails"  element={ <IssueEmployeeBookForm addEmployeeBook={addEmployeeBookissue}></IssueEmployeeBookForm> } ></Route>
                        <Route path="/DisplayEmployeesBookissue"  element={ <DisplayEmployeesBookissue employeesfineList={employeesfineList}></DisplayEmployeesBookissue>} ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
            <div className="text-center mx-3">
                <h3 className="header ">Book Details</h3>
            </div>

            <div>
                {/* <div>
                  
                    <button className="btn btn-warning m-3"   onClick={togglePopupissue}>Issue Books
                        
                            
                        </button>
                        {isOpenbook && form ==='create' && 
                            <IssueEmployeeBookForm 
                            // addEmployeeBook={addEmployeeBookissue}
                           
                                handleClose={togglePopupissue}> </IssueEmployeeBookForm>
                            }

                </div> */}

                



                <div className=" m-3">
                        <button className="btn btn-success m-3"   onClick={togglePopup}>Add Books
                        
                            
                        </button>
                        {isOpen && form ==='create' && 
                        <CreateEmployeeBookForm addEmployee={addEmployeeBook} handleClose={togglePopup}></CreateEmployeeBookForm>
                            
                            }
                </div>



            </div>
            {form ==='edit' && 
                <EditEmployeeBookForm currentEditEmp={currentEditEmp}
                    updateEmployee={updateEmployeeBook}></EditEmployeeBookForm>
            }
            <DisplayEmployeesBook employeesList={employeesList}
                 form={form}
                 deleteEmployee={deleteEmployeeBook}
                 editEmployee={editEmployeeBook}
             ></DisplayEmployeesBook>
        </div>

        

    </div>
)









}