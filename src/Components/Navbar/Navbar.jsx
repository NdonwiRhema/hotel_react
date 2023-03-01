import "./Navbar.css"
import React,{useState} from "react"

const NavBar = ()=>{
    const[navbar,setNavbar] = useState(false)
    const ChangeBg = ()=>{
        if(window.scrollY >= 100){setNavbar(true)}
        else{setNavbar(false)}
    };
    window.addEventListener('scroll',ChangeBg);
    return(
        <>
            <nav className={navbar?'navbar navbar-expand fixed-top active':'navbar navbar-expand fixed-top'}>
                        <div className="container-fluid">
                                <div   className="navbar-brand">
                                    <a href="index.html">
                                        <span>E</span>asy
                                    </a>
                                </div>
                        </div>
                        <div>
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>  
            
            </nav>
        </>
    )
}
export default NavBar