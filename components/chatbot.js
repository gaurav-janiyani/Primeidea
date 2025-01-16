'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// export const ChatBotScripts = () => {
//     return (
//         <Script
//             strategy="afterInteractive"
//             id="yellow-messenger"
//             type="text/javascript"
//             src="/static/yellowai.js?no-cache=${new Date().getTime()}"
//             async
//         />
//     )
// }


const YellowMessengerWidget = () => {
  
  useEffect(() => {
    window.ymConfig = {
      bot: 'x1734168923745',
      logging: true,
      alignRight: true,
    };

    const loadYellowMessengerScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      // For V1 bot
      // script.src = 'https://app.yellowmessenger.com/widget/main.js';
      //For V2 bot
      script.src = 'https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js';

      script.onload = () => {
        const ic = window.YellowMessenger;
        if (typeof ic === 'function') {
          ic('reattach_activator');
          ic('update', window.ymConfig);
        }
      };
      document.body.appendChild(script);
    };

    loadYellowMessengerScript();

    return () => {
      // For V1 bot
      // const script = document.querySelector(`script[src="https://app.yellowmessenger.com/widget/main.js"]`);
      // For V2 bot
      const script = document.querySelector(`script[src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js"]`);

      if (script) {
        document.body.removeChild(script);
      }
    };
  });

  return null;
};

export default YellowMessengerWidget;