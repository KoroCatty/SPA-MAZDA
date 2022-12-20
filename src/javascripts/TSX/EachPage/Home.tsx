// This file goes to Header.jsx
import * as React from 'react';

import {HomeMV} from "../Components/Home/HomeMV.jsx";
import {HomeNews} from "../Components/Home/HomeNews.jsx";
import {HomeTopic} from "../Components/Home/HomeTopic.jsx";
import {HomeChirashi} from "../Components/Home/HomeChirashi.jsx";
import {HomeAccess} from "../Components/Home/HomeAccess.jsx";





const Home: React.FC = () => {

  return (
    <>
      <HomeMV />
      <HomeNews />
      <HomeTopic />
      <HomeChirashi />
      <HomeAccess />
 



    </>
  );

};



{
}


export default Home;
// Header.jsxでこのファイルを輸入する