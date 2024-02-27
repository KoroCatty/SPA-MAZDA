import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import campaign from '../../../../images/campaign.png';
import campaign2 from '../../../../images/campaign2.png';
import campaign3 from '../../../../images/campaign3.png';
import campaign4 from '../../../../images/campaign4.png';

// // -----------------------------------------
export const GuideCamp = () => {
  return (
    <>
      <section className="GuideCamp">
        <h2 className="GuideCamp__title">今月のキャンペーン</h2>

        <div className="GuideCamp__wrap">
          <div className="GuideCamp__wrapItem">
            <img src={campaign} alt="" className="GuideCamp__wrapItem--img" />
            <h1 className="GuideCamp__wrapItem--title">
              マツダオートザム清水のはじめて車検
            </h1>
            <p className="GuideCamp__wrapItem--caption">
              マツダオートザム清水夏のキャンペーン
            </p>
          </div>
          <div className="GuideCamp__wrapItem">
            <img src={campaign2} alt="" className="GuideCamp__wrapItem--img" />
            <h1 className="GuideCamp__wrapItem--title">
              マツダオートザム清水のはじめて車検
            </h1>
            <p className="GuideCamp__wrapItem--caption">
              マツダオートザム清水夏のキャンペーン
            </p>
          </div>
        </div>

        <div className="GuideCamp__wrap ">
          <div className="GuideCamp__wrapItem">
            <img src={campaign3} alt="" className="GuideCamp__wrapItem--img" />
            <h1 className="GuideCamp__wrapItem--title">
              マツダオートザム清水のはじめて車検
            </h1>
            <p className="GuideCamp__wrapItem--caption">
              マツダオートザム清水夏のキャンペーン
            </p>
          </div>
          <div className="GuideCamp__wrapItem">
            <img src={campaign4} alt="" className="GuideCamp__wrapItem--img" />
            <h1 className="GuideCamp__wrapItem--title">
              マツダオートザム清水のはじめて車検
            </h1>
            <p className="GuideCamp__wrapItem--caption">
              マツダオートザム清水夏のキャンペーン
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
