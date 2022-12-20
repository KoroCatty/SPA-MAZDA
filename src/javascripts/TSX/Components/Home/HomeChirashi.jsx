import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import chirashi1 from "../../../../images/chirashi.jpg";
import chirashi2 from "../../../../images/chirashi2.jpg";
// // -----------------------------------------
export const HomeChirashi = () => {
  return (
    <>
 <section className="chirashi">
    <h2 className="commonTitle chirashi">CHIRASHI</h2>
    <p className="chirashiTitle">最新の折込チラシのご紹介</p>


<div className="chirashiBox">
    <div className="chirashiBox__item">
        <img src={chirashi1} alt="" className="chirashiBox__item--img" />
    </div>
    <div className="chirashiBox__item right">
        <img src={chirashi2} alt="" className="chirashiBox__item--img" />
    </div>
</div>


 </section>
    </>
  );
};
