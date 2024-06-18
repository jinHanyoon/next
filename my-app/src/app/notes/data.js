'use client';
import { useEffect } from 'react';
import Image from "next/image";
import Page from '../notes/page';
// click 시 데이터 추가 
// click -> title body 내용 추가 
// save click 시 data 업데이트  ==> title 연결


export default function Title() {
  const pageData = Page();

  useEffect(() => {
    if (pageData && pageData.pageData) {
      fetchData();
    }
  }, [pageData]); // pageData가 변경될 때마다 fetchData 함수 실행

  const fetchData = async () => {
    if (!pageData || !pageData.pageData || !pageData.loginData) {
      console.log('Loading...');
      return;
    }
    console.log('Data loaded:', pageData.pageData);
  };

  return (
    <>
      {pageData && pageData.pageData && pageData.pageData.map((dataItem, index) => (
        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="img_05.jpg" />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{dataItem.title}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">{dataItem.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}