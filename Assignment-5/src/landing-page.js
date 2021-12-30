import React from "react";
import Postview from './post-view-page'
import { BrowserRouter as Router, Link, Route,Routes,NavLink} from 'react-router-dom';
import Switch from 'react-router-dom'
import './landing-page.css'
export default function Landingpage(){
    return(
        <div>
            <div className='container'>
                    <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' alt='Error' />

                <div className='content'>
                    <input id="idnum" type="text" placeholder='Phone number, username or email' />
                    <br />
                    <br />
                    <input id="password" type="text" placeholder='Password' />
                    <br />
                    <br />
                    <NavLink to={'/postview'} className='Nav_link' activeClassName='activeRoute'>Login</NavLink>
                </div>
                </div>
            
        </div>
    )
}