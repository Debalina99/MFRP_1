import React, {useEffect, useState} from "react";
import axios from 'axios';

import CreateUserForm from "./CreateUserForm";
import DisplayUsers from "./DisplayUsers";
import EditUserForm from "./EditUserForm";
import UsersOperationsService from './services/UsersOperationsService'

const forms = [CreateUserForm, EditUserForm]
export default function UsersOperationsUseStateUseEffect(props){ 
    let [UsersList, setUsersList] = useState([]);
    let [currentEditUser, setCurrentEditUser] = useState({});
    let [form, setForm] = useState('create');
    
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
    
    const addUser = (User)=> {
        UsersOperationsService.addUser(User)
            .then((res) => {
                console.log(res.data);
                UsersOperationsService.getUsers()
                .then((res) => {
                    console.log(res.data);
                    setUsersList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const deleteUser = (id) => {
        UsersOperationsService.deleteUser(id)
            .then((res) => {
                console.log(res.data);
                UsersOperationsService.getUsers()
                .then((res) => {
                    console.log(res.data);
                    setUsersList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const editUser = (User) => {
        setCurrentEditUser(User);
        setForm('edit' );
    }
    const updateUser = (User) => {
        UsersOperationsService.updateUser(User)
            .then((res) => {
                console.log(res.data);
                UsersOperationsService.getUsers()
                .then((res) => {
                    console.log(res.data);
                    setUsersList(res.data);
                    setForm('create' );
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
     
    return (
        <div className="container">
            
            {form ==='create' && 
                <CreateUserForm addUser={addUser}></CreateUserForm>
            }
            {form ==='edit' && 
                <EditUserForm currentEditUser={currentEditUser}
                    updateUser={updateUser}></EditUserForm>
            }
            <DisplayUsers UsersList={UsersList}
                form={form}
                deleteUser={deleteUser}
                editUser={ editUser}
            ></DisplayUsers>
        </div>
    )
    
}