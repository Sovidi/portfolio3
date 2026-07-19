'use client';
import '@/page.scss';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// 컴포넌트
import { myContext } from '@/components/Context';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Logo from '@/components/Logo';
import LcmBackground from '@/components/LcmBackground';

export default function Home() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const firstLoading = setTimeout(() => {
      setLoad(item => {
        console.log('로딩 렌더링');
        return false;
      });
    }, 800);

    return () => {
      clearTimeout(item => {
        console.log('로딩 렌더링 정지');
        return firstLoading;
      });
    };
  }, []);

  const Fullpage = () => (
    <ReactFullpage
      afterLoad={(origin, destination, direction) => {
        window.dispatchEvent(
          new CustomEvent('lcmFullpageMove', {
            detail: { index: destination.index },
          })
        );
      }}
      scrollingSpeed={800}
      scrollHorizontally={true}
      skip-init={true}
      skipInit={false}
      responsiveWidth={1000}
      offsetSections={true}
      fixedElements={'#header-section'}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Logo page={state.destination?.index} />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  return load ? (
    <div className='loadingPage'>
      <span className={`loadingPop ${load ? 'active' : ''}`}>로딩중</span>
    </div>
  ) : (
    <main>
      <LcmBackground />
      <div id='fullpageLayer'>
        <Fullpage />
      </div>
    </main>
  );
}
