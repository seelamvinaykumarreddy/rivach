import React from 'react'
import Footer from './Footer'
import Header from './Header'

const joinUs = () => {
  return (
    <div className='join-us'>
      <Header />
      <h1
        class='vendor-text text-center text-4xl'
        style={{ fontFamily: 'Raleway', fontWeight: 500 }}
      >
        Apply For Vendor
      </h1>
      <section class='text-gray-900 body-font'>
        <div class=' container px-5 py-12 mx-auto flex flex-col'>
          <div class='lg:w-4/6 mx-auto'>
            <div class='apply mb-12 h-80 w:1/2 overflow-hidden'>
              <a href='' class='video-play' data-video-id='sRy5dJg0k-8'>
                {' '}
                <img
                  class='-mt-16'
                  src={process.env.PUBLIC_URL + './images/vendor.jpg'}
                  style={{ opacity: 100 }}
                  alt=''
                />
              </a>
            </div>
            <h1
              class='joining text-5xl text-center mt-20 mb-8'
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: 10,
                textDecorationColor: 'rgb(4, 0, 255)',
                fontFamily: 'raleway',
                fontWeight: 500,
              }}
            >
              Process of joining
            </h1>
            <div class='flex flex-col sm:flex-row mt-10'>
              <img src={process.env.PUBLIC_URL + 'images/step.png'} alt='' />
            </div>
            <div class='items-center downloadbutton  mt-20 flex justify-center'>
              <button
                class='download ml-0   py-2 px-6  rounded text-lg'
                style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}
              >
                <a href='https://play.google.com/' target='_blank'>
                  Download Playstore
                </a>
              </button>
              <button
                class='download ml-16   py-2 px-6  rounded text-lg'
                style={{ fontFamily: 'Raleway', fontWeight: 'bold' }}
              >
                <a href='https://www.apple.com/in/app-store/' target='_blank'>
                  Download Appstore
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class='text-gray-800 body-font'>
        <div class='container px-5 py-12 mx-auto'>
          <div class='flex flex-wrap -m-4 text-center'>
            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clip-rule='evenodd'
                  />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  10,000+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Clients
                </p>
              </div>
            </div>
            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  8,000+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Vendor's
                </p>
              </div>
            </div>

            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  Expanding in 8+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='text-gray-800 body-font'>
        <div class='container px-5 py-20 mx-auto'>
          <h1
            class='text-4xl font-medium title-font text-gray-900 mb-12 text-center'
            style={{ fontFamily: 'Raleway' }}
          >
            Testimonials
          </h1>
          <div class='flex flex-wrap -m-4'>
            <div class='p-4 md:w-1/2 w-full'>
              <div class='h-full bg-gray-100 p-8 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  class='block w-5 h-5 text-gray-400 mb-4'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p class='leading-relaxed mb-6'>
                  I have been associated to crockrow since 8 months your
                  applications and machines are user friendly, happy to be
                  assciated with cockcrow.
                </p>
                <a class='inline-flex items-center'>
                  <img
                    alt='testimonial'
                    src={process.env.PUBLIC_URL + 'images/manager.png'}
                    class='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                  />
                  <span class='flex-grow flex flex-col pl-4'>
                    <span class='title-font font-medium text-gray-900'>
                      Ram
                    </span>
                    <span class='text-gray-500 text-sm'>Photographer</span>
                  </span>
                </a>
              </div>
            </div>
            <div class='p-4 md:w-1/2 w-full'>
              <div class='h-full bg-gray-100 p-8 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  class='block w-5 h-5 text-gray-400 mb-4'
                  viewBox='0 0 975.036 975.036'
                >
                  <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                </svg>
                <p class='leading-relaxed mb-6'>
                  {' '}
                  I have been associated with cockcrow for the past 5 months for
                  the marketing of paid event and I am pretty muchhappy with
                  cockcrow.
                </p>
                <a class='inline-flex items-center'>
                  <img
                    alt='testimonial'
                    src={process.env.PUBLIC_URL + 'images/manager.png'}
                    class='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                  />
                  <span class='flex-grow flex flex-col pl-4'>
                    <span class='title-font font-medium text-gray-900'>
                      Mahesh
                    </span>
                    <span class='text-gray-500 text-sm'>Marketing Lead</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1
        class='text-center text-4xl'
        style={{ fontFamily: 'Raleway', fontWeight: 500 }}
      >
        Apply For Manager
      </h1>
      <section class='text-gray-800 body-font'>
        <div
          class='container px-5 py-12 mx-auto'
          style={{ fontFamily: 'Raleway' }}
        >
          <div class='flex flex-wrap -m-4 text-center'>
            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clip-rule='evenodd'
                  />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  10,000+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Clients
                </p>
              </div>
            </div>
            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  100+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Manager's
                </p>
              </div>
            </div>

            <div class='p-4 md:w-1/3 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-200 px-4 py-6 rounded-lg'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                  />
                </svg>
                <h2 class='title-font font-medium text-3xl text-gray-900'>
                  Expanding in 8+
                </h2>
                <p class='leading-relaxed text-xl' style={{ fontWeight: 500 }}>
                  Cities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1
          class='text-center text-lg'
          style={{ fontFamily: 'Raleway', fontWeight: 500 }}
        >
          click{' '}
          <a
            style={{ textDecoration: 'underline' }}
            href='https://forms.gle/YqMeGtQbuPm3vMQw5'
            target='_blank'
          >
            here
          </a>{' '}
          to fill form for Manager-role
        </h1>
        <Footer />
      </section>
    </div>
  )
}

export default joinUs
