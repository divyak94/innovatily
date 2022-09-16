import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'
import logoWhite from '../assets/images/whiteLogo.svg'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'


const Layout = ({ pageTitle, children }) => {
  console.log(pageTitle, children)
  return (
    <div className={container}>
      <nav>
        <Header/>
        <main>
        {children}
      </main>
      <Footer/>          
      </nav>
     
    </div>
  )
}

export default Layout