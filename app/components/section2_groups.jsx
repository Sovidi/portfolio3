import React from "react";

const Section2_groups = ({ skillbox, className = "", tagId, idEdit, setSelectedItem = {} }) => {
  return (
    <div className={`skillsbox my-[3%] ${skillbox?.[0]?.group} ${className && className}`}>
      <p>front-End</p>
      <div className="icons gap-[8px]">
        {skillbox?.map((item) => (
          <>
            <figure
              className={`${item.id === tagId ? "active" : ""}`}
              onClick={(e) => {
                console.log(item);
                idEdit(e, item.id);
                setSelectedItem(item);
              }}
            >
              <div className="boxes" style={{ "background-image": `url(${item.src})` }}></div>
              <div className={`${item.id === tagId ? "opacity-1 brp:translate-x-[0px] max-brp:translate-x-[-50%]" : "opacity-1 brp:translate-x-[1000px] max-brp:translate-x-[550%] select-none"} max-brp:translate-y-[-50%] max-brp:!top-[50%] max-brp:!left-[50%] brp:absolute max-brp:fixed border-[black] popup popclose border-[1px] border-solid`}>
                <p className="skillTitle">{item.name}</p>
                <div style={{ "background-image": `url(${item.src})` }} className="popclose"></div>
                <p className="popclose">{item.text}</p>
              </div>
            </figure>
          </>
        ))}
      </div>
    </div>
  );
};

export default Section2_groups;
