import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

function Section4() {
  const [mode, setMode] = useState("list");
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState("");
  const modName = useRef([]);
  const modEmail = useRef([]);
  const modText = useRef([]);
  const cmName = useRef([]);
  const cmEmail = useRef([]);
  const cmText = useRef([]);

  const contact = [
    { id: 1, text: "010-4338-4358", address: "#", src: "./assets/phone.png" },
    { id: 2, text: "lim132445@gmail.com", address: "#", src: "./assets/mail.png" },
    { id: 3, text: "Github", address: "https://github.com/Sovidi", src: "./assets/github.png" },
    { id: 4, text: "https://velog.io/@qwert4572", address: "https://velog.io/@qwert4572", src: "./assets/velog.png" },
    { id: 5, text: "Instagram", address: "https://www.instagram.com/chaemmni/", src: "./assets/instagram.png" }
  ]

  const commentGet = async () => {
    await axios.get(`/api/comment`)
    .then(res=>{
      let d = res.data
      setComments(d.sort((b, a)=>{
        var nameA = a._id; 
        var nameB = b._id; 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }));
    });
  };

  const insertComment = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let today = new Date();
    formData.append("day", `${String(today.getFullYear())}.${String(today.getMonth()+1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`)
    formData.append("time", `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`)
    let objData = Object.fromEntries(formData);

    await axios.post(`/api/comment`, objData)
    // .then(res=>{
    //   this.comment = res.data;
    // })
    await commentGet();
    cmName.current.value = "";
    cmEmail.current.value = "";
    cmText.current.value = "";
  };

  const modifyComment = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let today = new Date();
    formData.append("time", `${String(today.getFullYear())}.${String(today.getMonth()+1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`)
    let objData = Object.fromEntries(formData);
    console.log(objData)

    await axios.put(`/api/comment`, objData)
    // .then(res=>{
    //   this.comment = res.data;
    // })
    await commentGet();
    modName.current.value = "";
    modEmail.current.value = "";
    modText.current.value = "";
    setMode("list");
  };

  const deleteComment = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/comment?name=${modName.current.value}&email=${modEmail.current.value}`)
    // .then(res=>{
    //   this.comment = res.data;
    // })
    await commentGet();
    modName.current.value = "";
    modEmail.current.value = "";
    modText.current.value = "";
    setMode("list");
  };

  useEffect(()=>{
    commentGet();
  }, [])



  return (
          <section className="section section4">
        <div className="sec1">
          <div className="title">
            <strong>CONTACT</strong>
            <div className="contactTextBox">
              {
                contact.map(item=>(
                  <a className="contactCell" href={item.address}>
                    <figure><div style={{"background-image": `url(${item.src})`}}></div></figure>
                    <span>{ item.text }</span>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
        <div className={`sec2 ${mode == "list" ? "list" : ""}`}>
          <form onSubmit={(e)=>{insertComment(e)}} className="comment">
            <strong>Comments 😎</strong>
            <input ref={cmName} required placeholder="이름" type="text" name="name" className="namewrite"/>
            <input ref={cmEmail} required placeholder="e-mail" type="email" name="email" className="emailwrite"/>
            <textarea ref={cmText} required placeholder="text of yours" name="text" className="textwrite"></textarea>
            <button className="writebutton">댓글 달기</button>
            {/* <button type="button" @click="modechange('modify')" class="writebutton">댓글 수정</button> */}
          </form>
          <ul className="commentwriting">
            <span>댓글들</span>
            {
            comments.map(item=>(
              <li className="commentcell">
                <div className="info">
                  <p>{ item.name }</p>
                  <b>{ item.day }</b>&nbsp;
                  <b>{ item.time }</b>
                </div>
                <div className="texts">
                  <p>{ item.text }</p>
                  <button onClick={()=>{setMode("modify"); setCommentName(item.name);}} className="modbutton">수정하기</button>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
        <div className={`sec2 ${mode == "modify" ? "modify" : ""}`}>
          <form onSubmit={(e)=>{modifyComment(e)}} className="comment">
            <strong>댓글 수정하기 😎</strong>
            <input ref={modName} value={commentName} required placeholder="작성한 댓글의 이름을 적어주세요" type="text" name="name" className="namewrite modname"/>
            <input ref={modEmail} required placeholder="작성한 댓글의 e-mail을 적어주세요" type="email" name="email" className="emailwrite"/>
            <textarea ref={modText} required placeholder="수정할 댓글 내용을 적어주세요" name="text" className="textwrite"></textarea>
            <button class="writebutton">수정하기</button>
            <button type="button" className="writebutton delete" onClick={deleteComment}>삭제하기</button>
            <button type="button" className="writebutton cancel" onClick={()=>{setMode('list')}}>취소하기</button>
          </form>
        </div>
      </section>

  )
}

export default Section4