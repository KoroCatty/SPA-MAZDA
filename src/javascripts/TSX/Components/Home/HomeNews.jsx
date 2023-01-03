import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import '../../../main.js';

// import { useState } from 'react';
// const [name, setName] = useState(true);



// // -----------------------------------------
export const HomeNews = () => {
  return (
    <>

      {/* <!--  新着情報--> */}
      <section className="news">
        <div className="newsContainer">
          <h2 className="commonTitle">新着情報</h2>

          <div className="newsBtn">
            <Link className="newsBtn__link" to="/guide">
              <span className="">VIEW ALL &nbsp; &nbsp; &nbsp; ＞</span></Link>
          </div>



          <div className="news__wrap">
            {/*  */}
            <ul className="news__row news__row--top">
              <ul className="news__row DateHeading">
                <li className="news__date">2022.07.01</li>
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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
                <li className="news__heading  news__heading--important">クルマ・技術</li>
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

// {
//   const getPosts = "https://rk-nihongo.com/wp-json/wp/v2/posts?_embed&per_page=10"

//   fetch(getPosts).then(
//     response => {
//       return response.json(); // get JSON data$
//     }).then(data => {
  
//   for (let i = 0; i < data.length; i++) {
    
//       var date2 = new Date(data[i].date);
//       var year = date2.getFullYear();
//       var month = date2.getMonth() + 1;
//       var day = date2.getDate();
  
//       // li tag
//       viewPosts.innerHTML += '<li class="posts">' // contentwrapper
  
//       // a tag
//       + '<a href="' + data[i].link + '" class="linkID_' + data[i].id +'">'
  
//   // img tag
//       + '<img src="' + data[i]._embedded["wp:featuredmedia"][0].source_url + '" alt="' + data[i].title.rendered +'">'
//   //  time tag
  
//      + '<time class="postTime dfont" itemprop="datePublished" datetime="' + data[i].date + '">' + year + '年' + month + '月' + day + '日' + '</time>'
  
//     //  p tag
//       + '<p class="postTitle">' + data[i].title.rendered + '</p>'
//       + '</a>' // href end
//       + '</li>' // end content
//     }
  
//   }).catch(err => {
//     // Do something with error here
//     console.log('Error: ' + err)
//   })



// }