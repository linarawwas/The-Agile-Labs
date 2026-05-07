"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/linamkraw2/30min";

  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${url}?hide_gdpr_banner=1`}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
