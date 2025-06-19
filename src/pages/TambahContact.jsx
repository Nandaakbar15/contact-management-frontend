import React, { useState } from "react";

import axios from "axios";

import Modal from "../components/Modal";
import { useNavigate } from "react-router";
import { BtnAdd } from "../components/Button";

export default function AddContactsPages() {
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [noHp, setNoHp] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


    const addNewContact = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/addnewcontact", {
                nama: nama,
                alamat: alamat,
                no_hp: parseInt(noHp)
            }, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });

            setMessage(response.data.message);
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                navigate("/indexcontact");
            }, 2000);

            // clear the form
            setNama("");
            setAlamat("");
            setNoHp("");

        } catch(error) {
            console.error("Error : ", error);
            console.error("Detail Error : ", error.response?.data);
            setMessage("Error! Gagal menambahkan kontak");
            setShowModal(true);
        }
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h1>Tambah kontak</h1>
                    <form onSubmit={addNewContact}>
                        <div className="mb-3">
                            <label htmlFor="nama" className="form-label">Nama Kontak</label>
                            <input type="text" className="form-control" id="nama" name="nama" onChange={(e) => setNama(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="alamat" className="form-label">Alamat</label>
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={(e) => setAlamat(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="no_hp" className="form-label">Nomor Hp</label>
                            <input type="number" className="form-control" id="no_hp" name="no_hp" onChange={(e) => setNoHp(e.target.value)}/>
                        </div>
                        <BtnAdd/>
                    </form>
                </div>
                {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} message={message} />}
            </div>
        </>
    );
}