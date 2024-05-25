
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// import Cards from "./Cards";
function Freebook() {
  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       // const res = await axios.get("http://localhost:3000/book");

  //       const filterData = list.filter((data) => data.category === "Roadmap");
  //       console.log(filterData);
  //       setBook(filterData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const filterData = list.filter((data) => data.category === "Roadmap");
        console.log(filterData);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
         <div>
          <h1 className="font-semibold text-xl pb-2">Best Roadmap To Start For Each Fields</h1>
          <p>
          Checking out a roadmap before embarking on any journey, whether it’s a personal or professional one, is crucial for several reasons. A roadmap acts as your compass, guiding you toward success. Whether it’s a career path, project, or personal growth, having a roadmap ensures purposeful and efficient progress. 
          </p>
        </div>

        <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item= {item} key={item.id}/>
        ))}
      </Slider>
    </div>
      </div>
    </>
  );
}
export default Freebook;
