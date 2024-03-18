import React from 'react';
import ReactDom from 'react-dom';

// 3rd Party
import { Link as Scroll } from 'react-scroll'; // 3rd party

import sns_insta from '../../../images/sns_insta.svg';
import sns_line from '../../../images/sns_line.svg';

import logo from '../../../images/logo.png';

import footerImg1 from '../../../images/footerImg1.png';
import footerImg2 from '../../../images/footerImg2.png';
import footerImg3 from '../../../images/footerImg3.png';
import footerImg4 from '../../../images/footerImg4.png';

// 3rd party
import styled from 'styled-components'; // For Original CSS each component

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

// トップへ戻るホバー効果
const GoToTopHoverCSS = styled.div`
  &:hover {
    /* background-color:white;
        color: black; */
    transition: all 0.4s ease;
    opacity: 0.4;
  }
`;

// -----------------------------------------
const reactRoot = document.getElementById('Footer');
if (reactRoot) {
  ReactDom.render(
    <>
      <footer className="footer">
        <div className="footerInfo__wrap">
          <div className="footerInfo">
            <article className="footerInfo__article">
              <div className="footerInfo__logoTitle">
                <img src={logo} alt="" className="footerInfo__logoTitle--img" />
                <div className="footerInfo__logoTitle--text">
                  マツダオートザム清水
                  <div className="footerInfo__logoTitle--text small">
                    MAZDA AUTOZAM SHIMIZU
                  </div>
                </div>
              </div>

              <p className="footerInfo__article--text top">
                〒424-0944 静岡県静岡市清水区築地町10-10
              </p>
              <p className="footerInfo__article--text">
                TEL.054-353-4188 FAX.054-353-4181
              </p>
              <p className="footerInfo__article--text">
                営業時間 9:00〜18:00 定休日 毎週水曜日、第2火曜日
              </p>
            </article>

            <div className="footerInfo__calendar">
              {/* <!--営業カレンダー--> */}
              <div id="calendar">
                <div className="calendarNote">
                  <div className="calendarNote__event">
                    <span className="calendarNote__event--square"></span>:
                    イベント
                  </div>

                  <div className="calendarNote__regHoliday">
                    <span className="calendarNote__regHoliday--square"></span>:
                    定休日
                  </div>
                </div>
              </div>
              {/* <!--営業カレンダー--> */}
            </div>
          </div>
        </div>

        <div className="footerMenu">
          <div className="footerMenu__wrap">
            <div className="footerMenu__item flex">
              <img
                src={footerImg1}
                alt=""
                className="footerMenu__item--img flex"
              />
            </div>

            <div className="footerMenu__item flex">
              <img src={footerImg2} alt="" className="footerMenu__item--img" />
            </div>

            <div className="footerMenu__item">
              <img
                src={footerImg3}
                alt=""
                className="footerMenu__item--img onlyImg"
              />
            </div>

            <div className="footerMenu__item">
              <img
                src={footerImg4}
                alt=""
                className="footerMenu__item--img onlyImg"
              />
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
          <h3 className="footerContact__email">
            Email: kojima.website@gmail.com
          </h3>
          <p className="">Made by React</p>
        </div>

        <CP>
          <p>©2022 RK-WEB-DESIGN | All Rights Reserved. </p>
        </CP>

        {/* Go to Top */}
        <GoToTopHoverCSS>
          <div>
            <Scroll
              to="scroll__top"
              smooth={true}
              duration={200}
              offset={-30}
              style={{
                color: 'white',
                fontSize: '1rem',
                borderTop: '1px solid #777777',
                width: '100%',
                display: 'block',
                padding: '10px 0',
                cursor: 'pointer',
              }}
            >
              トップに戻る
            </Scroll>
          </div>
        </GoToTopHoverCSS>
      </CONTACT>
    </>,
    reactRoot
  );
} else {
  console.log('no root found');
}

