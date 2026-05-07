"use client";

import { useEffect, useRef } from "react";

interface Stat {
  to: number;
  suffix: string;
  decimals?: number;
  format?: "comma";
  label: string;
}

interface Props {
  stats: Stat[];
}

function formatNumber(n: number, decimals: number, comma: boolean): string {
  if (decimals) return n.toFixed(decimals);
  if (comma) return Math.round(n).toLocaleString("en-US");
  return Math.round(n).toString();
}

function tickUp(
  el: HTMLElement,
  to: number,
  decimals: number,
  suffix: string,
  comma: boolean
) {
  const dur = 1200;
  const start = performance.now();
  function step(now: number) {
    const t = Math.min(1, (now - start) / dur);
    const e = 1 - Math.pow(1 - t, 3);
    const v = to * e;
    el.textContent = formatNumber(v, decimals, comma) + suffix;
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = formatNumber(to, decimals, comma) + suffix;
  }
  requestAnimationFrame(step);
}

export default function StatCounter({ stats }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const valRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const triggered = useRef(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            stats.forEach((stat, i) => {
              const el = valRefs.current[i];
              if (el) {
                tickUp(
                  el,
                  stat.to,
                  stat.decimals ?? 0,
                  stat.suffix,
                  stat.format === "comma"
                );
              }
            });
            observer.unobserve(row);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, [stats]);

  return (
    <div
      ref={rowRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            padding: "28px 24px 28px 0",
            borderRight: i < stats.length - 1 ? "1px solid var(--hairline)" : "none",
            paddingLeft: i > 0 ? "24px" : undefined,
          }}
        >
          <span
            ref={(el) => { valRefs.current[i] = el; }}
            className="mono"
            style={{
              fontSize: "clamp(28px, 3.4vw, 44px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              display: "block",
            }}
          >
            {stat.decimals ? `0.${"0".repeat(stat.decimals)}` : "0"}
            {stat.suffix}
          </span>
          <span
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "var(--muted)",
              fontFamily: "var(--font-geist-mono), monospace",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
