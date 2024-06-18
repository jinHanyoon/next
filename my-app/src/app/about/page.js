'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import Title from '../notes/data';
import useClient from '../adddata/page';
import Writing from '../notes/writing';

export default function Hero() {
  const [showTitle, setShowTitle] = useState(true);
  const { pageData, handleDelete } = useClient();
  // 업로드 함수(랜더)
  const render= () => {
    setShowTitle(false);}
    const render02= () => {
      setShowTitle(true);}

    return (
      <section className="text-gray-600 body-font h-100vh">
     

     <Writing/>
 

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {showTitle && (
            <>
              {pageData.map((dataItem, index) => (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
  <Image
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/img_05.jpg"
                      width="500"
                      height="500"
                    />
                <p onClick={() => handleDelete(dataItem.title, dataItem.body)} className="absolute top-2 right-2 w-1/12 h-1/6 bg-sky-300/50 rounded-full text-center font-bold text-white leading-loose">X</p>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SuPaBase</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{dataItem.title}</h2>
                    <p className="mt-1">{dataItem.body}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

      </div>
    </section>


    );
  }
  