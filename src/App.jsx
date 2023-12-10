import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';

import NavBar from '@components/Navbar'
import Stepbar from '@components/Stepbar'
import Mainpagebar from '@components/Mainpagebar'

import Mainpage from '@components/Mainpage'
import Trippreview from '@components/Trippreview'
import Todolistitem from '@components/Todolistitem'

import Todolist from '@components/Todolist'
import Gmapdirection from '@components/Gmapdirection'



function App() {
  return (
    <Router>
      <NavBar />
      <Trippreview/>
    </Router>
  )
}

export default App
