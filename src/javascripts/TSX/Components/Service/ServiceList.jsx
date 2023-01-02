import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import service1 from "../../../../images/service1.jpg";
import service2 from "../../../../images/service2.jpg";
import service3 from "../../../../images/service3.jpg";
import service4 from "../../../../images/service4.jpg";
import service5 from "../../../../images/service5.jpg";
import service6 from "../../../../images/service6.jpg";
import service7 from "../../../../images/service7.jpg";

// // -----------------------------------------
export const ServiceList = () => {
  return (
    <>

      <h1 className="commonTitle serviceList">サービス・アフターサポート</h1>

      <section className="service">

        <h2 className="serviceTitle">サービス一覧</h2>

        <div className="serviceWrap">
          {/*  1 */}
          <div className="serviceItem">
            <img src={service1} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>
              <div className="serviceItem__info--btn">
                <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
              </div>
            </div>
          </div>

          {/* 2  */}
          <div className="serviceItem">
            <img src={service2} alt="" className="serviceItem__img" />

            <div className="wrapper">
              <div className="serviceItem__info extra">
                <h3 className="serviceItem__info--title">点検</h3>
                <p className="serviceItem__info--text mid">
                  ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。
                </p>
                <div className="serviceItem__info--btn BottomLine">
                  <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
                </div>
              </div>

              <div className="serviceItem__info extra">
                <h3 className="serviceItem__info--title small">新車６ヶ月点検</h3>
                <p className="serviceItem__info--text mid">
                  ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。
                </p>
                <div className="serviceItem__info--btn BottomLine">
                  <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
                </div>
              </div>

              <div className="serviceItem__info extra">
                <h3 className="serviceItem__info--title small">マツダセーフティーチェック</h3>
                <p className="serviceItem__info--text mid">
                  ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。
                </p>
                <div className="serviceItem__info--btn BottomLine">
                  <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
                </div>
              </div>

              <div className="serviceItem__info extra">
                <h3 className="serviceItem__info--title small">法定１２ヶ月点検</h3>
                <p className="serviceItem__info--text mid">
                  ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。
                </p>
                <div className="serviceItem__info--btn BottomLine">
                  <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
                </div>
              </div>

            </div>

          </div>
          {/* 3  */}
          <div className="serviceItem">
            <img src={service3} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>

              <div className="serviceItem__info--btn">
                <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
              </div>
            </div>
          </div>
          {/* 4  */}
          <div className="serviceItem">
            <img src={service4} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>

              <div className="serviceItem__info--btn">
                <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
              </div>
            </div>
          </div>
          {/* 5  */}
          <div className="serviceItem">
            <img src={service5} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>

              <div className="serviceItem__info--btn">
                <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
              </div>
            </div>
          </div>
          {/* 6  */}
          <div className="serviceItem">
            <img src={service1} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>

            </div>
          </div>
          {/* 7  */}
          <div className="serviceItem">
            <img src={service7} alt="" className="serviceItem__img" />

            <div className="serviceItem__info">
              <h3 className="serviceItem__info--title">マツダジャストフィット車検</h3>
              <p className="serviceItem__info--text">
                ディーラーならではの確かな技術をベースに、お客様のご要望に応じて内容を自由に選べる安心、納得のディーラー車検です。<br />
                保安基準に適合しているかの検査だけでなく、法令で定められている２４ヶ月点検を確実に実施していますので、安心してお乗りいただくことができます*１。（整備保証付き）
                *１：点検項目は車種や構造、使用状況で異なります。
              </p>

              <div className="serviceItem__info--btn">
                <Link className="serviceItem__info--btnLink" to="/guide">VIEW ALL<span className="serviceItem__info--btnLink--arrow ">＞</span></Link>
              </div>
            </div>
          </div>




        </div>


      </section>
    </>
  );
};