import * as React from 'react';
import ReactDom from 'react-dom';

import { useState } from 'react';

export const HomeQuestion = () => {
  /* state変数を定義する↓  copied*/
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <h1 className={active ? 'red' : ''}>Hello, world!</h1>

      <div
        className={
          active
            ? 'questionAccordion__block appear'
            : 'questionAccordion__block'
        }
      >
        <dt className="questionAccordion__block--Q" onClick={classToggle}>
          How long does it take to make website pages?
        </dt>
        <dd className="questionAccordion__block--A">
          {/* <!-- <img src="../images/2.jpg"> --> */}
          <p className="questionAccordion__block--Atext">
            If it is 5 pages for corporate website, it will be around 4weeks up
            to 6 weeks depending on what functionality implemented.
          </p>
        </dd>
      </div>
    </>
  );
};
