// EachPageを輸入してページ遷移させるページ

import * as React from 'react';
import ReactDom from 'react-dom';

// 各ページ
import Home from '../../TSX/EachPage/Home.tsx';
import About from '../../TSX/EachPage/About.tsx';
import Service from '../../TSX/EachPage/Service.tsx';
import Eco from '../../TSX/EachPage/Eco.tsx';
import Guide from '../../TSX/EachPage/Guide.tsx';

import logo from '../../../images/logo.png';
// import gitHubIcon from "../../../../images/icons/icon_github.svg";
// import facebookIcon from "../../../../images/icons/icon_facebook.svg";
// import youtubeIcon from "../../../../images/icons/icon_youtube.svg";

// 3rd party
import styled from 'styled-components'; // For Original CSS each component

import { useState } from 'react';
import { useEffect } from 'react';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



// -----------------------------------------
const reactRoot = document.getElementById('Header');
if (reactRoot) {
  ReactDom.render(
    <>
      <BrowserRouter>
        <header className="header">
          <div className="headerWrap">
            <div className="headerLogo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="headerTitle">
              <h1 className="">マツダオートザム清水</h1>
              <p className="">MAZDA AUTOZAM SHIMIZU</p>
            </div>

            <div className="headerContact">
              <div className="headerContact__phone">
                <p className="headerContact__phone--num">054-353-4188</p>
                <p className="headerContact__phone--hours">
                  営業時間 9:00～19:00
                </p>
              </div>

              <div className="headerContact__bar"></div>

              <div className="headerContact__detail">
                <div className="headerContact__detail--email">
                  {/* <!-- <img src="" alt="" className="headerContact__detail--email"> --> */}
                  お問い合わせ
                </div>
                <div className="headerContact__detail--access">
                  {/* <!-- <img src="" alt="" className="headerContact__detail--map"> --> */}
                  アクセス
                </div>
              </div>
            </div>
            <div className="headerSticky">マツダオフィシャルサイト</div>
            {/* ------------------- */}
            {/*----- Hamburger -----*/}
            {/* ------------------- */}
            <div className="navDrawer">
              <input
                id="nav-input"
                className="navDrawer__input nav-unshown"
                type="checkbox"
              />

              {/* <!-- これはバーガーを作るもの。 ここにnav-inputがあり上のinputとシンクロナイズする--> */}
              <label id="nav-open" htmlFor="nav-input">
                <span></span>
              </label>

              {/* <!-- ここにもnav-inputがあり、上のinputとシンクロナイズする。nav-closeに黒幕を貼ってる -->
<!-- 黒幕のどこをクリックしても、nav-closeと紐づいてるので、チェックが入り、動作する --> */}
              <label
                className="nav-unshown"
                id="nav-close"
                htmlFor="nav-input"
              ></label>

              {/*---------- Hamburger 中身 -------------*/}
              <ul className="BurgerContent">
                {/* <BrowserRouter> */}
                <li className="BurgerContent__item">
                  <img src={logo} alt="" className="BurgerContent__item--img" />
                </li>
                <li className="BurgerContent__item">
                  <Link className="BurgerContent__item--link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link className="BurgerContent__item--link small" to="/service">
                    サービス・アフターサポート
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link className="BurgerContent__item--link" to="/Eco">
                    エコアクション
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link className="BurgerContent__item--link" to="/about">
                    店舗案内
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* <!-- Navigation --> */}
        <nav className="nav">
          <ul className="navWrap ">
            <li className="navWrap__item">
              <Link to="/" className="navWrap__item--link">
                HOME
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/service" className="navWrap__item--link">
                サービス・アフターサポート
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/Eco" className="navWrap__item--link">
                エコアクション
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/guide" className="navWrap__item--link">
                店舗案内
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/about" className="navWrap__item--link">
                MAZDA新車
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/about" className="navWrap__item--link">
                今月のキャンペーン
              </Link>
            </li>

            <li className="navWrap__item">
              <Link to="/about" className="navWrap__item--link">
                中古車
              </Link>
            </li>
          </ul>
        </nav>
        {/* pages  ここで定義してLinkタグを機能させる*/}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="eco" element={<Eco />}></Route>
          <Route path="guide" element={<Guide />}></Route>
        </Routes>
      </BrowserRouter>
    </>,
    reactRoot
  );
} else {
  console.log('no root found');
}

export default Header;
