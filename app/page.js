"use client"
import './page.scss'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import { myContext } from './components/Context';
import Logo from './components/Logo';

export default function Home() {
  const [load, setLoad] = useState(true);

  const firstLoading = () => {
    setLoad(false);
  };

  useEffect(()=>{
    setTimeout(() => {
      firstLoading();
    }, 800);

    return () => {
      clearTimeout(firstLoading);
    };
  });

  const Fullpage = () => (
    <ReactFullpage
      afterLoad={(origin, destination, direction) => {}}
      scrollingSpeed={800}
      scrollHorizontally = {true}
      skip-init = {true}
      skipInit={false}
      responsiveWidth={1000}
      offsetSections={true}
      fixedElements={"#header-section"}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Logo page={state.destination?.index}/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  return (load ?
    <div className='loadingPage'><span className={`loadingPop ${load ? "active" : "" }`}>로딩중</span></div>
  :
    <main>
      <Fullpage id="fullpage"/>
    </main>
  )
};
