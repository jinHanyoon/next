'use client';
import { useState } from 'react';
import Page from '../notes/page';

export default function Home() {
    const pageData = Page();

    
    if (!pageData || !pageData.pageData || !pageData.loginData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Data 추출</h1>
            <ul>
                <li>{pageData.pageData[0]?.title}</li>
                <li>{pageData.loginData[0]?.body}</li>

                <li>03</li>
                <li>04</li>
            </ul>
        </>
    );
}