import ScrollReveal from "./ScrollReveal";
import StatCounter from "./StatCounter";
import styles from "./Products.module.css";

const trxStats = [
  { to: 1, suffix: "", label: "Crews onboarded" },
  { to: 150, suffix: "+", label: "Daily work orders" },
  { to: 99.2, suffix: "%", decimals: 1, label: "Reliability" },
];

const powerbillStats = [
  { to: 1300, suffix: "+", format: "comma" as const, label: "Accounts being migrated" },
  { to: 70, suffix: "%", label: "Paper reduction" },
  { to: 1, suffix: "", label: "Operator onboarded" },
];

const trxTags = ["Delivery Management", "Full Field Control", "Mobile", "Route Accounting"];
const powerbillTags = ["Billing", "Accounting", "Imports", "Collections", "Audit"];

export default function Products() {
  return (
    <section id="products">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Selected work · 02</span>
          <h2 className="section-title">
            Two systems, in production and in implementation.
          </h2>
          <p className="lede">
            Client names are withheld — they have no online presence. Stat
            blocks and capability summaries are live.
          </p>
        </ScrollReveal>

        {/* TRX */}
        <ScrollReveal as="article" className={styles.product} id="trx">
          <header className={styles.productHead}>
            <h3 className={styles.productName}>
              <span className={`mono ${styles.productTag}`}>↪ PRODUCT_01</span>
              TRX
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
              href="https://trx.theagilelabs.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit TRX <span aria-hidden="true">↗</span>
            </a>
          </header>
          <div className={styles.productBody}>
            <p>
              Daily work orders, route accounting, offline-first capture in the
              field, and customer comms over WhatsApp — running operations for a
              regional distributor in South Lebanon.
            </p>
            <StatCounter stats={trxStats} />
            <div className={styles.tagRow}>
              {trxTags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* PowerBill */}
        <ScrollReveal as="article" className={styles.product} id="powerbill">
          <header className={styles.productHead}>
            <h3 className={styles.productName}>
              <span className={`mono ${styles.productTag}`}>↪ PRODUCT_02</span>
              PowerBill
            </h3>
            <div className={styles.productDomain}>
              Billing and accounting platform for electricity distribution.
            </div>
            <div className={`${styles.productStatus} ${styles.muted}`}>
              <span className={`${styles.pulse} ${styles.pulseMuted}`} />
              <span>In implementation · South Lebanon</span>
            </div>
          </header>
          <div className={styles.productBody}>
            <p>
              A regional electricity operator is migrating customer accounts and
              historical balances from a legacy system into PowerBill ahead of
              cutover. Multi-currency books, collections, and audit ship with it.
            </p>
            <StatCounter stats={powerbillStats} />
            <div className={styles.tagRow}>
              {powerbillTags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
