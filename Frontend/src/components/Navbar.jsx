import React, { useEffect, useState } from 'react'
import { Login } from './Login'
import { useAuth } from '../context/AuthProvider'
import Logout from './Logout'

const Navbar = () => {

    const [authUser, setAuthUser] = useAuth(); 
    // console.log("local user ye hai: ", localStorage.getItem('Users'));


    const [sticky, setSticky] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
   <div className='max-w-2xl'>
     <div className={` w-full  py-4  mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 
        ${ sticky 
        ? "bg-[#FBFBFB] shadow-md shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4" : "" }`}>
        <nav className='flex justify-between items-center '>
            <div className='font-bold text-2xl'>
                bookStore
            </div>
            <div>
                <ul className='flex gap-3'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/courses'>Course</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    
                </ul>
            </div>

           {
            authUser ? <Logout /> : 
                <div>
                <div className='button'>
                    
                    <Login />
                </div>

                {/* <div>
                    for dark theme
                </div> */}
            </div>
           }
        </nav>
    </div>
   </div>
  )
}

export default Navbar
