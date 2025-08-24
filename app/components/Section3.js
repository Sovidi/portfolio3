import React, { useRef, useState } from "react";
import useMatchMedia from "./useMatchMedia";
import { workbox } from "../datas/works";
import parse from "html-react-parser";

function Section3() {
  const [workSrc, setWorkSrc] = useState("./assets/portfolio.gif");
  const [workMouseOn, setWorkMouseOn] = useState(1);
  const scrollContainerRef = useRef(null);
  const boxsRef = useRef([]);
  const brp = useMatchMedia(`(max-width:1300px)`);

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
                  top: boxsRef?.current?.[idx]?.offsetTop - `${brp ? 500 : 200}`,
                  behavior: "smooth",
                });
              }}
            >
              <div className="text">
                <strong className={`${item.expired ? "line-through" : ""}`}>{item.name}</strong>
                <span className={`${item.expired ? "line-through" : ""}`}>{parse(item.desc)}</span>
                <p className={`${item.expired ? "line-through" : ""}`}>{item.skills}</p>
              </div>
              <div className="flex-col gap-[10px] links">
                {item?.githref && (
                  <a href={item.githref} className="gitlink" target="_blank">
                    <div className="gitlogoicon"></div>
                  </a>
                )}
                {item?.href?.map((hrefItem, hrefKey) => (
                  <a href={hrefItem} className="mainlink" target="_blank">
                    <div className="mainlogoicon"></div>
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
