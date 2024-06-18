'use client';
import Image from "next/image";
import { useState } from 'react';
import Title from '../notes/data';



export default function addData() {
  const [showTitle, setShowTitle] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // 업로드 함수(랜더)
  const render= () => {
    setShowTitle(true);}
    const close= () => {
      setShowTitle(false);}



      
  return(
    <>
    
    <h1> 글 쓰기</h1>
    <input className="bg-slate-400"></input>
    <input className="bg-blue-800"></input>
    <div onClick={render}>click</div>
    <div onClick={close}>닫기</div>
    
<div className="flex flex-wrap -m-4">
    {showTitle && <Title />}
    </div>
  </>
);


}