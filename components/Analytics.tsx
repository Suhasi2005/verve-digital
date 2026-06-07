import Script from "next/script";

/**
 * Google Analytics 4 — only renders if NEXT_PUBLIC_GA_ID is set, so it's a
 * complete no-op until you add your measurement ID (e.g. in .env.local or
 * Netlify env vars: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX).
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
