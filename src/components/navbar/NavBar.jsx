import {  useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import cart from "../../Assets/image/cart.jpg"
import logo from "../../Assets/image/logo.avif"
import "./NavBar.scss"
const NavBar = () => {
    const [show , setV] = useState()
    const state = useSelector(state => state.state)
    let len = Object.keys(state.cart).length ;
    return (
        <div className="navbar mobile">
            <div className="left_logo">
                <Link to="/">
                    <img src={logo} 
                    alt="logo"
                    className="brandLogo"
                    />
                </Link>
            </div>
            <div className={!show ?"right_taps" : "right_taps transform"}
            >
                <div className="aboutUs" onClick={()=>setV(!show)}>
                    <Link  to="about">About us</Link>
                </div>
                <div className="contact" onClick={()=>setV(!show)}>
                    <Link to="contact"> contact us</Link>
                </div>
                <div className="shopping" onClick={()=>setV(!show)}>
                <Link to="shopping" >
                    {len >= 1 ? 
                    <span>{len}</span>
                    :
                    null
                    }
                  <img src={cart} alt=""/>    
                </Link>    
                </div>
            </div>
            <div className={!show?"responsive show" : "responsive"} onClick={()=>setV(!show)}>
                <span className="bar first"></span>
                <span className="bar second"></span>
                <span className="bar third"></span>
            </div>
        </div>
    )
}

export default NavBar
