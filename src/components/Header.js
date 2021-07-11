import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from "aos"
import 'aos/dist/aos.css'

function Header() {

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger')
        const navMenu = document.querySelector('.nav-menu')
        const navLink = document.querySelectorAll('.nav-link')

        hamburger.addEventListener('click', mobileMenu)
        navLink.forEach((n) => n.addEventListener('click', closeMenu))

        function mobileMenu() {
            hamburger.classList.toggle('active')
            navMenu.classList.toggle('active')
        }

        function closeMenu() {
            hamburger.classList.remove('active')
            navMenu.classList.remove('active')
        }
        Aos.init({ duration: 1000 });
    }, [])
    return ( <
        >
        <
        header >
        <
        nav className = 'navbar' >
        <
        Link to = '/'
        className = 'nav-logo' >
        <
        img src = { process.env.PUBLIC_URL + '/images/logo.png' }
        className = 'h-28 w-28'
        alt = 'logo' /
        >
        <
        /Link> <
        ul className = 'nav-menu' >
        <
        li className = 'nav-item text-white' >
        <
        Link to = '/#about'
        className = 'nav-link' >
        About <
        /Link> < /
        li > <
        li className = 'nav-item text-white' >
        <
        Link to = '/events'
        className = 'nav-link' >
        Events & Stories <
        /Link> < /
        li > <
        li className = 'nav-item' >
        <
        a href = '/#contact'
        className = 'nav-link contact' >
        Contact us <
        /a> < /
        li > <
        /ul> <
        div className = 'hamburger' >
        <
        span className = 'bar' > < /span> <
        span className = 'bar' > < /span> <
        span className = 'bar' > < /span> < /
        div > <
        /nav> < /
        header > <
        />
    )
}

export default Header