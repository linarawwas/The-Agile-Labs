"use client";

import { useEffect, useRef, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any> & {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function ScrollReveal({ children, className = "", as: Tag = "div", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag with generic ref
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
