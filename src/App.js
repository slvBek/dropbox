import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dropbox from './components/Dropbox'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import NonEmptyFolder from './components/folder/NonEmptyFolder'
import Landing from './components/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dropbox' element={<Dropbox/>} />
        <Route path='/folder/:id' element={<NonEmptyFolder/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
