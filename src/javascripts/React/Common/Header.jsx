// EachPageを輸入してページ遷移させるページ

import * as React from 'react';
import ReactDom from 'react-dom';

// 各ページ
import Home from '../../TSX/EachPage/Home.tsx';
import About from '../../TSX/EachPage/About.tsx';
import Service from '../../TSX/EachPage/Service.tsx';
import Eco from '../../TSX/EachPage/Eco.tsx';
import Guide from '../../TSX/EachPage/Guide.tsx';

// IMG
import logo from '../../../images/logo.png';
import Phone from '../../../images/phone_icon.svg';
import Map from '../../../images/map_icon.svg';
import Email from '../../../images/email_icon.svg';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// <Link>タグが押されたらページトップに移動
function ChangePageTop() {
  window.scroll(0, 0); // ページの一番上に移動
}

// Close burger menu when you press button
function CloseBurger() {
  const ccc = document.querySelector('#nav-close');
  const ddd = document.querySelector('.nav-unshown');
  const fff = document.querySelector(
    '.navDrawer__input:checked ~ .BurgerContent'
  );

  // input内の checkedをfalseに変える
  ccc.checked = false;
  ddd.checked = false;
  fff.checked = false;

  // Change burger Icon shape
  const Burger = document.querySelector('.BurgerIcon');
  Burger.classList.toggle('disappear');
}

// Change burger Icon shape function
function ChangeShape() {
  const Burger = document.querySelector('.BurgerIcon');
  Burger.classList.toggle('disappear');
}

// -----------------------------------------
const reactRoot = document.getElementById('Header');
if (reactRoot) {
  ReactDom.render(
    <>
      <BrowserRouter>
        {/*  */}
        {/* FooterのTopへ戻るボタンでこのidまで飛んでくる */}
        <header className="header" id="scroll__top">
          <div className="headerWrap">
            <div className="headerLogo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="headerTitle">
              <h1 className="headerTitle__top">マツダオートザム清水</h1>
              <p className="headerTitle__bottom">MAZDA AUTOZAM SHIMIZU</p>
            </div>

            <div className="headerContact">
              <div className="headerContact__phone">
                <p className="headerContact__phone--num">
                  <img src={Phone} alt="" className="phoneIcon" />
                  054-353-4188
                </p>
                <p className="headerContact__phone--hours">
                  営業時間 9:00～19:00
                </p>
              </div>

              <div className="headerContact__bar"></div>

              <div className="headerContact__detail">
                <div className="headerContact__detail--email">
                  <img src={Email} alt="" className="emailIcon" />
                  お問い合わせ
                </div>
                <div className="headerContact__detail--access">
                  <img src={Map} alt="" className="mapIcon" />
                  アクセス
                </div>
              </div>
            </div>

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
              <label id="nav-open" htmlFor="nav-input" onClick={ChangeShape}>
                <span className="BurgerIcon"></span>
              </label>

              {/* <!-- ここにもnav-inputがあり、上のinputとシンクロナイズする。nav-closeに黒幕を貼ってる -->
<!-- 黒幕のどこをクリックしても、nav-closeと紐づいてるので、チェックが入り、動作する --> */}
              <label
                className="nav-unshown"
                id="nav-close"
                htmlFor="nav-input"
                onClick={ChangeShape}
              ></label>

              {/*---------- Hamburger 中身 -------------*/}
              <ul className="BurgerContent">
                {/* <BrowserRouter> */}
                <li className="BurgerContent__item">
                  <img src={logo} alt="" className="BurgerContent__item--img" />
                </li>
                <li className="BurgerContent__item">
                  <Link
                    className="BurgerContent__item--link"
                    to="/"
                    onClick={() => {
                      ChangePageTop();
                      CloseBurger();
                    }}
                  >
                    HOME
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link
                    className="BurgerContent__item--link small"
                    to="/service"
                    onClick={() => {
                      ChangePageTop();
                      CloseBurger();
                    }}
                  >
                    サービス・アフターサポート
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link
                    className="BurgerContent__item--link"
                    to="/Eco"
                    onClick={() => {
                      ChangePageTop();
                      CloseBurger();
                    }}
                  >
                    エコアクション
                  </Link>
                </li>
                <li className="BurgerContent__item">
                  <Link
                    className="BurgerContent__item--link"
                    to="/guide"
                    onClick={() => {
                      ChangePageTop();
                      CloseBurger();
                    }}
                  >
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
