// import '../stylesheets/main.scss';

// Import component parts
// import './TypeScript/TSX/Parts/Header.tsx';
// import './TypeScript/TSX/Parts/Footer.tsx';
// import './TypeScript/TSX/Parts/About/AboutBg.tsx';

// import jQuery from "jquery";
// import $ from 'jquery';

// Hamburger menu
// 'use strict'
// const open = document.getElementById('open');
// const overlay = document.querySelector('.hamburger__overlay');

// const close = document.getElementById("close");

// //id= openのタグがクリックされたら実行
// open.addEventListener('click', () => {
//   overlay.classList.add("show"); //CSSでこのshowのクラスを作り,このクラスをクリックした時追加

//   open.classList.add("hide"); //hideとういうクラスを追加する
// });

// //closeタグがクリックされたら実行
// close.addEventListener('click', () => {
//   overlay.classList.remove("show"); //追加されたクラスを取り除く

//   open.classList.remove("hide"); ///追加されたクラスを取り除く
// });

// // Switch Color
// const langEl = document.querySelector('.langWrap');
// const link = document.querySelectorAll('.langWrap__switch');

// const titleEl = document.querySelector('.title__about');
// const descrEl = document.querySelector('.description__about');

// link.forEach(el => {
//   el.addEventListener('click', () => {
//     langEl.querySelector('.active').classList.remove('active');
//     el.classList.add('active');

//     const attr = el.getAttribute('language');

//     // innerHTMLは<br>などの情報も出力することができる
//     titleEl.textContent = data[attr].title__about;
//     descrEl.innerHTML = data[attr].description__about;
//   });
// });

// // Switch Language
// const data = {
//   "japanese":
//   {
//     "title__about": "はじめまして！！小嶋と申します。",
//     "description__about":
//       `美容師学校卒業後、美容師にならず会社員として進んでいくということを決断。その後工場勤務、IT会社勤務、海運業で勤務の三業種に携わったのち、オーストラリアへ渡航し4年程現地に在住。
//       <br>
//       現地では工場、バイクの倉庫で業務に従事し、移民として暮らす文化の違いや言語の壁を乗り越えての就職、色々な文化を持つグローバルな環境のチームで働く経験をする。
//       <br>
//       以前から興味が少しあったwebサイトのコーディングを一人の友人から教わった際に、一から何かを作り上げていくという創造性、モノづくりを心の底からおもしろいと思った事をきっかけに、その一週間後には現地のオンラインスクールに応募。
//       <br>
//       ビデオ講義などのない一年間の完全オンラインのディプロマ取得の為のコースでしたが、HTML、CSS、JavaScriptをメインにPHPも少し含まれたコースで、プログラミングとは何かということを学びました。（こちらのコースは現在廃止）
//       <a style="color:blue" target="blank" href="https://k-works.netlify.app/diploma.html">コース詳細</a>
//       <br>
//       <br>
//       長崎県生まれ大阪育ち。家でまったりする事が好きで、２匹のネコに癒されるのが趣味です。他には音楽でロック系のドラム演奏動画を作っていたことがあります。
//       <br>
//       資格は、貿易実務検定C級、TOEIC700点、翻訳入門コース修了証、ICT50615-Diploma of Website Development-など保有しております。`
//   },
//   "english":
//   {
//     "title__about": "Hi, I am Kojima, nice to meet you!!",
//     "description__about":
//       //　バッククォートで囲むこと。
//       ` I graduated from hairdressing & beauty school in 2008 and worked as a beautician before I transitioned to become a customs broker. Over several years, I worked in three different industries: manufacturing, IT, and logistics(Shipping). I moved to Australia in 2017 where I lived with my wife for four years, during this time working in various factories and warehouses. <br>
//       In my spare time I learned how to do coding for websites and gained interest in the area. I was especially interested in the creativity and planning to create something customised from scratch. It made me decide to further my education and after 1 year, I obtained a Web Development Diploma with focus on HTML, CSS, and JavaScript, which included some backend such as PHP.
//       <a style="color:blue" target="blank" href="https://k-works.netlify.app/diploma.html">Course details</a>
//       <br>
//       <br>
//       I was born in Nagasaki prefecture and raised in Osaka. I enjoy chilling out at home and being healed by my two cats. I have also made several Youtube videos playing rock music on the drums.<br>
//       My qualifications include Japan Trading Business Test C grade, TOEIC 700 points, and ICT50615 (Diploma of Website Development).`
//   }

// }
