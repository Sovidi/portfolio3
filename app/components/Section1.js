import React, { useContext, useEffect } from 'react'
import { myContext } from './Context';

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
				<figure className="finderlogo"><img src="./assets/finder.png" /></figure>
				<div className="textbox">
					<figure className="pointlogo"><img src="./assets/textpoint.png" /></figure>
					<span className="firsttext">
						<b>데이터 통신,</b><br />
						사용자 경험 <b>최적화,</b><br />
						<b>보안, 백엔드 브릿지</b><br />서비스,
					</span>
					<span className="secondtext">
						그리고 각종 프레임워크 심화와
						서버분야에 이르기까지
						다양한 측면에서 소프트웨어를 개발하고
						향상시키는 데 기여하고 있습니다.
					</span>
				</div>
			</div>
		</section>

	)
}

export default Section1