'use client';
import React, {useEffect, useState } from 'react';
import useClient from '../adddata/page';

export default function Writing() {
  const { titleValue, setTitleValue, bodyValue, setBodyValue, handleSubmit, fetchData } = useClient();

  const handleSave = async () => {
    await handleSubmit(); // 데이터 저장
    await fetchData(); // 페이지 데이터 다시 불러오기
  };

  return (
    <>
    <div className='bg-stone-700 w-full h-100'>
      <h1>글쓰기</h1> 
      <input
        className="bg-slate-400"
        placeholder="제목"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <textarea
        className="bg-blue-800"
        placeholder="내용"
        value={bodyValue}
        onChange={(e) => setBodyValue(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
      </div>
    </>
  );
}