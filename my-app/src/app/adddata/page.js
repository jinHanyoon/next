
'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function useClient() {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [pageData]); // pageData 상태가 변경될 때마다 fetchData 호출

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('page01').select('*');
      if (error) {
        throw error;
      }
      setPageData(data); // 데이터 가져오기 성공 시 페이지 데이터 업데이트
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.from('page01').insert([{ title: titleValue, body: bodyValue }]);
      if (error) {
        throw error;
      }
      setPageData([...pageData, { title: titleValue, body: bodyValue }]); // 새 데이터 추가 후 페이지 데이터 업데이트
      await fetchData(); // 데이터가 추가된 후에 최신 데이터로 업데이트
      setTitleValue(''); // 입력 필드 초기화
      setBodyValue('');
    } catch (error) {
      console.error('Error adding data:', error.message);
    }
  };

  const handleDelete = async (title, body) => {
    try {
      const { error } = await supabase.from('page01').delete().eq('title', title).eq('body', body);
      if (error) {
        throw error;
      }
      setPageData(prevData => prevData.filter(item => item.title !== title || item.body !== body)); // 삭제된 항목 제외하고 페이지 데이터 업데이트
    } catch (error) {
      console.error('Error deleting data:', error.message);
    }
  };

  return {
    titleValue,
    setTitleValue,
    bodyValue,
    setBodyValue,
    pageData,
    handleSubmit,
    handleDelete,
    fetchData
  };
}













// 'use client';
// import { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function useClient() {
//   const [titleValue, setTitleValue] = useState('');
//   const [bodyValue, setBodyValue] = useState('');
//   const [pageData, setPageData] = useState([]);

//   const fetchData = async () => {
//     const { data, error } = await supabase.from('page01').select('*');
//      if (error) {
//     //   console.error('Error fetching data:', error.message);
//       return;
//      }
//     setPageData(data);
//   };


// useEffect(() => {
//     fetchData();
//   }, [pageData]);

//   const handleSubmit = async () => {
//     try {
//       const { data, error } = await supabase.from('page01').insert([{ title:titleValue, body:bodyValue },]);
//     //   if (error) {
//     //     throw error;
//     //   }

//       // 새로운 데이터가 추가된 후에 페이지 데이터에 반영
//       setPageData([...pageData, { title: titleValue, body: bodyValue }]);
//     // 새로운 데이터가 추가된 후에 페이지 데이터에 반영
//     await fetchData();
//       // 입력 필드 초기화
//       setTitleValue('');
//       setBodyValue('');
//     } 
//     catch (error) {
//     //   console.error('Error adding data:', error.message);
//     }
//   };


//   const handleDelete = async (title, body) => {
//     try {
//       const { error } = await supabase.from('page01').delete().eq('title', title).eq('body', body);
//       if (error) {
//         throw error;
//       }
  
//       // Remove the deleted item from the pageData state
//       setPageData(pageData.filter(item => item.title !== title || item.body !== body));
//     } catch (error) {
//     //   console.error('Error deleting data:', error.message);
//     }
//   };



//   return {
//     titleValue,
//     setTitleValue,
//     bodyValue,
//     setBodyValue,
//     pageData,
//     handleSubmit,
//     handleDelete,
//     fetchData
//   };
// }