import React, { useState } from 'react'

function Section3() {
  const [workSrc, setWorkSrc] = useState("");
  const [workMouseOn, setWorkMouseOn] = useState("");

  const workbox = [
    {id: 0, name: "Portfolio (Vue.js)", desc: "Vue.js로 제작된 포트폴리오 페이지 입니다.(서버폐쇄)", src: "./assets/portfolio.gif", skills: "#Vue.js, #scss, #html, #MongoDB, #Express", href: "https://port-0-portfolio2-6w1j2alm48bfok.sel5.cloudtype.app/", githref:"https://github.com/Sovidi/portfolio2" },
    {id: 1, name: "Portfolio (Next.js)", desc: "현재 보고계신 Next.js 이식버전의 포트폴리오입니다.", src: "./assets/portfolio.gif", skills: "#Next.js, #scss, #html, #MongoDB, #Express", href: "https://portfolio3-blue.vercel.app/", githref:"https://github.com/Sovidi/portfolio3" },
    {id: 2, name: "Wonder place", desc: "원더플레이스 브랜드관 소개페이지 클론코딩", src: "./assets/wonderplace.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/wonderplace_clone/", githref:"https://github.com/Sovidi/wonderplace_clone" },
    {id: 3, name: "Everland", desc: "에버랜드 홈페이지 리뉴얼", src: "./assets/everland.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/everland/", githref:"https://github.com/Sovidi/everland" },
    {id: 4, name: "Scary House", desc: "귀신의 집, 공포 추리 미니 게임", src: "./assets/scaryhouse.png", skills: "#react, #scss, #html, #Express", href: "https://sovidi.github.io/scary/", githref:"https://github.com/Sovidi/scary" },
    {id: 5, name: "Movie Finder", desc: "MovieDB API 를 활용한 간단 무비 파인더", src: "./assets/moviefinder.png", skills: "#react, #scss, #html", href: "https://sovidi.github.io/movies/", githref:"https://github.com/Sovidi/movies" },
    {id: 6, name: "toGrocery (MySQL)", desc: "시장 농산물 물가현황 간편확인 및 위치기반 매칭 어플 (서버폐쇄)", src: "./assets/togrocery.png", skills: "#next.js, #scss, #html, #MySQL", href: "https://togrocery.vercel.app/", githref:"https://github.com/Sovidi/togrocery" },
    {id: 7, name: "toGrocery (MongoDB)", desc: "장보러가자의 서버코드를 MongoDB(NoSQL)로 바꾼 버전입니다.", src: "./assets/togrocery.png", skills: "#next.js, #scss, #html, #MongoDB", href: "https://to-grocery2.vercel.app/", githref:"https://github.com/Sovidi/toGrocery2" },
    {id: 8, name: "petSalon (현재 개발중)", desc: "미용사 찾기 위치기반 서비스 어플", src: "./assets/petsalon.png", skills: "#react, #css, #html", href: "#", githref:"#" }
]

  const srcEdit = (src) => {
    setWorkSrc(src)
  };

  const workMouseAdd = (str) => {
    setWorkMouseOn(str);
  };

  return (
    <section className="section section3">
      <div className="sec1">
        <div className="title">
          <strong>Works</strong>
          <figure>
            {/* <!-- <img src={workSrc}/> --> */}
            <div style={{ 'background-image': `url(${workSrc})` }}></div>
          </figure>
        </div>
      </div>
      <div class="sec2">
        <div className='works'>
        {
          workbox.map(item=>(
          <div className={`workbox ${item.id == workMouseOn ? "active" : ""}`} onMouseOver={()=>{srcEdit(item.src)}} onMouseEnter={()=>{workMouseAdd(item.id)}} onMouseLeave={()=>{workMouseAdd('')}}>
            <div className="text">
              <strong>{ item.name }</strong>
              <span>{ item.desc }</span>
              <p>{ item.skills }</p>
            </div>
            <div className="links">
              <a href={item.githref} className="gitlink" target="_blank"><div className="gitlogoicon"></div></a>
              <a href={item.href} className="mainlink" target="_blank"><div className="mainlogoicon"></div></a>
            </div>
          </div >
          ))
        }
        </div>
    </div >
  </section >
  )
}

export default Section3