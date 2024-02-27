import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomeMv1 from '../../../../images/mv1.jpg';
import HomeMv2 from '../../../../images/mv2.jpg';
import HomeMv3 from '../../../../images/mv3.jpg';

import mvBanner1 from '../../../../images/banner1.svg';
import mvBanner2 from '../../../../images/banner2.svg';
import mvBanner3 from '../../../../images/banner3.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // 追加
import 'slick-carousel/slick/slick-theme.css'; // 追加

// // -----------------------------------------
export const HomeMV = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
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
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

  // 各セッティング
  const settings = {
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
          // slidesToShow: 0.9,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],

    // ドットのセッティング
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: '#000000',
          // backgroundImage: "url({HomeMv1})",
        }}
      >
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          backgroundColor: 'white',
          color: 'white',
          height: '4px',
          fontSize: 0,
          boxShadow: '1px 1px 7px white', //光らせる
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <>
      <section className="mv">
        <Slider {...settings} className="mvWrap">
          <div className="mvWrap__item">
            <img src={HomeMv1} alt="" className="mvWrap__item--img" />
          </div>
          <div className="mvWrap__item">
            <img src={HomeMv2} alt="" className="mvWrap__item--img" />
          </div>
          <div className="mvWrap__item">
            <img src={HomeMv1} alt="" className="mvWrap__item--img" />
          </div>
          <div className="mvWrap__item spOnly">
            <img src={HomeMv3} alt="" className="mvWrap__item--img" />
          </div>
        </Slider>

        <div className="mvBanner">
          <div className="mvBanner__item">
            <Link className="mvBanner__item--link" to="/YouTube">
              <img src={mvBanner1} alt="" className="mvBanner__item--img" />
            </Link>
          </div>
          <div className="mvBanner__item">
            <Link className="mvBanner__item--link" to="/Blog">
              <img src={mvBanner2} alt="" className="mvBanner__item--img" />
            </Link>
          </div>
          <div className="mvBanner__item">
            <Link className="mvBanner__item--link" to="/Recruit">
              <img src={mvBanner3} alt="" className="mvBanner__item--img" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
