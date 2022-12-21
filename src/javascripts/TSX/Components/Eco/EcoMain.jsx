import * as React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import ecoAction from "../../../../images/ecoAction.svg";
import ecoMain from "../../../../images/eco_main.svg";


// // -----------------------------------------
export const EcoMain = () => {
    return (
        <>
            <section className="ecoTitle">
                <h1 className="commonTitle">エコアクション</h1>
            </section>
            {/*  */}
            <main className="eco ">
                <div className="ecoFirst">
                    <h2 className="ecoTitle--small">エコアクション２１への取り組み</h2>
                    <img src={ecoMain} alt="" className="ecoImg" />
                    <p className="ecoText">
                        こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。<br />
                        こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。 こんにちは。
                    </p>
                </div>


                <h2 className="ecoPolicy">環境経営方針</h2>
                <h3 className="ecoSlogan">環境経営理念</h3>

                {/*  */}
                <div className="ecoSecond">
                    <p className="ecoSecond__text">
                        こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。
                    </p>
                    <img src={ecoAction} alt="" className="ecoImg" />
                </div>


                <h3 className="ecoBiz">基本方針</h3>
                {/*  */}
                <div className="ecoThird">
                    <p className="ecoThird__text">
                        こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                    </p>

                    <ul className="ecoThird__item">
                        <h3 className="ecoThird__item--title">1. 二酸化炭素</h3>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                    </ul>

                    <ul className="ecoThird__item">
                        <h3 className="ecoThird__item--title">   1. 二酸化炭素</h3>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                        <li className="ecoThird__item--text">こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは。こんにちは
                        </li>
                    </ul>


                    <div className="ecoSignature">
                        <time className="ecoSignature__time">平成２８年１月１日</time>
                        <p className="ecoSignature__text">aaaaaa</p>
                        <p className="ecoSignature__text">aaaaaa</p>

                        <div className="ecoSignature__btn">
                            <Link className="ecoSignature__btn--link" to="/guide">VIEW ALL<span className="ecoSignature__btn--link--arrow ">＞</span></Link>
                        </div>
                    </div>

                </div>



            </main>

        </>
    );
};