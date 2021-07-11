import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import Footer from './Footer.js'

export default function Events() {
  const [postData, setPost] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events"]{
          title,
          slug,
          eventDate,
          eventPlace,
          eventType,
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
        setPost(data)
      })
      .catch(console.error)
  }, [])
  if (!postData) return <div>Loading...</div>

  return (
    <div className='join-us'>
      <Header />
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Tangerine',
          fontWeight: 500,
        }}
        class='mt-6 text-7xl'
      >
        Events & Stories
      </h1>
      <section
        class=' body-font'
        style={{
          paddingBottom: '20%',
          background: 'linear-gradient(#0085FF,#fff)',
        }}
      >
        <div class='container px-5 py-12 blogs  mx-auto'>
          <div class='flex flex-wrap -m-4'>
            {postData &&
              postData.map((post, index) => (
                <>
                  <div class='blog p-12 md:w-1/2'>
                    <div class='h-full' style={{ fontFamily: 'raleway' }}>
                      <img
                        class='lg:h-72 md:h-36 w-full object-cover object-center '
                        style={{ zIndex: 1 }}
                        src={post.mainImage.asset.url}
                        alt='blog'
                      />
                      <div class='p-6 story'>
                        <h2
                          class='tracking-widest text-xs title-font font-medium text-gray-900 mb-4'
                          style={{
                            fontFamily: 'raleway',
                            textDecoration: 'underline',
                            textUnderlineOffset: 4,
                            textDecorationThickness: 2,
                            textDecorationColor: 'blue',
                          }}
                        >
                          {post.eventDate}
                        </h2>
                        <h1 class='title-font text-lg font-bold text-black mb-3'>
                          {post.title}
                        </h1>
                        <p class='leading-relaxed mb-8'>
                          {post.eventType.toUpperCase()} | {post.eventPlace}
                        </p>
                        <div class='flex items-center flex-wrap '>
                          <Link
                            class='bg-blue-500 p-2 py-1 text-white inline-flex items-center md:mb-2 lg:mb-0'
                            style={{ backgroundColor: '#0085FF' }}
                            to={'/events/' + post.slug.current}
                          >
                            {' '}
                            Read More
                            <svg
                              class='w-4 h-4 ml-2'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              stroke-width='2'
                              fill='none'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            >
                              <path d='M5 12h14'></path>
                              <path d='M12 5l7 7-7 7'></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
