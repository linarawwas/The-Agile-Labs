"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const beat1 = ["Forty", "years", "of", "operational", "software,"];
const beat2 = ["shipped", "on", "a", "modern", "stack."];

export default function Hero() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[];

    function reveal(idx: number) {
      const w = words[idx];
      if (!w) return;
      requestAnimationFrame(() => w.classList.add(styles.wordIn));
    }

    function runBeat(start: number, end: number, delay: number) {
      for (let k = start; k < end; k++) {
        setTimeout(() => reveal(k), delay + (k - start) * 70);
      }
    }

    function go() {
      runBeat(0, 5, 200);
      runBeat(5, 10, 200 + 5 * 70 + 280);
    }

    const timer = setTimeout(go, 60);
    return () => clearTimeout(timer);
  }, []);

  const allWords = [...beat1, ...beat2];

  return (
    <section id="hero" className={styles.hero}>
      <div className="wrap">
        <div className={styles.heroEyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          <span>The&nbsp;Agile&nbsp;Labs · Boutique&nbsp;software&nbsp;lab · Beirut</span>
        </div>

        <h1
          className={styles.claim}
          aria-label="Forty years of operational software, shipped on a modern stack."
        >
          <span className={styles.beat}>
            {beat1.map((word, i) => (
              <span
                key={i}
                className={styles.word}
                ref={(el) => { wordRefs.current[i] = el; }}
              >
                {word}
              </span>
            ))}
          </span>
          <span className={styles.beat}>
            {beat2.map((word, i) => (
              <span
                key={i}
                className={styles.word}
                ref={(el) => { wordRefs.current[5 + i] = el; }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className={styles.heroSub}>
          We digitize the operations your business still runs on paper — billing,
          inventory, dispatch, and field work — into mobile platforms that work
          offline, report in real time, and reach your customers on WhatsApp.
        </p>

        <div className={styles.heroCta}>
          <a href="#contact" className="btn btn-primary">
            Book a discovery call <span className="arrow">→</span>
          </a>
          <a href="#products" className="btn btn-secondary">
            See our work <span className="arrow">→</span>
          </a>
        </div>

        <div className={styles.heroMeta}>
          <div>
            <span className="mono">EST</span>
            <span>2024 · Beirut, LB</span>
          </div>
          <div>
            <span className="mono">DOMAINS</span>
            <span>Utilities · Operations</span>
          </div>
          <div>
            <span className="mono">IN PRODUCTION</span>
            <span>AquaOps · 99.2% reliability</span>
          </div>
          <div>
            <span className="mono">RESPONSE</span>
            <span>Within 2 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
