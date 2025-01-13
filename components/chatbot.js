'use client';

import Script from "next/script";

export const ChatBotScripts = () => {
    return (
        <Script
            strategy="afterInteractive"
            id="yellow-messenger"
            src="/static/yellowai.js"
        >
        </Script>
    )
}