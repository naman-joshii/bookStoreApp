import React, { useState, useEffect } from 'react' 
import Cards from '../components/Cards'
// import list from '../components/list.json'
import {Link} from "react-router-dom"
import axios from 'axios'
// import { getBook } from '../../../Backend/controller/book.conroller'




const Course = () => {

  const [book, setBook ] = useState([])
  const fetchBook = async () => {
    try {
      // console.log("Fetching started...");
      const res = await axios.get('http://localhost:3000/book'); // Add await here
      // console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.error("Error while fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

    // console.log(list)
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to have you  {" "} <span className='text-pink-500'>Here :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maiores cupiditate tempora consequuntur sunt deserunt voluptatum ducimus. At corrupti aut neque labore nobis modi, debitis accusantium necessitatibus expedita? Omnis, aliquam!</p>
        <Link to="/">
            <button className='mt-6 bg-pink-500 text-white rounded-md py-2 px-4 hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))
        }
      </div>

    </div>
  )
}

export default Course
