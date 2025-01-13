'use client';

import Script from 'next/script';

export const ChatBotScripts = () => {
    return (
        <Script
            src="/static/yellowai.js"
            strategy="afterInteractive"
            id="yellow-messenger"
        />
    );
}