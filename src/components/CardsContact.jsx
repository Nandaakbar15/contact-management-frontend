import React, { useEffect, useState } from "react";
import axios from 'axios'
// import Modal from "./Modal";

export default function CardsContact() {
    const [contacts, setContacts] = useState([]);

    const getAllContacts = async() => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/getallcontacts");
            // console.log(response);
            setContacts(Object.values(response.data.data))
        } catch(error) {
            console.error("Error : ", error);
        }
    }

    useEffect(() => {
        getAllContacts();
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {contacts.map((contact) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100 shadow-sm" key={contact.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{contact.nama}</h5>
                                    <p className="card-text">Alamat: {contact.alamat}</p>
                                    <p className="card-text">Nomor Hp: {contact.no_hp}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
            
        </>
    )
}