import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import imageUrlBuilder from '@sanity/image-url'
import YoutubeEmbed from './YoutubeEmbed'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function EventDetailed() {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient
            .fetch(
                `*[ _type == "events" && slug.current == "${slug}"]{
      title,
      eventDate,
      eventPlace,
      eventType,
      description,
      mainImage{
        asset->{
            _id,
            url
        }
    },
      images,
      subimages,
      gallery,
      videoLink
  }`,
            )
            .then((data) => {
                // console.log(data[0])
                setSinglePost(data[0])
            })
    }, [slug])
    if (!singlePost) return <div > Loading... < /div>
    return ( <
        div className = 'join-us' >
        <
        Header / >
        <
        h1 style = {
            {
                textAlign: 'center',
                fontFamily: 'raleway',
                fontWeight: 500,
                paddingBottom: '5%',
            }
        }
        className = 'headertext mb-0 md:text-5xl text-3xl' >
        { singlePost.title } <
        /h1> <
        section className = 'text-gray-600 body-font' >
        <
        div className = 'container head px-5 py-10 mx-auto' >
        <
        div className = 'flex flex-col' > < /div> <
        div className = 'flex flex-row  -mb-10 -mt-20' >
        <
        div className = 'head1 md:w-2/4 sm:mb-0 mb-6 -mr-64 ' >
        <
        div className = ' h-80 overflow-hidden' >
        <
        img alt = 'content'
        className = 'h1 mt-16 object-contain object-center h-full w-full'
        src = { urlFor(singlePost.images[0]).url() }
        /> <
        /div> <
        /div> <
        div className = 'head2 md:w-2/3 sm:mb-0 mb-6' >
        <
        div className = 'z-10 h-96 overflow-hidden' >
        <
        img alt = 'content'
        style = {
            { position: 'relative' } }
        className = 'h2 object-contain object-center h-full w-full'
        src = { urlFor(singlePost.images[1]).url() }
        /> <
        /div> <
        /div> <
        div className = 'head3 md:w-1/2 sm:mb-0 mb-6'
        style = {
            { marginLeft: '-15%' } } >
        <
        div className = 'h-80 overflow-hidden' >
        <
        img alt = 'content'
        className = 'h3 mt-16 object-contain object-center h-full w-full'
        src = { urlFor(singlePost.images[2]).url() }
        /> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        div className = 'contb  flex justify-center' >
        <
        button className = 'contact2 ml-0  mt-8 py-2 px-6  rounded text-xl'
        style = {
            { fontFamily: 'Raleway', fontWeight: 'bold' } } >
        <
        a href = '/#contact' > Book an event < /a> <
        /button> <
        /div> <
        section className = ' py-12 text-white body-font' >
        <
        div className = 'container mx-auto flex px-8 py-0 md:flex-row flex-col items-center' >
        <
        div className = 'lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-0 md:mb-0' >
        <
        div className = 'flex flex-wrap '
        style = {
            {
                backgroundImage: 'url(./images/design.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
            }
        } >
        <
        div className = 'md:p-16 p-1 w-6/7' >
        <
        img alt = 'gallery'
        className = 'w-full h-full object-cover object-center '
        src = { urlFor(singlePost.subimages[0]).url() }
        alt = 'Imah21' /
        >
        <
        /div> <
        div className = 'md:p-3 p-1 w-1/3' >
        <
        img alt = 'gallery'
        className = '-mt-12 w-full object-cover h-full object-center block'
        src = { urlFor(singlePost.subimages[1]).url() }
        alt = 'Imah21' /
        >
        <
        /div> <
        div className = 'md:p-4 p-1 w-2/3' >
        <
        img alt = 'gallery'
        className = '-mt-8 w-full object-cover h-full object-center block'
        src = { urlFor(singlePost.subimages[2]).url() }
        alt = 'Imah21' /
        >
        <
        /div> <
        /div> <
        /div> <
        div className = ' lg:flex-grow md:w-1/2 lg:ml-12 pl-8 pr-8 bg-white md:ml-12 flex flex-col md:items-start md:text-left items-center text-center' >
        <
        h2 className = 'abouttxt mb-0 mt-6 text-black text-xl leading-relaxed'
        style = {
            { fontFamily: 'raleway', fontWeight: 1000 } } >
        { singlePost.title } <
        /h2> <
        p className = 'abouttxt mb-0 mt-6 text-black text-lg leading-relaxed'
        style = {
            { fontFamily: 'raleway', fontWeight: 600 } } >
        { singlePost.eventType.toUpperCase() } | { singlePost.eventPlace } <
        /p>

        <
        p className = 'abouttxt mb-0 mt-6 text-black text-lg leading-relaxed'
        style = {
            { fontFamily: 'raleway', fontWeight: 600 } } >
        { singlePost.eventDate } <
        /p> <
        p className = 'abouttxt mb-0 mt-6 text-black text-lg leading-relaxed'
        style = {
            { fontFamily: 'raleway', fontWeight: 600 } } >
        { singlePost.description } <
        /p> <
        /div> <
        /div> <
        /section> <
        h1 style = {
            { textAlign: 'center', fontFamily: 'raleway', fontWeight: 500 } }
        className = 'gallery text-5xl' >
        Gallery <
        /h1> <
        section className = 'text-gray-600 body-font' >
        <
        div className = 'container px-5 py-24 mx-auto flex flex-wrap' >
        <
        div className = 'flex flex-wrap md:-m-2 -m-1' >
        <
        div className = 'flex flex-wrap w-1/2' >
        <
        div className = 'md:p-2 p-1 w-1/2' >
        <
        img alt = 'gallery'
        className = 'w-full object-cover h-full object-contain block'
        src = { urlFor(singlePost.gallery[0]).url() }
        /> <
        /div> <
        div className = 'md:p-2 p-1 w-1/2' >
        <
        img alt = 'gallery'
        className = 'w-full object-contain h-full object-center block'
        src = { urlFor(singlePost.gallery[1]).url() }
        /> <
        /div> <
        div className = 'md:p-2 p-1 w-full' >
        <
        img alt = 'gallery'
        className = 'w-full h-full object-cover object-contain block'
        src = { urlFor(singlePost.gallery[2]).url() }
        /> <
        /div> <
        /div> <
        div className = 'flex flex-wrap w-1/2' >
        <
        div className = 'md:p-2 p-1 w-full' >
        <
        img alt = 'gallery'
        className = 'w-full h-full object-cover object-contain block'
        src = { urlFor(singlePost.gallery[3]).url() }
        /> <
        /div> <
        div className = 'md:p-2 p-1 w-1/2' >
        <
        img alt = 'gallery'
        className = 'w-full object-cover h-full object-contain block'
        src = { urlFor(singlePost.gallery[4]).url() }
        /> <
        /div> <
        div className = 'md:p-2 p-1 w-1/2' >
        <
        img alt = 'gallery'
        className = 'w-full object-cover h-full object-contain block'
        src = { urlFor(singlePost.gallery[5]).url() }
        /> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> <
        YoutubeEmbed embedId = { singlePost.videoLink }
        /> <
        div className = 'contb  flex justify-center' >
        <
        button className = 'contact2 ml-0  mt-0 py-2 px-6  rounded text-xl'
        style = {
            { fontFamily: 'raleway', fontWeight: 'bold' } } >
        <
        a href = '/#contact' > Book an event < /a> <
        /button> <
        /div>

        <
        Footer / >
        <
        /div>
    )
}