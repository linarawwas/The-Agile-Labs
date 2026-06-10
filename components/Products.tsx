import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import StatCounter from "./StatCounter";
import styles from "./Products.module.css";

const aquaopsStats = [
  { to: 1, suffix: "", label: "Crews onboarded" },
  { to: 150, suffix: "+", label: "Daily work orders" },
  { to: 99.2, suffix: "%", decimals: 1, label: "Reliability" },
];

const aquaopsTags = ["Delivery Management", "Full Field Control", "Mobile", "Route Accounting"];

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Selected work · 02</span>
          <h2 className="section-title">
            Our flagship platform, live in production.
          </h2>
          <p className="lede">
            Client names are withheld — they have no online presence. Stat
            blocks and capability summaries are live.
          </p>
        </ScrollReveal>

        {/* AquaOps */}
        <ScrollReveal as="article" className={styles.product} id="aquaops">
          <header className={styles.productHead}>
            <h3 className={styles.productName}>
              <span className={`mono ${styles.productTag}`}>↪ PRODUCT_01</span>
              <Image
                src="/aquaops-icon.svg"
                alt="AquaOps logo"
                width={28}
                height={28}
                style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.4em" }}
              />
              <a
                href="https://aquaops.app"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                AquaOps
              </a>
            </h3>
            <div className={styles.productDomain}>
              Live operational platform for water distribution.
            </div>
            <div className={styles.productStatus}>
              <span className={styles.pulse} />
              <span>Live in production · Saida</span>
            </div>
            <a
              className={styles.productLink}
              href="https://aquaops.app"
              target="_blank"
              rel="noreferrer"
            >
              Visit AquaOps <span aria-hidden="true">↗</span>
            </a>
          </header>
          <div className={styles.productBody}>
            <p>
              Daily work orders, route accounting, offline-first capture in the
              field, and customer comms over WhatsApp — running operations for a
              regional distributor in South Lebanon.
            </p>
            <StatCounter stats={aquaopsStats} />
            <div className={styles.tagRow}>
              {aquaopsTags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
