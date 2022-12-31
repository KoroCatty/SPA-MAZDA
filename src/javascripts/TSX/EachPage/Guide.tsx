// This file goes to PageRoute.jsx
import * as React from 'react';

import {GuideInfo} from "../Components/Guide/GuideInfo.jsx";
import {GuideCamp} from "../Components/Guide/GuideCampaign.jsx";
import {HomeAccess} from "../Components/Home/HomeAccess.jsx";





const Guide: React.FC = () => {

  return (
    <>
      <GuideInfo />
      <GuideCamp />
      <HomeAccess />
    </>
  );

};



{
}


export default Guide;
// Header.jsxでこのファイルを輸入する