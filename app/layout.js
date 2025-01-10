import { Manrope } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  metadataBase: new URL('https://primeidea.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: {
    default: "PrimeIdea Ventures",
    template: "%s | PrimeIdea Ventures"
  },
  description: "Expert financial planning and investment advisory services. Specializing in mutual funds, insurance, and wealth management solutions.",
  keywords: [
    "financial planning",
    "investment advisory",
    "mutual funds",
    "insurance",
    "wealth management",
    "retirement planning",
    "Gujarat financial services",
    "Indian investment advisor"
  ],
  authors: [{ name: "Partha Shah" }],
  creator: "PrimeIdea Ventures",
  publisher: "PrimeIdea Ventures",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-ms-validation-code',
  },
  assets: ['https://primeidea.in'],
  manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${manrope.variable}`}>
      <body
        className={manrope.className}
      >
        {children}
        <Script id="yellow-ai" strategy="afterInteractive">
          {`
            window.ymConfig = {"bot":"x1734168923745","host":"https://r0.cloud.yellow.ai"};
            (function() {
                var w = window,
                    ic = w.YellowMessenger;
                if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
                else {
                    var d = document,
                        i = function() {
                            i.c(arguments)
                        };
                    function l() {
                        var e = d.createElement("script");
                        e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
                        var t = d.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e, t)
                    }
                    i.q = [], i.c = function(e) {
                        i.q.push(e)
                    }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
