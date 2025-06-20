import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router";
import { BtnDelete } from "./Button";
import Modal from "./Modal";

export default function CardsContact() {
    const [contacts, setContacts] = useState([]);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

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

    const deleteContact = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/deletecontact/${id}`);
            
            setMessage(response.data.message);
            setShowModal(true);

            // refresh the data
            getAllContacts();

            setTimeout(() => {
                setShowModal(false);
            }, 2000);
        } catch(error) {
            console.error("Error : ", error);
        }
    }

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
                                    <div className="d-flex gap-2 mt-2">
                                        <Link className="btn btn-primary" to={`/ubahkontak/${contact.id}`}>Ubah Kontak</Link>
                                        <BtnDelete onClick={() => deleteContact(contact.id)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} message={message} />}  
            </div>
        </>
    )
}