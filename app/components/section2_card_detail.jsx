import React from "react";

const Section2_card_detail = ({ item }) => {
  return (
    <div className="border-black popup popclose border-[1px] border-solid">
      <p className="skillTitle">{item?.name}</p>
      <div style={{ "background-image": `url(${item?.src})` }} className="popclose"></div>
      <p className="popclose">{item?.text}</p>
    </div>
  );
};

export default Section2_card_detail;
