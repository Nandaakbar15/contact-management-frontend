import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";
import { BtnChange } from "../components/Button";
import Modal from "../components/Modal";

export default function UpdateContactsPages() {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [noHp, setNoHp] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllContactsById = async() => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/showcontact/${id}`);
                const {nama, alamat, no_hp} = response.data.data;

                setName(nama);
                setAlamat(alamat);
                setNoHp(no_hp);
            } catch(error) {
                console.error("Error : ", error);
            }
        }

        getAllContactsById()
    }, [id]);

    const updateContact = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/updatecontact/${id}`, {
                nama: name,
                alamat: alamat,
                no_hp: parseInt(noHp)
            });

            setMessage(response.data.message);
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                navigate('/indexcontact');
            }, 2000);
            
        } catch(error) {
            console.error("Error : ", error);
            console.error("Detail Error : ", error.response?.data);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <h1>Form ubah kontak</h1>
                    <form onSubmit={updateContact}>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="nama" name="nama" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamat" className="form-label">Alamat</label>
                        <input type="text" className="form-control" id="alamat" name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="no_hp" className="form-label">Nomor Hp</label>
                        <input type="number" className="form-control" id="no_hp" name="no_hp" value={noHp} onChange={(e) => setNoHp(e.target.value)}/>
                    </div>
                    <BtnChange/>
                    </form>
                </div>
                {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} message={message} />}
            </div>
        </>
    );
}