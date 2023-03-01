import './App.css'
import About from './Components/About/About'
import Contact from './Components/contact/Contact'
import Custom from './Components/custom/Custom'
import Footer from './Components/footer/Footer'
import Header from './Components/Header/header'
import NavBar from './Components/Navbar/Navbar'
import Offer from './Components/offer/Offer'
import Why from './Components/Why/Why'


const App = ()=>{
    return(
        <>
         <NavBar/>
         <Header/>
         <About/>
         <Why/>
         <Offer/>
         <Custom/>
         <Contact/>
         <Footer/>
        </>     
    )
}

export default App