import * as React from "react";
import ReactDom from 'react-dom';


import footer_icon from "../../../images/footer_img.jpg";
import footer_icon2 from "../../../images/guide1.jpg";
import sns_insta from "../../../images/sns_insta.svg";
import sns_line from "../../../images/sns_line.svg";


// import logo from "../../../../images/top_k_logo.png";
// import gitHubIcon from "../../../../images/icons/icon_github.svg";
// import facebookIcon from "../../../../images/icons/icon_facebook.svg";
// import youtubeIcon from "../../../../images/icons/icon_youtube.svg";


// 3rd party 
import styled from 'styled-components';// For Original CSS each component


// 1. オリジナルＣＳＳ
const CONTACT = styled.div`
 background-color: #000000;
 color: white;
 font-weight: 800;
 text-align: center;
 padding-top: 16px;
 border-top: 1px solid rgb(164, 164, 164);

 &:hover {
    border-top: 1px solid rgb(255, 255, 255);
    box-shadow: 1px 1px 8px white;
 }

`;

const CP = styled.div`
 background-color: #000000;
 color: white;
 font-weight: 800;
 text-align: center;
 padding: 16px;
`;

// -----------------------------------------
const reactRoot = document.getElementById('Footer');
if (reactRoot) {
    ReactDom.render(
        <>
            <footer className="footer">

                <div className="footerInfo__wrap">
                    <div className="footerInfo">

                        <div className="footerInfo__logoTitle">
                            <img src="" alt="" className="footerInfo__logoTitle--img" />
                            <div className="footerInfo__logoTitle--text">マツダオートザム
                                <p className="footerInfo__logoTitle--text small">
                                    MAZDA AUTOZAM SHIMIZU
                                </p>
                            </div>
                        </div>

                        <div className="footerInfo__calendar">
                            <div className="footerInfo__calendarApp"></div>
                            <img src={footer_icon2} alt="" className="" />
                        </div>
                    </div>
                </div>

                <div className="footerMenu">
                    <div className="footerMenu__wrap">

                        <div className="footerMenu__item flex">
                            <img src={footer_icon} alt="" className="footerMenu__item--img flex" />
                            <div className="footerMenu__item--square">企業情報</div>
                        </div>

                        <div className="footerMenu__item flex">
                            <img src={footer_icon} alt="" className="footerMenu__item--img" />
                            <div className="footerMenu__item--square">お問い合わせ</div>
                        </div>

                        <div className="footerMenu__item">
                            <img src={footer_icon2} alt="" className="footerMenu__item--img onlyImg" />
                        </div>

                        <div className="footerMenu__item">
                            <div className="footerMenu__item--square">所有権解除</div>
                        </div>

                    </div>
                </div>


                <div className="footerSNS">
                    <div className="footerSNS__item">
                        <img src={sns_insta} alt="" className="footerSNS__item--img" />
                        <p className="footerSNS__item--text">@rk.website</p>
                    </div>
                    
                    <div className="footerSNS__item second">
                    <img src={sns_line} alt="" className="footerSNS__img" />
                        <p className="footerSNS__item--text">友達登録はこちら</p>
                    </div>

                    
                </div>







            </footer>






            <CONTACT>
                <div className="footerContact">
                    <h3 className="footerContact__email">Email: kojima.website@gmail.com</h3>
                    <p className="">Made by React</p>
                </div>

                <CP>
                <p>Copyright ©2022 RK-WEB-DESIGN | All Rights Reserved. </p>
            </CP>

            </CONTACT>

          

        </>,
        reactRoot);
} else {
    console.log("no root found");
}


{


}
