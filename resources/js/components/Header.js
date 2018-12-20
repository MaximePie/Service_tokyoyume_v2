import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Je me mangerais bien un sushi ou un truc du genre... C'est l'heure du service ! </Link>
        </div>
    </nav>
)

export default Header
