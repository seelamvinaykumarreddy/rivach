import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return ( <
        section >
        <
        footer class = 'footer-distributed mt-10' >
        <
        div class = 'footer-left -mt-16' >
        <
        Link to = '/' >
        <
        img src = { process.env.PUBLIC_URL + '/images/logo.png' }
        class = 'h-28  footerimg'
        alt = '' /
        >
        <
        /Link>

        <
        p class = 'footer-links' >
        <
        a href = '/#about'
        class = 'link-1' >
        About us <
        /a>

        <
        a href = '/join-us' > Work with us < /a> <
        a href = '/privacypolicy' > Privacy Policy < /a> <
        a href = '/TandC' > T & C < /a> <
        /p>

        <
        p class = 'footer-company-name' >
        Copyright© 2020 CockCrow Events.All rights reserved. <
        /p> <
        /div>

        <
        div class = 'footer-right' >
        <
        p class = 'footer-company-about' >
        <
        span > Follow us on < /span>{' '} <
        /p> <
        div class = 'social-container' >
        <
        ul class = 'social-icons' >
        <
        li >
        <
        a href = 'https://www.instagram.com/cockcrow_events/'
        target = '_blank'
        rel = 'noreferrer' >
        <
        i class = 'fa fa-instagram' > < /i> <
        /a> <
        /li> <
        li >
        <
        a href = 'https://twitter.com/CockcrowEvents'
        target = '_blank'
        rel = 'noreferrer' >
        <
        i class = 'fa fa-twitter' > < /i> <
        /a> <
        /li> <
        li >
        <
        a href = 'https://www.facebook.com/'
        rel = 'noreferrer'
        target = '_blank' >
        <
        i class = 'fa fa-facebook' > < /i> <
        /a> <
        /li> <
        li >
        <
        a href = 'https://www.youtube.com/channel/UCikmynJ5xkxF6HxleYqy1BQ'
        target = '_blank'
        rel = 'noreferrer' >
        <
        i class = 'fab fa-youtube' > < /i> <
        /a> <
        /li> <
        /ul> <
        /div> <
        /div> <
        div class = 'footer-center' >
        <
        div >
        <
        i class = 'fa fa-phone' > < /i> <
        p >
        <
        span > Contact us < /span>+91 0000 000 000 <
        /p> <
        /div> <
        div >
        <
        i class = 'fa fa-map-marker' > < /i> <
        p >
        <
        span > KPHB < /span> Hyderabad, Telangana <
        /p> <
        /div> <
        div >
        <
        i class = 'fa fa-envelope' > < /i> <
        p >
        <
        a href = 'mailto:cockrowevents@gmail.com' >
        cockcrowevents @gmail.com <
        /a> <
        /p> <
        /div> <
        /div> <
        /footer> <
        /section>
    )
}

export default Footer