import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id="
            />

            <Script id="google-analytics">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
          `}
            </Script>
        </>
    )
}

export default GoogleAnalytics