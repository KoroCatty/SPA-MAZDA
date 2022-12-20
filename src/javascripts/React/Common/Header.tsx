// // This Page wouldn't work for pageRouting



// import * as React from "react";
// import ReactDom from 'react-dom';
// // export { React };

// // import logo from "../../../../images/top_k_logo.png";
// // import gitHubIcon from "../../../../images/icons/icon_github.svg";
// // import facebookIcon from "../../../../images/icons/icon_facebook.svg";
// // import youtubeIcon from "../../../../images/icons/icon_youtube.svg";



// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// // Error
// // import Home from "../EachPage/Home";
// // import About from "../EachPage/About";
// // -----------------------------------------
// const reactRoot = document.getElementById('Header');
// if (reactRoot) {
//     ReactDom.render(
//         <>

//             <nav className="navGroup">

//                 <ul className="navRight">


//                     <BrowserRouter>
//                         <li className="navRight__menu">
//                             <Link to="/" className='navRight__menu--link'>Home
//                             </Link>
//                             {/* <!-- hidden Menu  --> */}
//                             <ul className="navRight__hidden">
//                                 <li className="navRight__hidden--item">
//                                     <Link to="aaa" className='navRight__menu--link'>aaa
//                                     </Link>
//                                 </li>
//                                 <li className="navRight__hidden--item">
//                                     <Link to="bbb" className='navRight__menu--link'>bbbb
//                                     </Link>
//                                 </li>
//                                 <li className="navRight__hidden--item">
//                                     <Link to="ccc" className='navRight__menu--link'>ccc
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </li>

//                         <li className="navRight__menu"><Link to="about" className='navRight__menu--link'>about</Link>
//                         </li>





//                         {/* Pages  */}
//                         <li className="routeItem"><Link to="/" className='routeItem__link'
//                         //  onClick={() => window.location.reload(true)}
//                         >Home</Link>
//                         </li>

//                         <li className="routeItem"><Link to="about" className='routeItem__link' >About</Link>
//                         </li>

//                         {/* pages  */}
//                         {/* <Routes>
//                             <Route path="/" element={<Home />}></Route>
//                             <Route path="about" element={<About />}></Route>
//                         </Routes> */}

//                     </BrowserRouter>





//                 </ul>
//             </nav>
//             {/* <!-- .navGroup --> */}
//         </>,
//         reactRoot);
// } else {
//     console.log("no root found");
// }

// // export default Header;


// {
//     // Hamburger
//     //   const open = document.getElementById('open');
//     //   const overlay = document.querySelector('.hamburger__overlay');

//     //   const close = document.getElementById("close");


//     //   //id= openのタグがクリックされたら実行
//     //   open.addEventListener('click', () => {
//     //     overlay.classList.add("show"); //CSSでこのshowのクラスを作って,このクラスをクリックした時追加する

//     //     open.classList.add("hide"); //hideとういうクラスを追加する
//     //   });

//     //   //closeタグがクリックされたら実行
//     //   close.addEventListener('click', () => {
//     //     overlay.classList.remove("show"); //追加されたクラスを取り除く

//     //     open.classList.remove("hide"); ///追加されたクラスを取り除く
//     //   });
// }
