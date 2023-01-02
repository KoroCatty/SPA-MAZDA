import * as React from 'react';
import ReactDom from 'react-dom';

// 3rd Party 
// import * as Scroll from 'react-scroll';
import { Link as Scroll } from "react-scroll"; // 3rd party


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import ecoAction from "../../../../images/ecoAction.svg";
import ecoMain from "../../../../images/eco_main.svg";


// // -----------------------------------------
export const EcoMain = () => {
    return (
        <>

    {/* 記事のスクールの数により都度増やしていく */}
    <ul className="">
        {/* <li><Link to="scroll__1" smooth={true}
            duration={600} offset={-30}>① エディターのインストール</Link>
        </li> */}

        <li>
          <Scroll to="scroll__2" smooth={true}
            duration={200} offset={-30}>② HTML、CSSファイルの作成</Scroll>
        </li>
      </ul>








            <section className="ecoTitle">
                <h1 className="commonTitle">エコアクション</h1>
            </section>
            {/*  */}
            <main className="eco ">
                <div className="ecoFirst">
                    <h2 className="ecoTitle--small">エコアクション２１への取り組み</h2>
                    <img src={ecoMain} alt="" className="ecoImg" />
                    <p className="ecoText">
                        エコアクション21は、中小事業者等の環境への
取組を促進するとともに、
その取組を効果的、効率的に実施するため、環境省が
策定した日本独自の環境マネジメントシステムであり、
環境にやさしい経営の取組みに対して審査し、
認証を与える制度です。
当社では、以下を環境経営方針として、
2016年から目標設定して取り組んでいます。
                    </p>
                </div>


                <h2 className="ecoPolicy">環境経営方針</h2>
                <h3 className="ecoSlogan">環境経営理念</h3>

                {/*  */}
                <div className="ecoSecond">
                    <p className="ecoSecond__text">
                    株式会社市川自動車は、自動車整備・販売の
業務を通じて温暖で自然豊かな
地域環境、さらには地球規模の環境を守るため、
常に環境に配慮した事業活動に努め、環境と調和した
経済発展に寄与する企業を目指します。
                    </p>
                    <img src={ecoAction} alt="" className="ecoImg" />
                </div>


                <h3 className="ecoBiz">基本方針</h3>
                {/*  */}
                <div className="ecoThird">
                    <p className="ecoThird__text">
                    当社は環境理念に基づき、以下の基本方針を定め、
環境経営を継続的に改善します。
                    </p>

                    <ul className="ecoThird__item">
                        <h3 className="ecoThird__item--title">1. 二酸化炭素排出量、廃棄物排出量、総排水量
の削減、化学物質等の適正管理に努めます。</h3>
                        <li className="ecoThird__item--text">① 電気、軽油、ガソリン等の使用量削減に努めます。
                        </li>
                        <li className="ecoThird__item--text">② ３R活動の展開による廃棄物の削減に努めます。
                        </li>
                        <li className="ecoThird__item--text">③ 節水活動による水使用量の削減に努めます。
                        </li>
                    </ul>

                    <ul className="ecoThird__item">
                        <h3 className="ecoThird__item--title">   2. 環境関連法規制等の遵守</h3>
                        <li className="ecoThird__item--text">・ 環境関連法規制を遵守します。
                        </li>
 
                    </ul>


                    <div className="ecoSignature">
                        <time className="ecoSignature__time">平成２８年１月１日
</time>
                        <p className="ecoSignature__text">株式会社市川自動車　マツダオートザム清水</p>
                        <p className="ecoSignature__text">代表取締役社長　市川哲也</p>

                        <div className="ecoSignature__btn">
                            <Link className="ecoSignature__btn--link" to="/#top">環境経営レポート<span className="ecoSignature__btn--link--arrow ">＞</span></Link>
                        </div>
                    </div>

                </div>


                <div id="scroll__1">aaaaaaa</div>
                <div id="scroll__2">aaaaaaa</div>
            </main>

        </>
    );
};