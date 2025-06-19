// import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import IndexContact from './pages/IndexContact'
import AddContactsPages from './pages/TambahContact'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/indexcontact" replace/>}></Route>
        <Route path='/indexcontact' element={<IndexContact/>}></Route>
        <Route path='/tambahkontak' element={<AddContactsPages/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
