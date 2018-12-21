import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='header__container'>
            <span onClick={() => props.switch_menu_item("commandes")} className='navbar-brand headbar__menu-item' to='/'>Nouvelle commande</span>
            <span onClick={() => props.switch_menu_item("sandwiches")} className='navbar-brand headbar__menu-item' to='/'>Sandwiches</span>
        </div>
    </nav>
)

export default Header
