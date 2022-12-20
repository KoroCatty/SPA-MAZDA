import * as React from "react";
import ReactDom from 'react-dom';

import { useState } from "react";
import { useEffect } from "react";




import HomeMv1 from "../../../../images/mv1.jpg";
// import HomeMv2 from "../../../../images/mv2.jpg";
// import HomeMv3 from "../../../../images/mv3.jpg";

// generate weird files 
// import jQuery from "jquery";
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css'; // 追加
// import 'slick-carousel/slick/slick-theme.css'; // 追加


// import jQuery from "jquery";
// import $ from 'jquery';
// import 'slick-carousel';


import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; // 追加
import 'slick-carousel/slick/slick-theme.css'; // 追加



// // -----------------------------------------
export const HomeMV = (props) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
        // backgroundColor: "red",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          // background: "green",
         }}
        onClick={onClick}
      />
    );
  }
  
  /* state変数を定義する↓  copied*/
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active)
  }

  // 各セッティング
  const settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    // rows: 2,
    // slidesPerRow: 2,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.65,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    // Responsive
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1.65,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
    ],
    
// ドットのセッティング
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#000000",
          // backgroundImage: "url({HomeMv1})",
        }}
      >
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),

    customPaging: i => (
      <div
        style={{
          backgroundColor: "white",
          color: "white",
          height: "4px",
          fontSize: 0,
          boxShadow: "1px 1px 7px white",//光らせる
        }}
      >
        {i +1 }
      </div>
    )
  };


  return (
  
  <>
       <section className="mv">
      
        <Slider {...settings} className="mvWrap">
          <div className="mvWrap__item">
             <img src={HomeMv1} alt="" className="mvWrap__item--img" /> 
          </div>
          <div className="mvWrap__item">
            <img src={HomeMv1} alt="" className="mvWrap__item--img" /> 
          </div>
          <div className="mvWrap__item">
             <img src={HomeMv1} alt="" className="mvWrap__item--img" /> 
          </div>
          <div className="mvWrap__item spOnly">
             <img src={HomeMv1} alt="" className="mvWrap__item--img" /> 
          </div>
          </Slider>


<div className=""></div>




      </section>
  
  
  
  
  </>


  )
}

{

}

