import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import topic1 from '../../../../images/topic1.jpg';
import topic2 from '../../../../images/topic2.jpg';
import topic3 from '../../../../images/topic3.jpg';
import topic4 from '../../../../images/topic4.jpg';
import topic5 from '../../../../images/topic5.jpg';
import topic6 from '../../../../images/topic6.jpg';
import topic7 from '../../../../images/topic7.jpg';
import topic8 from '../../../../images/topic8.jpg';
import topic9 from '../../../../images/topic9.jpg';

// // -----------------------------------------
export const HomeTopic = () => {
  return (
    <>
      <section className="topic">
        <h2 className="commonTitle">TOPIC</h2>

{/*  */}
        <div className="topicWrap">

          <div className="topicWrap__card">
            <img
              src={topic1}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic2}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
            
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>

            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic3}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>

        
                <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
           
            </div>
          </div>

        </div>

{/*  */}
        <div className="topicWrap center">

          <div className="topicWrap__card">
            <img
              src={topic4}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic5}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic6}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

        </div>

{/*  */}
        <div className="topicWrap">

          <div className="topicWrap__card">
            <img
              src={topic7}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic8}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

          <div className="topicWrap__card">
            <img
              src={topic9}
              alt="topic card image"
              className="topicWrap__card--img"
            />
            <div className="topicWrap__card--padding">
              <h3 className="topicWrap__card--title">新着情報</h3>
              <p className="topicWrap__card--text">
                マツダオートザムにてご購入いただける、マツダの新車をご案内。
              </p>
              <p className="topicWrap__card--text small">
                一部取り扱いのない車両もございます。詳しくは店舗までお問い合わせください
              </p>
              <Link className="topicWrap__card--link" to="/topic">
                <div className="topicWrap__card--btn">
                  VIEW MORE
                  <span className="topicWrap__card--linkIcon">＞</span>
                  </div>
                </Link>
            </div>
          </div>

        </div>




      </section>
    </>
  );
};
