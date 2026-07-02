import React, { useEffect, useMemo, useRef, useState } from 'react';
import useMatchMedia from './useMatchMedia';
import { workbox } from '../datas/works';
import parse from 'html-react-parser';
import { Section3_slide } from './section3_slide';

function Section3() {
  const [workMouseOn, setWorkMouseOn] = useState(1);
  const scrollContainerRef = useRef(null);
  const boxsRef = useRef([]);
  const brp = useMatchMedia(`(max-width:1300px)`);

  const filteredItem = useMemo(() => workbox?.filter(item => item.id == workMouseOn), [workMouseOn]);

  const srcIsString = () => {
    if (typeof filteredItem?.[0]?.src === 'string') {
      return true;
    } else {
      return false;
    }
  };

  const workMouseAdd = str => {
    setWorkMouseOn(str);
  };

  const scrolling = idx => {
    scrollContainerRef?.current?.scrollTo({
      top: boxsRef?.current?.[idx]?.offsetTop - `${brp ? 500 : 200}`,
      behavior: 'smooth',
    });
  };

  return (
    <section className='section section3 h-screen'>
      <div className='sec1'>
        <div className='title flex h-fit w-full flex-col items-center'>
          <strong>Works</strong>
          {srcIsString() ? (
            <figure>
              {/* <!-- <img src={workSrc}/> --> */}
              <div className={`aspect-[16/9] !bg-cover bg-no-repeat`} style={{ 'background-image': `url(${filteredItem?.[0]?.src})` }}></div>
            </figure>
          ) : (
            <div class={`mt-[5%] h-full w-full`}>
              <Section3_slide data={filteredItem?.[0]?.src} />
            </div>
          )}
        </div>
      </div>
      <div ref={scrollContainerRef} class={`sec2 !justify-start overflow-y-scroll`}>
        <div className='works my-[10px]'>
          {workbox?.map((item, idx) => (
            <div
              ref={el => (boxsRef.current[idx] = el)}
              className={`workbox !h-[350px] flex-shrink-0 max-brp:!h-[150px] max-brp:!w-[90%] ${item.id == filteredItem?.[0]?.id ? 'active' : ''}`}
              onMouseOver={() => {
                workMouseAdd(item.id);
                scrolling(idx);
              }}
              onMouseEnter={() => {
                workMouseAdd(item.id);
                scrolling(idx);
              }}
            >
              <div className='text'>
                <strong className={`${item.expired ? 'line-through' : ''}`}>{item.name}</strong>
                <span className={`${item.expired ? 'line-through' : ''}`}>{parse(item.desc)}</span>
                <p className={`${item.expired ? 'line-through' : ''}`}>{item.skills}</p>
              </div>
              <div className={`links flex-col ${brp ? `gap-[4px]` : `gap-[10px]`} `}>
                {item?.githref && (
                  <a href={item.githref} className={`gitlink ${brp ? `!aspect-[1] !w-[20px]` : ``}`} target='_blank'>
                    <div className='gitlogoicon'></div>
                  </a>
                )}
                {item?.href?.map((hrefItem, hrefKey) => (
                  <a href={hrefItem} className={`mainlink ${brp ? `!aspect-[1] !w-[20px]` : ``}`} target='_blank'>
                    <div className='mainlogoicon'></div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section3;
