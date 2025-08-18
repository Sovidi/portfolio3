import React, { useContext, useEffect } from "react";
import { myContext } from "./Context";
import ReactFullpage from "@fullpage/react-fullpage";

function Section1() {
  return (
    <section className="section section1">
      <div className="sec1">
        <div className="textbox">
          <span>프론트엔드 개발자</span>
          <strong>CHAEMIN LIM</strong>
        </div>
      </div>
      <div className="sec2">
        <span className="birth">1992.04.29</span>
        <figure className="finderlogo">
          <img src="./assets/finder.png" />
        </figure>
        <div className="textbox">
          <figure className="pointlogo">
            <img src="./assets/textpoint.png" />
          </figure>
          <span className="firsttext">
            <b>프론트엔드</b> 개발, UI/UX,
            <br />
            사용자 경험 <b>최적화,</b>
            <br />
            <b>백엔드</b>개발 및 협업
            <br />
            <b>컨텐츠</b> 및 <b>플랫폼</b>
            <br />
            <b>어플</b>리케이션
          </span>
          <span className="secondtext">프론트엔드 영역으로 시작하여, UI/UX 개발자를 지나 현재는 어플리케이션과 백엔드까지 모든것을 소화하고자 합니다. 완벽한 웹 개발을 지향하고 항상 발전하기 위해 궁금증을 꺼뜨리지 않고 개발중에 있습니다.</span>
        </div>
      </div>
    </section>
  );
}

export default Section1;
