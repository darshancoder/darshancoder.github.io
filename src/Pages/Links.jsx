
import React from 'react'
import {Container} from "@chakra-ui/react"
import {Route,Routes,Link} from "react-router-dom"
import { Grid,GridItem,} from "@chakra-ui/react"
import Skills from './Skills'
import AboutME from './AboutME'
import Navbar from './Menu_Navbar'


export const Links = () => {
  return (
    <>
   

        <Container>
        <Routes>
            <Route path='/' element={<Navbar/>}></Route>
            <Route path='/about' element={<AboutME/>}/>
            <Route path='/project'></Route>
            <Route path='/skill' element={<Skills/>}/>
            <Route path='/education'></Route>
            <Route path='/contact'></Route>
          
        </Routes>
    </Container>
    </>
  )
}

export default Links