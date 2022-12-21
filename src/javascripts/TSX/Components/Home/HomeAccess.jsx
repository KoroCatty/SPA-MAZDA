import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import chirashi1 from "../../../../images/chirashi.jpg";
import chirashi2 from "../../../../images/chirashi2.jpg";
// // -----------------------------------------
export const HomeAccess = () => {
  return (
    <>
    <section className="access">
        <h2 className="commonTitle access">ACCESS</h2>

{/* GOOGLE MAPS */}
      <iframe className="googleMap" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831438.4633080976!2d139.2093859239077!3d35.50906267435473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2z5pel5pys44CB5p2x5Lqs6YO9!5e0!3m2!1sja!2sau!4v1671573505979!5m2!1sja!2sau"></iframe>
    </section>
    </>
  );
};
