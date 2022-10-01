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
        <Route exact path="/" component={Landing} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dropbox' component={Dropbox} />
        <Route path='/folder/:id' component={NonEmptyFolder} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
