import React, { useState } from 'react'

function Section2() {
	const [tagId, setTagId] = useState();

	const idErase = () => {
		setTagId("");
	};

	const idEdit = (e, str) => {
		e.target.classList.contains("popclose") ? idErase() : setTagId(str);
		console.log(e.target.classList.contains("popclose"));
	};

	const skillbox1 = [
		{ id: 1, src: "./assets/js.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 다룹니다.", active: false },
		{ id: 2, src: "./assets/css.png", text: "도큐먼트 디자인을 위한 CSS코드를 다룰 수 있습니다.", active: false },
		{ id: 3, src: "./assets/scss.png", text: "심화된 CSS코드인 SCSS를 더 주로 다룹니다.", active: false },
		{ id: 4, src: "./assets/html.png", text: "도큐먼트 구조파악과 마크업을 위한 기초부터 심화적 구조를 다룹니다.", active: false },
		{ id: 5, src: "./assets/jquery.png", text: "자바스크립트에 더해 다룰 줄 아는 가장 기초적인 보조언어입니다.", active: false },
		{ id: 6, src: "./assets/react.png", text: "자바스크립트에 대한 이해도와 더불어 데이터교환의 구조를 파악하고 있으며 여러 프로젝트를 수행하였습니다.", active: false },
		{ id: 7, src: "./assets/typescript.png", text: "대규모 프로젝트에서 안전성을 구비할 수 있습니다.", active: false },
		{ id: 8, src: "./assets/next.png", text: "리엑트에 대한 이해도와 더불어 서버를 다루는데에 특히 이해도가 높습니다.", active: false },
		{ id: 9, src: "./assets/vue.png", text: "기본적인 컨텍스트(store) 이해와 더불어 vue의 각종 독립 훅을 이해하고 능동적으로 다룰 수 있습니다.", active: false }
	];
	const skillbox2 = [
		{ id: 10, src: "./assets/mysql.png", text: "express 와 next.js 에서의 프로젝트로 여러 데이터 교환 구조를 만들어 본 경험이 있습니다.", active: false },
		{ id: 11, src: "./assets/express.png", text: "서버사이드 렌더링이 내장된 next.js 를 제외한 리액트와 vue 에서 게이트웨이로 다루어 보았습니다.", active: false },
		{ id: 12, src: "./assets/npm.png", text: "프레임워크에서 각종 모듈을 위한 기초적인 모듈로써 모든 구조에서 응용하고 있습니다.", active: false },
		{ id: 13, src: "./assets/mongodb.png", text: "express 와 더불어 모든 프레임워크에서 주요 명령어를 모듈화시켜 사용하고 있습니다.", active: false },
		{ id: 14, src: "./assets/mariadb.png", text: "mysql 과 더불어 같은 구조로써 서버사이드랜더링 구조를 이해하는데 사용하였습니다.", active: false },
		{ id: 15, src: "./assets/nodejs.png", text: "프론트단과 서버단의 구조연결을 위한 기초적 구조를 알고있습니다.", active: false }
	];
	const skillbox3 = [
		{ id: 16, src: "./assets/github.png", text: "각종 프로젝트 버전 공유와 업데이트를 위해 사용할 줄 알고있습니다.", active: false },
		{ id: 17, src: "./assets/cloudtype.png", text: "서버사이드렌더링으로 제한적이지만 동적서버를 제공하는 사이트로 몇몇 프로젝트 서버를 위해 사용중입니다.", active: false },
		{ id: 18, src: "./assets/postman.png", text: "각종 API들을 사용하기 앞서 사용자 키와 각종 파라미터를 테스트하는데 사용하였습니다.", active: false },
		{ id: 19, src: "./assets/swiper.png", text: "페이지 전환이라는 요소에서 횡스크롤 디자인과 기능적으로 가장 이상적인 플러그인 이라고 생각합니다.", active: false },
		{ id: 20, src: "./assets/fullpage.png", text: "종스크롤 페이지 전환에서 주로 사용하는 플러그인입니다.", active: false },
		{ id: 21, src: "./assets/figma.png", text: "페이지 사전구상에서 가장 기초적으로 사용하고 있으며 기본적인 디자인 구조를 만들 수 있어요.", active: false },
		{ id: 22, src: "./assets/zeplin.png", text: "포토샵과 연결하여 기초적인 사이트 디자인을 구상하는데 사용할 수 있어요.", active: false },
		{ id: 23, src: "./assets/vercel.png", text: "next.js 프로젝트 빌드와 업로드를 위해 사용중입니다.", active: false },
		{ id: 24, src: "./assets/netlify.png", text: "vue 프로젝트 빌드와 업로드를 위해 사용중입니다.", active: false },
		{ id: 25, src: "./assets/notion.png", text: "각종 중요한 코드 메모와 팀 프로젝트 상황공유를 위해 사용하고 있으며 마크다운 명령어를 주로 다룰 수 있어요.", active: false },
		{ id: 26, src: "./assets/finale.png", text: "각종 음악악보 사보 및 작곡, 가상악기로 음원제작을 할 수 있어요.", active: false },
		{ id: 27, src: "./assets/german.png", text: "독일에서의 유학생활중 학업과 현업으로 독일어 회화가 가능합니다.", active: false }
	];



	return (
		<section className="section section2">
			<div className="sec1" onClick={idErase}>
				<div className="textbox">
					<figure>
						<figcaption>ABOUT</figcaption><img src="../assets/about.png" />
					</figure>
					<span>
						저의 개발 경험은 광범위하며, 웹 애플리케이션부터 모바일 앱, 데스크톱 애플리케이션, 그리고 중요한 데이터베이스와 서버 시스템까지 여러 영역에서 다양한 프로젝트를 성공적으로 수행해
						왔습니다. 또한 소프트웨어 개발 방법론과 도구를 최신으로 유지하고, 개발 프로세스를 개선하기 위해 지속적인 학습과 실험을 통해 발전하고 있습니다.
					</span>
				</div>
			</div>
			<div className="sec2">
				<span className="scrolltext">JAVASCRIPT CSS REACT SCSS HTML JQUERY REACT TYPESCRIPT NEXT.JS VUE.JS MYSQL NPM MONGODB NOSQL NODE.JS</span>
				<span className="clickIcon fa-bounce"><div></div></span>
				<div className="skillIntroduce">

					<div className="skillsbox box1">
						<p>front-End</p>
						<div className="icons">
							{
								skillbox1.map(item => (
									<figure className={item.id === tagId ? "active" : ""} onClick={(e)=>{ idEdit(e, item.id)}}>
										<div className="boxes" style={{ "background-image": `url(${item.src})` }}></div>
										<div className="popup popclose">
											<div style={{ "background-image": `url(${item.src})` }} className="popclose"></div>
											<p className="popclose">{item.text}</p>
										</div>
									</figure>
								))
							}
						</div>
					</div>

					<div className="skillsbox box1">
						<p>back-End</p>
						<div className="icons">
							{
								skillbox2.map(item => (
									<figure className={item.id === tagId ? "active" : ""} onClick={(e)=>{ idEdit(e, item.id) }}>
										<div className="boxes" style={{ "background-image": `url(${item.src})` }}></div>
										<div className="popup popclose">
											<div style={{ "background-image": `url(${item.src})` }} className="popclose"></div>
											<p className="popclose">{item.text}</p>
										</div>
									</figure>
								))
							}
						</div>
					</div>

					<div className="skillsbox box1">
						<p>etc</p>
						<div className="icons">
							{
								skillbox3.map(item => (
									<figure className={item.id === tagId ? "active" : ""} onClick={(e)=>{ idEdit(e, item.id) }}>
										<div className="boxes" style={{ "background-image": `url(${item.src})` }}></div>
										<div className="popup popclose">
											<div style={{ "background-image": `url(${item.src})` }} className="popclose"></div>
											<p className="popclose">{item.text}</p>
										</div>
									</figure>
								))
							}
						</div>
					</div>

				</div>
			</div>
		</section>

	)
}

export default Section2