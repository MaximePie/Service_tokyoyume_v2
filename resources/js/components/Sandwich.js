import React from 'react'

const Sandwich = (props) => (
    <div className='header__container'>
        <span onClick={() => props.switch_menu_item("commandes")} className='navbar-brand headbar__menu-item' to='/'>Commandes</span>
        <span className='navbar-brand headbar__menu-item' to='/'>Sandwiches</span>
        Espèce de charlot va
    </div>
)

export default Sandwich
