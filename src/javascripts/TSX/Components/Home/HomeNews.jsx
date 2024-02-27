import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const HomeNews = () => {
  return (
    <>
      {/* <!--  新着情報--> */}
      <section className="news">
        <div className="newsContainer">
          <h2 className="commonTitle">新着情報</h2>

          <div className="newsBtn">
            <Link className="newsBtn__link" to="/guide">
              <span className="">VIEW ALL &nbsp; &nbsp; &nbsp; ＞</span>
            </Link>
          </div>

          <div className="news__wrap">
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                夏季休業のお知らせ
                <br />
                お取引先様にはご迷惑をお掛けする事と存じますが、
                何卒ご高配を賜ります様お願い申し上げます。 詳しくは
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">
                  クルマ・技術
                </li>
              </ul>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
              <li className="news__arrow"> ＞ </li>
            </ul>
          </div>
          <div className="newsRight"></div>
        </div>
      </section>
    </>
  );
};