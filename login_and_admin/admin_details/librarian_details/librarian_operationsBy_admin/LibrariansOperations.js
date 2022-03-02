import React, {useEffect, useState} from "react";
import axios from 'axios';

import CreateLibrarianForm from "./CreateLibrarianForm";
import DisplayLibrarians from "./DisplayLibrarians";
import EditLibrarianForm from "./EditLibrarianForm";
import LibrariansOperationsService from './services/LibrariansOperationsService'

const forms = [CreateLibrarianForm, EditLibrarianForm]
export default function LibrariansOperationsUseStateUseEffect(props){ 
    let [LibrariansList, setLibrariansList] = useState([]);
    let [currentEditLib, setCurrentEditLib] = useState({});
    let [form, setForm] = useState('create');
    
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
    
    const addLibrarian = (Librarian)=> {
        LibrariansOperationsService.addLibrarian(Librarian)
            .then((res) => {
                console.log(res.data);
                LibrariansOperationsService.getLibrarians()
                .then((res) => {
                    console.log(res.data);
                    setLibrariansList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const deleteLibrarian = (id) => {
        LibrariansOperationsService.deleteLibrarian(id)
            .then((res) => {
                console.log(res.data);
                LibrariansOperationsService.getLibrarians()
                .then((res) => {
                    console.log(res.data);
                    setLibrariansList(res.data);
                })
            })
            .catch((err) => {
                console.log(err);
        })
    }
    const editLibrarian = (Lib) => {
        setCurrentEditLib(Lib);
        setForm('edit' );
    }
    const updateLibrarian = (Lib) => {
        LibrariansOperationsService.updateLibrarian(Lib)
            .then((res) => {
                console.log(res.data);
                LibrariansOperationsService.getLibrarians()
                .then((res) => {
                    console.log(res.data);
                    setLibrariansList(res.data);
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
                <CreateLibrarianForm addLibrarian={addLibrarian}></CreateLibrarianForm>
            }
            {form ==='edit' && 
                <EditLibrarianForm currentEditLib={currentEditLib}
                    updateLibrarian={updateLibrarian}></EditLibrarianForm>
            }
            <DisplayLibrarians LibrariansList={LibrariansList}
                form={form}
                deleteLibrarian={deleteLibrarian}
                editLibrarian={ editLibrarian}
            ></DisplayLibrarians>
        </div>
    )
    
}