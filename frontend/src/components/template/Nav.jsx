import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> INICIO
        </Link>        
        <Link to="/users">
            <i className="fa fa-users"></i> USUARIOS
        </Link>
    </nav>
</aside>