{
  var classNames = new Array('working', 'closed');
  var holyday = new Object();

  //設定ここから
  //定休日の曜日フラグ 休みは1
  var closed_Sun = 0; //日曜日
  var closed_Mon = 0; //月曜日
  var closed_Tue = 0; //火曜日
  var closed_Wed = 1; //水曜日
  var closed_Thu = 0; //木曜日
  var closed_Fri = 0; //金曜日
  var closed_Sat = 0; //土曜日

  //その他営業・休業の設定 holyday["日にち"] = n; nに入れる数字は、臨時営業日→0、臨時休業日→1
  //臨時営業日
  holyday['2022/12/13'] = 1;
  holyday['2022/12/20'] = 1;

  //臨時休業日
  holyday['2023/1/10'] = 0;
  holyday['2023/2/10'] = 0;
  holyday['2023/3/10'] = 0;
  holyday['2023/4/10'] = 0;
  holyday['2023/5/10'] = 0;
  holyday['2023/6/10'] = 0;
  holyday['2023/7/10'] = 0;
  holyday['2023/8/10'] = 0;
  holyday['2023/9/10'] = 0;
  //設定ここまで

  var today = new Date();
  var cal_year = today.getYear();
  var cal_month = today.getMonth() + 1;
  var cal_day = today.getDate();
  if (cal_year < 1900) {
    cal_year += 1900;
  }
  var cal = document.getElementById('calendar');

  function nextCal() {
    cal_month += 1;
    if (cal_month > 12) {
      cal_month = 1;
      cal_year += 1;
    }
    writeCal(cal_year, cal_month, 0);
  }

  function writeCal(year, month, day) {
    var calendars = new Array(
      0,
      31,
      28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    );
    var weeks = new Array('日', '月', '火', '水', '木', '金', '土');
    // var monthName = new Array('none','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月');
    var monthName = new Array(
      'none',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12'
    );

    var cal_flag = 0;
    if (year % 100 == 0 || year % 4 != 0) {
      if (year % 400 != 0) {
        cal_flag = 0;
      } else {
        cal_flag = 1;
      }
    } else if (year % 4 == 0) {
      cal_flag = 1;
    } else {
      cal_flag = 0;
    }
    calendars[2] += cal_flag;

    var cal_start_day = new Date(year, month - 1, 1).getDay();

    var cal_tags =
      "<table border='0' cellspacing='0' cellpadding='0' class='calendar'>";
    cal_tags += "<tr><th colspan='7'>";
    // cal_tags += year + "年 " + monthName[month] + "</th></tr>";
    cal_tags += year + '. ' + monthName[month] + '</th></tr>';
    cal_tags += "<tr class='headline'>";
    for (var i = 0; i < weeks.length; i++) {
      cal_tags += '<td>' + weeks[i] + '</td>';
    }
    cal_tags += '</tr><tr>';
    for (var i = 0; i < cal_start_day; i++) {
      cal_tags += '<td>&nbsp;</td>';
    }

    for (var cal_day_cnt = 1; cal_day_cnt <= calendars[month]; cal_day_cnt++) {
      var cal_day_match = year + '/' + month + '/' + cal_day_cnt;
      var dayClass = '';

      if (holyday[cal_day_match] != undefined) {
        dayClass = ' class="' + classNames[holyday[cal_day_match]] + '"';
      } else if (cal_start_day == 0 && closed_Sun == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 1 && closed_Mon == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 2 && closed_Tue == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 3 && closed_Wed == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 4 && closed_Thu == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 5 && closed_Fri == 1) {
        dayClass = ' class="closed"';
      } else if (cal_start_day == 6 && closed_Sat == 1) {
        dayClass = ' class="closed"';
      }
      cal_tags += '<td ' + dayClass + '>' + cal_day_cnt + '</td>';
      if (cal_start_day == 6) {
        cal_tags += '</tr>';
        if (cal_day_cnt < calendars[month]) {
          cal_tags += '<tr>';
        }
        cal_start_day = 0;
      } else {
        cal_start_day++;
      }
    }
    while (cal_start_day <= 6 && cal_start_day != 0) {
      cal_tags += '<td>&nbsp;</td>';
      if (cal_start_day == 6) {
        cal_tags += '</tr>';
      }
      cal_start_day++;
    }
    cal_tags += '</table>';
    cal.innerHTML += cal_tags;
  }

  writeCal(cal_year, cal_month, cal_day);
  nextCal(); // カレンダー１個の場合は削除
}
