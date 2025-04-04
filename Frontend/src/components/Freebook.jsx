import React, { useState, useEffect } from 'react' 

// import List from "./list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"
import axios from 'axios'

const Freebook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [book, setBook ] = useState([])
  const fetchBook = async () => {
    try {
      console.log("Fetching started...");
      const res = await axios.get('http://localhost:3000/book'); 
      console.log(res.data);
      setBook(res.data.filter((data) => data.category === "Free"));
    } catch (error) {
      console.error("Error while fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
            <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
            debitis labore ducimus sed ipsam nam nemo consectetur odio obcaecati?
            Eius itaque nostrum molestiae! Commodi libero provident tempora ab
            veniam.
            </p>
        </div>

        <div className="mt-4">
            <Slider {...settings}>
                {
                    book.map((item) => (
                        <Cards item ={item} key={item.id}/>
                    ))
                }
            </Slider>
        </div>
      </div>

    </>
  );
};

export default Freebook;
