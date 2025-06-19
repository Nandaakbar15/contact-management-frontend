import React from 'react'
import CardsContact from '../components/CardsContact'
import { Link } from 'react-router'

function IndexContact() {
  return (
    <>
        <div className="container mt-4">
            <div className="row mt-3">
                <h1>Daftar Kontak</h1>
                <h2><Link to={'/tambahkontak'} className='btn btn-primary'>Tambah kontak</Link></h2>
                <CardsContact/>
            </div>
        </div>
    </>
  )
}

export default IndexContact
