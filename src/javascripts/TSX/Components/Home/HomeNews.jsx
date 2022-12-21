import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// // -----------------------------------------
export const HomeNews = () => {
  return (
    <>
      {/* <!--  新着情報--> */}
      <section className="news">
        <div className="newsContainer">
          <h2 className="commonTitle">新着情報</h2>

          <div className="newsBtn">
            <Link className="newsBtn__link" to="/guide">VIEW ALL 
            <span className=""> ＞</span></Link>
          </div>

          <div className="news__wrap">
            {/*  */}
            <ul className="news__row news__row--top">
              <li className="news__date">2022.07.01</li>
              <li className="news__heading  news__heading--important">重要</li>
              <li className="news__text">
                夏季休業のお知らせ
                <br />
                お取引先様にはご迷惑をお掛けする事と存じますが、
                何卒ご高配を賜ります様お願い申し上げます。 詳しくは
                <a href="" className="news__text--link">
                  こちら
                </a>
              </li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2021.03.18</li>
              <li className="news__heading">お知らせ</li>
              <li className="news__text">
                大阪府大阪市港区に大阪支社設立営業開始
                <br />
                台形ねじを中心に良いサービスを提案していきますので応援お願いいたします。
              </li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2021.02.05</li>
              <li className="news__heading">お知らせ</li>
              <li className="news__text">
                株式会社ノムラのウェブサイトがリニューアル致しました。
                <br />
                サイト更新しました。
              </li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2019.08.10</li>
              <li className="news__heading">お知らせ</li>
              <li className="news__text">
                当社に発注頂いたお客様からのご相談受付開始
              </li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2018.09.18</li>
              <li className="news__heading news__heading--important">重要</li>
              <li className="news__text">大阪市西区にネジ倉庫開設</li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2018.04.16</li>
              <li className="news__heading">お知らせ</li>
              <li className="news__text">
                みなさまのご尽力に感謝いたします
                <br />
                おかげ様で会社設立100周年を迎えることができました。ありがとうございます。
              </li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2017.10.20</li>
              <li className="news__heading news__heading--important">重要</li>
              <li className="news__text">大阪市西区にネジ倉庫開設</li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2017.10.20</li>
              <li className="news__heading news__heading--important">重要</li>
              <li className="news__text">ネジの倉庫開設</li>
            </ul>
            {/*  */}
            <ul className="news__row ">
              <li className="news__date">2017.10.20</li>
              <li className="news__heading news__heading--important">重要</li>
              <li className="news__text">大阪市西区にネジ倉庫開設</li>
            </ul>
          </div>

          <div className="newsRight"></div>
        </div>
      </section>
    </>
  );
};
