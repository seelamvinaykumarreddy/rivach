import React, { useState, useEffect } from 'react'
import Header from './Header'
import Calendly from './Calendly'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Aos from "aos"
import 'aos/dist/aos.css'

const Home = () => {
    const [postData, setPost] = useState(null)
    useEffect(() => {
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbyuamNLX_JEnE-SKtc69KEpuG3z1Y3iZWlobBbMjQ/exec'
        const form = document.forms['submit-to-google-sheet']
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form),
                })
                .then((response) => console.log('Success!', response))
                .catch((error) => console.error('Error!', error.message))
        })
        let submit11 = document.querySelector('.submit')
        if (submit11) {
            submit11.addEventListener('click', function() {
                alert('Successfully Submited ')
            })
        }

        let tabs = document.querySelector('.tabs')
        let tabHeader = tabs.querySelector('.tab-header')
        let tabBody = tabs.querySelector('.tab-body')
        let tabIndicator = tabs.querySelector('.tab-indicator')
        let tabHeaderNodes = tabs.querySelectorAll('.tab-header > div')
        let tabBodyNodes = tabs.querySelectorAll('.tab-body > div')

        for (let i = 0; i < tabHeaderNodes.length; i++) {
            tabHeaderNodes[i].addEventListener('click', function() {
                tabHeader.querySelector('.active').classList.remove('active')
                tabHeaderNodes[i].classList.add('active')
                tabBody.querySelector('.active').classList.remove('active')
                tabBodyNodes[i].classList.add('active')

                tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`
            })
        }
        sanityClient
            .fetch(
                `*[_type == "events"]{
         title,
        slug,
        eventPlace,
         mainImage{
             asset->{
                 _id,
                 url
             },
             alt
         }
    }`,
            )
            .then((data) => {
                console.log(data)
                setPost(data)
            })
            .catch(console.error)
    }, [])

    return ( <
        >
        <
        Header / >
        <
        section className = 'hero body-font' >
        <
        div className = 'hero1 mx-auto flex px-0  md:flex-row flex-col items-center' >
        <
        div className = 'banner' >
        <
        img id = 'ban'
        style = {
            { opacity: 90 }
        }
        src = { process.env.PUBLIC_URL + '/images/bg3.jpg' }
        alt = '' /
        >
        <
        /div>

        <
        div className = 'txt md:w-4/5 flex flex-col text-white items-center' >
        <
        h3 className = 'txt1 text-5xl text-center mb-2 p-0'
        style = {
            { fontFamily: 'Raleway', fontWeight: 800 }
        } >
        We Make Your Moments <
        /h3> <
        h3 className = 'txt2 text-5xl text-center mb-8 p-2'
        style = {
            { fontFamily: 'Raleway', fontWeight: 1000 }
        } >
        More Memorable <
        /h3>  <
        div className = 'contb flex justify-center' >
        <
        button className = 'contact2 ml-0 mb-10  py-2 px-6  rounded text-xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 'bold' }
        } >
        <
        a href = '#contact' > Book an event < /a> < /
        button > <
        /div> < /
        div > <
        /div> < /
        section >

        <
        section className = 'about py-12 text-white body-font' >
        <
        h1 id = 'about'
        className = 'whowe text-center text-gray-200 text-5xl mt-6 mb-12 font-medium '
        style = {
            { fontFamily: 'Raleway' }
        } >
        What we do
            </h1> <
        div className = 'container mx-auto flex px-5 py-0 md:flex-row flex-col items-center' >
        <
        div className = 'lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-0 md:mb-0' >
        <
        div className = 'flex flex-wrap ' >
        <
        div className = 'md:p-0 p-1 w-6/7' >
        <
        img alt = 'gallery'
        className = 'w-full h-full object-cover object-center block'
        src = { process.env.PUBLIC_URL + '/images/ab1.jpg' }
        /> < /
        div > <
        div className = 'md:p-2 p-1   w-1/3' >
        <
        img alt = 'gallery'
        className = 'w-full object-cover h-full object-center block'
        src = { process.env.PUBLIC_URL + '/images/ab3.jpg' }
        /> < /
        div > <
        div className = 'md:p-2 p-1 w-2/3' >
        <
        img alt = 'gallery'
        className = 'w-full object-cover h-full object-center block'
        src = { process.env.PUBLIC_URL + '/images/abt2.jpg' }
        /> < /
        div > <
        /div> < /
        div > <
        div className = 'aboutbox lg:flex-grow md:w-1/2 lg:ml-12 pl-8 pr-8  md:ml-12 flex flex-col md:items-start md:text-left items-center text-center' >
        <
        p className = 'abouttxt mb-8 mt-6 text-white text-xl leading-relaxed'
        style = {
            { fontFamily: 'Raleway', fontWeight: 500 }
        } >
        We curate every single detail especially
        for you...so that you and your family can have an unforgettable experience in the city of Nawabs.From the genesis to an impeccably flawless execution that is both on trend and timeless, we do this all
        for you We deliver the most cheerful, lively and dazzling celebratory events at ravishingly affordable prices. <
        /p> < /
        div > <
        /div> < /
        section > <
        section className = 'text-gray-300 body-font' >
        <
        div className = 'container mx-auto flex px-5 py-16 items-center justify-center flex-col' >
        <
        div className = 'text-center lg:w-4/5 w-full' > < /div> < /
        div > <
        /section> <
        section id = 'WhyCockrow'
        className = 'text-gray-600 body-font' >
        <
        h1 className = 'why title-font md:text-5xl text-center  text-3xl mb-4 font-medium text-gray-200 '
        style = {
            { fontFamily: 'Raleway' }
        } >
        Why Cockrow <
        /h1>

        <
        div className = 'container mx-auto flex px-5 py-6 md:flex-row flex-col items-center' >
        <
        div className = 'lg:flex-grow md:w-1/2 lg:pr-8 md:pr-6 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center' >
        <
        p className = 'whytext mb-8 text-xl text-gray-100 p-8 rounded leading-relaxed ' >
        Cockcrow Events is pioneering the event management sector to a more technologically driven industry with an application that enables users to book any scale of events in just 60 minutes,
        bridging the gaps of budget feasibility, transparency,
        accountability, and customization. < br / > The key fact of this business model is“ Integrating creativity with technology”.Every ounce of the application and machinery is built by a team of experts led by a leader who is the brainchild of this transitional business. <
        /p> < /
        div > <
        div className = 'md:w-2/5 w-5/6 items-center ' >

        <
        img src = { process.env.PUBLIC_URL + '/images/play.png' }
        style = {
            { opacity: 90 }
        }
        alt = '' /
        >
        <
        /div> < /
        div > <
        /section> <
        section className = 'highlight text-gray-600 body-font' >
        <
        div className = 'container px-5 mx-auto' >
        <
        div className = 'flex flex-col text-center w-full mb-20' >
        <
        h1 className = 'high text-center text-gray-200 text-5xl mt-6 mb-0 font-medium '
        style = {
            { fontFamily: 'Raleway' }
        } >
        Highlighted Events <
        /h1> < /
        div > <
        div className = 'flex flex-wrap -m-4' > {
            postData &&
            postData.map((post, index) => ( <
                >
                <
                div className = 'lg:w-1/3 sm:w-1/2 p-4' >
                <
                Link to = { '/events/' + post.slug.current }
                key = { index } >
                <
                div className = 'flex relative' >
                <
                div className = 'image' >
                <
                img className = 'image__img'
                src = { post.mainImage.asset.url }
                alt = 'Event' /
                >
                <
                div className = 'image__overlay image__overlay--blur' >
                <
                div className = 'image__title' > { post.title } < /div> <
                p className = 'image__description' > { post.eventPlace } <
                /p> < /
                div > <
                /div> < /
                div > <
                /Link> < /
                div > <
                />
            ))
        }

        <
        div className = 'items-center eventbutton mt-10 flex justify-center' >
        <
        button className = 'viewMoreEvents ml-0   py-2 px-6  rounded text-xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 'bold' }
        } >
        <
        Link to = '/events' > View more events < /Link> < /
        button > <
        /div> < /
        div > <
        /div> < /
        section >

        <
        section >
        <
        div id = 'process'
        className = 'container mt-20 bg-white mx-auto' >
        <
        div className = 'howunderline  flex justify-end pr-48 pt-8 ' >
        <
        h2 className = 'text-gray-900  how  focus:outline-none cursor-pointer rounded text-5xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 'bold' }
        } > { ' ' }
        How it works { ' ' } <
        /h2> < /
        div > <
        div className = 'container bg-white  mx-auto flex px-5 rounded py-4 md:flex-row flex-col items-center' >
        <
        div className = 'lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0' >
        <
        img className = 'object-cover object-center rounded'
        alt = 'hero'
        src = { process.env.PUBLIC_URL + 'images/process.png' }
        /> < /
        div > <
        div className = 'lg:flex-grow md:w-2/3  flex flex-col  items-center text-center'
        style = {
            { fontFamily: 'Raleway', fontWeight: 600 }
        } >
        <
        div className = ' py-0 mx-auto flex flex-wrap'
        style = {
            {
                fontFamily: 'Raleway',
                fontWeight: 600,
                padding: 0,
                paddingLeft: 0,
            }
        } >
        <
        div className = 'flex relative pt-8 pb-20 sm:items-center md:w-2/3 mx-auto' >
        <
        div className = 'h-full w-6 absolute inset-0 flex items-center justify-center' >
        <
        div className = 'h-full w-1 bg-green-400 pointer-events-none' > < /div> < /
        div > <
        div className = 'flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm' >
        1 <
        /div> <
        div className = 'flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row' >
        <
        div className = 'process flex-shrink-0   text-indigo-500 rounded-full inline-flex items-center justify-center' >
        <
        img src = { process.env.PUBLIC_URL + '/Images/appointment.png' }
        className = 'w-24 h-24 bg-indigo-100 rounded-full'
        width = '72'
        alt = '' /
        >
        <
        /div> <
        div className = 'flex-grow p-text ml-4 -mr-4 mt-6 sm:mt-0' >
        <
        p className = 'leading-relaxed text-xl' >
        Book appointment or contact us. <
        /p> < /
        div > <
        /div> < /
        div > <
        div className = 'flex relative pb-20 sm:items-center md:w-2/3 mx-auto' >
        <
        div className = 'h-full w-6 absolute inset-0 flex items-center justify-center' >
        <
        div className = 'h-full w-1 bg-green-400 pointer-events-none' > < /div> < /
        div > <
        div className = 'flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm' >
        2 <
        /div> <
        div className = 'flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row' >
        <
        div className = 'process flex-shrink-0 w-24 h-24 bg- -100 text-indigo-500 rounded-full inline-flex items-center justify-center' >
        <
        img src = { process.env.PUBLIC_URL + '/Images/manager.png' }
        width = '96'
        alt = '' /
        >
        <
        /div> <
        div className = 'flex-grow ml-4 p-text -mr-4 mt-6 sm:mt-0' >
        <
        p className = 'leading-relaxed text-xl' >
        Our manager will get in touch with you. <
        /p> < /
        div > <
        /div> < /
        div > <
        div className = 'flex relative pb-8 sm:items-center md:w-2/3 mx-auto' >
        <
        div className = 'h-full w-6 absolute inset-0 flex items-center justify-center' >
        <
        div className = 'h-full w-1 bg-green-400 pointer-events-none' > < /div> < /
        div > <
        div className = 'flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm' >
        3 <
        /div> <
        div className = 'flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row' >
        <
        div className = 'process flex-shrink-0 w-24 h-24  text-indigo-500 rounded-full inline-flex items-center justify-center' >
        <
        img src = { process.env.PUBLIC_URL + '/Images/confirm.png' }
        className = 'w-24 h-24 bg-indigo-100 rounded-full'
        width = '72'
        alt = '' /
        >
        <
        /div> <
        div className = 'flex-grow ml-4 -mr-4 p-text mt-6 sm:mt-0' >
        <
        p className = 'leading-relaxed text-xl' >
        Your event will be booked & confirmed on the same day. <
        /p> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /section> <
        h1 id = 'contact'
        className = 'text-6xl text-white mt-36 text-center'
        style = {
            { fontFamily: 'Raleway' }
        } > { ' ' }
        Contact us <
        /h1> <
        div className = 'tabs text-black ' >
        <
        div className = 'tab-header' >
        <
        div className = 'active' >
        <
        i className = 'fas fa-video' / > Online <
        /div> <
        div >
        <
        i className = 'far fa-handshake' / >
        Offline <
        /div> < /
        div > <
        div className = 'tab-indicator' > < /div> <
        div className = 'tab-body' >
        <
        div className = 'active' >
        <
        h1 className = 'text-center mr-16 mt-6 mb-3 text-4xl'
        style = {
            {
                fontFamily: 'Raleway',
                fontWeight: 800,
                color: '#210070',
            }
        } >
        Book your slot now <
        /h1> <
        h2 className = 'text-center mr-16 -mb-6 text-xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 600 }
        } >
        Your are just one step away to reach us <
        /h2>

        <
        Calendly / >
        <
        script type = 'text/javascript'
        src = 'https://assets.calendly.com/assets/external/widget.js'
        async >
        <
        /script> < /
        div > <
        div >
        <
        h1 className = 'text-center mb-3 mr-16 mt-6 text-4xl'
        style = {
            {
                fontFamily: 'Raleway',
                fontWeight: 'bold',
                color: '#210070',
            }
        } >
        Book your slot now <
        /h1> <
        h2 className = 'text-center mb-5 mr-16 text-xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 'bold' }
        } >
        Your are just one step away to reach us <
        /h2> <
        div className = 'containr' >
        <
        form action = ''
        id = 'cockcrow'
        name = 'submit-to-google-sheet' >
        <
        label htmlFor = 'fname' > Name: < /label> <
        input type = 'text'
        id = 'name'
        name = 'name'
        placeholder = 'Your name..' /
        >

        <
        label htmlFor = 'email' > Email: < /label> <
        input type = 'text'
        id = 'email'
        name = 'email'
        placeholder = 'Your email address..' /
        >
        <
        label htmlFor = 'number' > Number: < /label> <
        input type = 'number'
        id = 'number'
        name = 'number'
        placeholder = 'Your phone number..' /
        >

        <
        label htmlFor = 'place' > Place of Appointment: < /label> <
        input type = 'text'
        id = 'place'
        name = 'place'
        placeholder = 'Place of Appointment..' /
        >
        <
        label htmlFor = 'subject' > Type of event: < /label> <
        textarea id = 'subject'
        name = 'event_type'
        placeholder = 'Describe your event..'
        style = {
            { height: 50 }
        } >
        <
        /textarea>

        <
        input className = 'submit'
        type = 'submit'
        value = 'Submit' / >
        <
        /form> < /
        div > <
        /div> < /
        div > <
        /div> <
        Footer / >
        <
        />
    )
}

export default Home