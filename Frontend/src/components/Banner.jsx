import React from 'react'
import books from './book.jpg'

const Banner = () => {
  return (
    <>
        <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-10 my-3'>
            <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>
                        Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores laboriosam similique quos fugiat temporibus amet iure, repellat cupiditate quod rem tempora eaque, fuga at eum voluptas pariatur libero cum!
                    </p>
                    <div className='flex items-center gap-2 border p-2 rounded-md'>
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        <input type='email' className='border-none outline-none w-full' placeholder='enter your email' />

                    </div>
                </div>
                <button className='mt-5 btn bg-pink-500 text-[18px]  text-white px-4 py-1 rounded-md'>Login</button>
            </div>

            <div className='order-1 w-full md:w-1/2'>
                <img src={books} className='w-92 h-92'/>
            </div>
        </div>
    </>
  )
}

export default Banner
