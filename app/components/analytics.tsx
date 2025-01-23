"use client";

import { GoogleTagManager } from "@next/third-parties/google";

export function Analytics() {
  const token = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
  if (!token) {
    return null;
  }
  return (
    <>
      <GoogleTagManager gtmId="" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${token}');
            `,
        }}
      />
    </>
  );
}
