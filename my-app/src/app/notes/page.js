'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

const client = createClient(supabaseUrl, supabaseKey);


export default function Page() {
    const [pageData, setPageData] = useState(''); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: pageData } = await client.from("page01").select('*');
                const { data: loginData } = await client.from("login").select('*');
                setPageData({ pageData, loginData });
            } catch (error) {
                // console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    return pageData
}