import React from 'react';
import "../css/Header.css";
import logo from "../images/logo-h.png";

function Header() {

    return (
        <div className='header'>
            <img className='header__img' src={logo} alt="GeraSki" />
            <ul className='header__nav'>
                <li><a href="">Головна</a></li>
                <li><a href="">Про нас</a></li>
                <li><a href="">Тури</a></li>
                <li><a href="">Прайси</a></li>
                <li><a href="">Контакти</a></li>
            </ul>
            <a className='header__button' href="">зателефонувати</a>
        </div>
    )
}
export default Header