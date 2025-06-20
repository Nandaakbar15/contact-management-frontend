// import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import IndexContact from './pages/IndexContact'
import AddContactsPages from './pages/TambahContact'
import UpdateContactsPages from './pages/UpdateContact'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/indexcontact" replace/>}></Route>
        <Route path='/indexcontact' element={<IndexContact/>}></Route>
        <Route path='/tambahkontak' element={<AddContactsPages/>}></Route>
        <Route path='/ubahkontak/:id' element={<UpdateContactsPages/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
