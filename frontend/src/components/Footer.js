import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

export const Footer = () => {
    return (
        <footer className="footer_component">
            <div className="row">
                <div className="col">
                    <img src={logo} className="logo" /><br />
                    Better Tomorrow is a community driven website wherein anyone can raise social issues and give ideas to solve
                    these problems.
                </div>
                <div className="col">
                    <h3 >Office </h3>
                    <p>Indian Institute of Information Technology, Lucknow<br/>
                    Chak Ganjaria<br/>
                    C. G. city<br/>
                    Uttar Pradesh<br/>
                    226002</p>
                    <p className="email-id">bettertomorrow@gmail.com</p>
                    <h4>+91 72668 48545</h4>
                </div>
                <div className="col">
                <ul>
                    <h3 class="head-link">Links </h3>
                    
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/gallery">Issues</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <div className="social-icons">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </div>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">&#169; Better Tomorrow 2022 - All Rights Reserved</p>
        </footer>
    )
}