"use client"
import './page.scss'
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

export default function Home() {
  const [paging, setPaging] = useState("");

  useEffect(()=>{
    setPaging("");
  }, [])
  
  const Fullpage = () => (
    <ReactFullpage
      // afterLoad={(origin, destination, direction)=>{
      //   if(destination.index === 2) {
      //     setPaging("page3");
      //   } else {
      //     setPaging("");
      //   }
      // }}
      scrollingSpeed={800}
      scrollHorizontally = {true}
      skip-init = {true}
      skipInit={false}
      responsiveWidth={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  // ReactDOM.render(<Fullpage />, document.getElementById('react-root'));

  return (
    <main>
      <Fullpage id="fullpage"/>
    </main>
  )
}
