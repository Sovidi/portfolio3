import React, { useRef, useState } from "react";

function Section3() {
  const [workSrc, setWorkSrc] = useState("./assets/portfolio.gif");
  const [workMouseOn, setWorkMouseOn] = useState(1);
  const scrollContainerRef = useRef(null);
  const boxsRef = useRef([]);

  const workbox = [
    { id: 0, expired: true, name: "Portfolio (Vue.js) *서버폐쇄", desc: "Vue.js로 제작된 포트폴리오 페이지 입니다.", src: "./assets/portfolio.gif", skills: "#Vue.js, #scss, #html, #MongoDB, #Express", href: "https://port-0-portfolio2-6w1j2alm48bfok.sel5.cloudtype.app/", githref: "https://github.com/Sovidi/portfolio2" },
    { id: 1, expired: false, name: "Portfolio (Next.js)", desc: "현재 보고계신 Next.js 이식버전의 포트폴리오입니다.", src: "./assets/portfolio.gif", skills: "#Next.js, #scss, #html, #MongoDB, #Express", href: "https://portfolio3-blue.vercel.app/", githref: "https://github.com/Sovidi/portfolio3" },
    { id: 2, expired: false, name: "Wonder place", desc: "원더플레이스 브랜드관 소개페이지 클론코딩", src: "./assets/wonderplace.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/wonderplace_clone/", githref: "https://github.com/Sovidi/wonderplace_clone" },
    { id: 3, expired: false, name: "Everland", desc: "에버랜드 홈페이지 리뉴얼", src: "./assets/everland.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/everland/", githref: "https://github.com/Sovidi/everland" },
    { id: 4, expired: false, name: "Scary House", desc: "귀신의 집, 공포 추리 미니 게임", src: "./assets/scaryhouse.png", skills: "#react, #scss, #html, #Express", href: "https://sovidi.github.io/scary/", githref: "https://github.com/Sovidi/scary" },
    { id: 5, expired: false, name: "Movie Finder", desc: "MovieDB API 를 활용한 간단 무비 파인더", src: "./assets/moviefinder.gif", skills: "#react, #scss, #html", href: "https://sovidi.github.io/movies/", githref: "https://github.com/Sovidi/movies" },
    { id: 6, expired: false, name: "BookFinder(개발중)", desc: "NaverBook RestAPI 를 활용한 서적 검색기", src: "./assets/bookfinder.gif", skills: "#react, #scss, #html", href: "https://book-finder-fawn-kappa.vercel.app/", githref: "https://github.com/Sovidi/BookFinder" },
    { id: 7, expired: true, name: "toGrocery (MySQL) *서버폐쇄", desc: "시장 농산물 물가현황 간편확인 및 위치기반 매칭 어플", src: "./assets/togrocery.png", skills: "#next.js, #scss, #html, #MySQL", href: "https://togrocery.vercel.app/", githref: "https://github.com/Sovidi/togrocery" },
    { id: 8, expired: false, name: "toGrocery (MongoDB)", desc: "장보러가자의 서버코드를 MongoDB(NoSQL)로 바꾼 버전입니다.", src: "./assets/togrocery.png", skills: "#next.js, #scss, #html, #MongoDB", href: "https://to-grocery2.vercel.app/", githref: "https://github.com/Sovidi/toGrocery2" },
    { id: 9, expired: false, name: "petSalon", desc: "미용사 찾기 위치기반 서비스 어플", src: "./assets/petsalon.png", skills: "#react, #css, #html", href: "https://pet-salon.vercel.app/", githref: "https://github.com/Sovidi/petSalon" },
    { id: 10, expired: false, name: "웅진 개정수학 e-book 컨텐츠", desc: "웅진 개정수학 컨텐츠로써, 2학년 2학기 컨텐츠 개발 담당,", src: "./assets/wj_math.png", skills: "#javascript, #css, #html, #jquery", href: "https://wj-revision-math-exported.vercel.app/%EC%96%91%EC%82%B02/2/2-2-3/INDEX3.HTML", githref: "https://github.com/Dalguiee/wj_revision_math_exported" },
    { id: 11, expired: false, name: "스마트올 중학", desc: "웅진 스마트올 중학 홈페이지 프론트 운영관리(2024년~)", src: "./assets/smart_all_middle.png", skills: "#javascript, #css, #html, #jquery", href: "https://smartallmid.wjthinkbig.com/" },
    { id: 12, expired: false, name: "프리스비", desc: "애플 서드파티 마켓인 프리스비 홈페이지 프론트 운영관리(2024년~)", src: "./assets/frisbee.png", skills: "#javascript, #css, #html, #jquery", href: "https://www.frisbeekorea.com/shop/main/main.do" },
    // { id: 11, name: "웅진 개정수학(선긋기 게임 컨텐츠)", desc: "게임 시스템 핵심코드 리펙토링 담당하였습니다.", src: "./assets/petsalon.png", skills: "#javascript, #css, #html, #jquery", href: "https://sovidi.github.io/exported_wj_revision_math/%EC%96%91%EC%82%B02/1/2-1-4/INDEX1.HTML", githref: "https://github.com/Sovidi/exported_wj_revision_math" },
    { id: 13, expired: false, name: "미래엔 고등 중국어 e-book 컨텐츠", desc: "미래엔 고등과 중등 교과개정 e-book 컨텐츠 개발중 고등 중국어 담당 개발하였습니다.", src: "./assets/miraen_high_china_title.png", skills: "#javascript, #css, #html, #jquery", href: "https://miraen-contents-exported.vercel.app/high/china/contents/lesson02/ops/2/2_01_04.html", githref: "https://github.com/Dalguiee/miraen_contents_exported" },
    { id: 14, expired: false, name: "CGN 통합페이지", desc: "2025년 2월 20주년 기념 CGN 통합페이지 리뉴얼을 맡아 작업하였습니다.", src: "./assets/cgn_intergration.png", skills: "#react.js, #tailwind, #vite, #nest.js", href: "https://cgn-intergration-exported.vercel.app/", githref: "https://github.com/Dalguiee/cgn_intergration_exported" },
  ];

  const srcEdit = (src) => {
    setWorkSrc(src);
  };

  const workMouseAdd = (str) => {
    setWorkMouseOn(str);
  };

  return (
    <section className="h-screen section section3">
      <div className="sec1">
        <div className="title">
          <strong>Works</strong>
          <figure>
            {/* <!-- <img src={workSrc}/> --> */}
            <div className={`aspect-[16/9] !bg-cover bg-no-repeat`} style={{ "background-image": `url(${workSrc})` }}></div>
          </figure>
        </div>
      </div>
      <div ref={scrollContainerRef} class="sec2 overflow-y-scroll !justify-start">
        <div className="works my-[10px]">
          {workbox?.map((item, idx) => (
            <div
              ref={(el) => (boxsRef.current[idx] = el)}
              className={`workbox !h-[350px] max-brp:!w-[90%] max-brp:!h-[150px] flex-shrink-0 ${item.id == workMouseOn ? "active" : ""}`}
              onMouseOver={() => {
                srcEdit(item.src);
              }}
              onMouseEnter={(obj) => {
                workMouseAdd(item.id);
                scrollContainerRef?.current?.scrollTo({
                  top: boxsRef?.current?.[idx]?.offsetTop - 200,
                  behavior: "smooth",
                });
              }}
            >
              <div className="text">
                <strong className={`${item.expired ? "line-through" : ""}`}>{item.name}</strong>
                <span className={`${item.expired ? "line-through" : ""}`}>{item.desc}</span>
                <p className={`${item.expired ? "line-through" : ""}`}>{item.skills}</p>
              </div>
              <div className="links">
                {item?.githref && (
                  <a href={item.githref} className="gitlink" target="_blank">
                    <div className="gitlogoicon"></div>
                  </a>
                )}
                <a href={item.href} className="mainlink" target="_blank">
                  <div className="mainlogoicon"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
