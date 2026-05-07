import ScrollReveal from "./ScrollReveal";
import styles from "./Capabilities.module.css";

const caps = [
  {
    num: "01",
    title: "Billing and accounting",
    body: "Multi-currency books, debit and credit, collections, audit trail.",
    anchor:
      "The accounting logic in our work is shaped by systems Khalil has shipped and maintained across clinics, dealerships, schools, and printing companies for four decades.",
    full: false,
  },
  {
    num: "02",
    title: "Field operations",
    body: "Dispatch, work orders, route accounting, offline-first mobile capture.",
    anchor:
      "The inventory and stock-movement logic comes from two decades of Khalil's work building distribution and dealership systems that had to balance every day.",
    full: false,
  },
  {
    num: "03",
    title: "Customer communication",
    body: "Orders and account statements delivered on WhatsApp, where customers already are.",
    anchor: null,
    full: false,
  },
  {
    num: "04",
    title: "Operational visibility",
    body: "Real-time view of shipments and business operations for owners and managers.",
    anchor:
      "The reporting and operational logic draws on the management software Khalil shipped to Lebanese SMBs and institutions across forty years.",
    full: false,
  },
  {
    num: "05",
    title: "Legacy data migration",
    body: "Structured import from older systems into the new platform — accounts, balances, history, attachments. The cutover is the project, not an afterthought.",
    anchor: null,
    full: true,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Capabilities · 01</span>
          <h2 className="section-title">
            What we deliver, written as outcomes — not features.
          </h2>
          <p className="lede">
            Five capabilities, drawn from systems live in production and in
            implementation. Each is something a business owner can already see
            working.
          </p>
        </ScrollReveal>

        <div className={styles.capGrid}>
          {caps.map((cap) => (
            <ScrollReveal
              key={cap.num}
              className={`${styles.cap} ${cap.full ? styles.full : ""}`}
            >
              <div className={styles.num}>{cap.num}</div>
              <div>
                <h3>{cap.title}</h3>
                <p>{cap.body}</p>
                {cap.anchor && <span className={styles.anchor}>{cap.anchor}</span>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
