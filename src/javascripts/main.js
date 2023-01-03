import '../stylesheets/main.scss';
// import './slider.js';
// import './lang.js';

// ページ毎のcomponent parts
// import './TSX/Components/Home/HomeMV.jsx';


// Import Common component parts
import './React/Common/Header.jsx';
import './React/Common/Footer.jsx';
// import './React/Common/Header.tsx';

// import './TypeScript/TSX/Parts/Header.jsx';
// import './TypeScript/TSX/Parts/Home/HomeMv.jsx';

// import './TypeScript/TSX/Parts/Home/HomeService.jsx';
// import './TypeScript/TSX/Parts/Home/HomeWorks.jsx';
// import './TypeScript/TSX/Parts/Home/HomeProcess.tsx';
// import './TypeScript/TSX/Parts/Home/HomeQuestion.jsx';
// import './TypeScript/TSX/Parts/Home/HomeBlog.tsx';
// import './TypeScript/TSX/Parts/Home/HomeContact.tsx';


// generate weird files 
// import jQuery from "jquery";
// import $ from 'jquery';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css'; // 追加
// import 'slick-carousel/slick/slick-theme.css'; // 追加





  // Wordpress API 取得し、Header.jsxで読み込ませる
//   setTimeout(BlogPopUp, 1000);
// BlogPopUp();
//   function BlogPopUp() {
//     const getPosts = "https://rk-nihongo.com/wp-json/wp/v2/posts?_embed&per_page=3"
  
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
//   }
