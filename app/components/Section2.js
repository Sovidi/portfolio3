import React, { useEffect, useState } from "react";
import Section2_groups from "./section2_groups";
import Section2_card_detail from "./section2_card_detail";
import { skillbox1, skillbox2, skillbox3 } from "../datas/skills";

function Section2() {
  const [tagId, setTagId] = useState();
  const [selectedItem, setSelectedItem] = useState({});

  const idErase = () => {
    setTagId("");
  };

  const idEdit = (e, str) => {
    e.target.classList.contains("popclose") ? idErase() : setTagId(str);
    console.log(e.target.classList.contains("popclose"));
  };

  return (
    <section className="section section2">
      <div className="sec1" onClick={idErase}>
        <div className="textbox">
          <figure>
            <figcaption>ABOUT</figcaption>
            <img src="../assets/about.png" />
          </figure>
          <span>다수의 개발 경험으로 말미암아 광범위하게 접근 및 해결책을 제시하는 개발자가 되고자 합니다. 프론트엔드 영역에서 손에 주어진 프로젝트를 성공적으로 수행해 왔으며, 개발업무와 R&D를 항상 병행합니다. 웹 애플리케이션부터 모바일 앱, 데스크톱 애플리케이션, 그리고 나아가 백엔드 데이터베이스와 서버, 보안 시스템까지 여러 영역에서 다양한 또한 소프트웨어 개발 트렌드와 도구를 최신으로 유지하고, 개발 프로세스를 개선하기 위해 지속적인 학습과 실험은 아직 멈추지 않았습니다.</span>
        </div>
      </div>
      <div className="overflow-hidden sec2">
        <span className="scrolltext">JAVASCRIPT CSS REACT SCSS HTML JQUERY REACT TYPESCRIPT NEXT.JS VUE.JS MYSQL NPM MONGODB NOSQL NODE.JS</span>
        <span className="clickIcon fa-shake">
          <div></div>
        </span>
        <div className="skillIntroduce">
          <Section2_groups className={selectedItem?.group === "box1" ? "z-[10]" : ""} skillbox={skillbox1} setSelectedItem={setSelectedItem} tagId={tagId} idEdit={idEdit} />
          <Section2_groups className={selectedItem?.group === "box2" ? "z-[10]" : ""} skillbox={skillbox2} setSelectedItem={setSelectedItem} tagId={tagId} idEdit={idEdit} />
          <Section2_groups className={selectedItem?.group === "box3" ? "z-[10]" : ""} skillbox={skillbox3} setSelectedItem={setSelectedItem} tagId={tagId} idEdit={idEdit} />
        </div>
      </div>
      {/* <Section2_card_detail item={selectedItem} /> */}
    </section>
  );
}

export default Section2;
