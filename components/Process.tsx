import ScrollReveal from "./ScrollReveal";
import styles from "./Process.module.css";

const phases = [
  { step: "PHASE 01", title: "Discovery", body: "Map workflows, systems, and risks." },
  { step: "PHASE 02", title: "Architecture", body: "Define domains, ownership, and contracts." },
  { step: "PHASE 03", title: "Delivery", body: "Incremental slices with real data." },
  { step: "PHASE 04", title: "Handover", body: "Harden, document, and transfer ownership." },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Process · 03</span>
          <h2 className="section-title">
            Four phases. One commitment to ownership.
          </h2>
        </ScrollReveal>

        <div className={styles.processGrid}>
          {phases.map((phase) => (
            <ScrollReveal key={phase.step} className={styles.phase}>
              <span className={`mono ${styles.step}`}>{phase.step}</span>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className={styles.processNote}>
          <span className="mono">NOTE —</span> Engagements typically begin with a
          fixed-scope architecture sprint.
        </ScrollReveal>
      </div>
    </section>
  );
}
