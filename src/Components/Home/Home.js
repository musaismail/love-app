import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import MainBody from '../MainBody/MainBody'
import Menu from '../Menus/Menu'

const Home = () => {
  return (

    <>
      <div className='container-fluid'>
        <Header />    
        <Menu/>
        <Hero/>
        <MainBody/>
        <Footer/>
      </div>    
    </>



    // <div>
    //     <Header/>
    //     <Menu/>
    //     {/* <Hero/> */}
    //     <MainBody />
    //     <Footer/>
    // </div>
  )
}

export default Home