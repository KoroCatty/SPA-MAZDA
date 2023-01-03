import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import guide1 from "../../../../images/guide1.jpg";
import guide2 from "../../../../images/guide2.jpg";



// // -----------------------------------------
export const GuideInfo = () => {
    return (
        <>
            <h1 className="commonTitle access">店舗案内</h1>

            <section className="guide">
                <h2 className="guideTitle">店舗情報</h2>

                {/*  */}
                <div className="guideInfo">
                    <div className="guideInfo__wrap">

                        <div className="guideInfo__wrapItem    mg_right">
                            <img src={guide1} alt="" className="guideInfo__wrapItem--img" />
                        </div>

                        <div className="guideInfo__wrapItem  ">
                            <h3 className="guideInfo__wrapItem--title">マツダオートザム</h3>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">住所</div>
                                <div className="guideInfo__wrapItem--right mt">〒424-0944 &nbsp;
                                    <span className="guideInfo__wrapItem--rightText">
                                        静岡県静岡市清水区菊池峰10-10
                                    </span>
                                </div>
                            </div>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">TEL</div>
                                <div className="guideInfo__wrapItem--right">054-353-4188</div>
                            </div>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">FAX</div>
                                <div className="guideInfo__wrapItem--right">054-353-4181</div>
                            </div>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">営業時間</div>
                                <div className="guideInfo__wrapItem--right">9:00〜18:00</div>
                            </div>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">定休日</div>
                                <div className="guideInfo__wrapItem--right">毎週水曜日、第2火曜日</div>
                            </div>
                            <div className="guideInfo__wrapItem--flex">
                                <div className="guideInfo__wrapItem--left">リンク</div>
                                <div className="guideInfo__wrapItem--right">Googleビジネスプロフィール</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="guideInfo">
                    <div className="guideInfo__wrap reverse">

                        <div className="guideInfo__wrapItem">
                            <img src={guide2} alt="" className="guideInfo__wrapItem--img" />
                        </div>

                        <div className="guideInfo__wrapItem mg_right">
                            <h3 className="guideInfo__wrapItem--title">サービス工場</h3>
                            <p className="guideInfo__wrapItem--text">
                                車検、点検はもちろん、お車に関する様々なお困りごと、相談ごと<br className="NoBreak"/>
                                何でもご相談ください！<br />
                                当店のサービススタッフは全員が国家自動車整備士資格を保有し、<br className="NoBreak"/>
                                また、長年の経験をもとに、お客様にベストなご提案をさせて頂きます。<br />
                                お客様に安心、安全をお届けする事を常に心掛け、<br className="NoBreak"/>
                                「ここに任せて良かった。車の事は全てお任せしたい」<br className="NoBreak"/>
                                <span className="guideInfo__wrapItem--text--narrow">
                                    そんなお声を多くのお客様から頂ける様、精一杯ご対応させて頂きます。<br className="NoBreak"/></span>
                                皆様のご来店、心よりお待ち申し上げます。
                            </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};
