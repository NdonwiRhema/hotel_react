import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/header'
import NavBar from './Components/Navbar/Navbar'
import Why from './Components/Why/Why'


const App = ()=>{
    return(
        <>
         <NavBar/>
         <Header/>
         <About/>
         <Why/>
        </>     
    )
}

export default App