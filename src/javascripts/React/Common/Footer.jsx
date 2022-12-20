import * as React from "react";
import ReactDom from 'react-dom';

// import logo from "../../../../images/top_k_logo.png";
// import gitHubIcon from "../../../../images/icons/icon_github.svg";
// import facebookIcon from "../../../../images/icons/icon_facebook.svg";
// import youtubeIcon from "../../../../images/icons/icon_youtube.svg";


// 3rd party 
import styled from 'styled-components';// For Original CSS each component


// 1. オリジナルＣＳＳ
const CP = styled.div`
// font-family:"YakuHanJPs","Lato","Custom Yu Gothic","游ゴシック","Yu Gothic",YuGothic,Hiragino Sans,"Meiryo",Hiragino Kaku Gothic ProN,sans-serif;
 background-color: #292929;
 color: white;
 font-weight: 800;
 text-align: center;
 padding: 16px;
`;

const FOOTER = styled.div`
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

            <FOOTER>
                <footer>
                    <div className="footerContact">
                        <h3 className="footerContact__email">Email: kojima.website@gmail.com</h3>
                        <p className="">Made by React</p>
                    </div>
                </footer>
            </FOOTER>

            <CP>
                <p>Copyright ©2022 RK-WEB-DESIGN | All Rights Reserved. </p>
            </CP>

        </>,
        reactRoot);
} else {
    console.log("no root found");
}


{


}
