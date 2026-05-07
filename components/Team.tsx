import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Team · 04</span>
          <h2 className="section-title">
            Two co-founders. Distinct roles. Equal billing.
          </h2>
        </ScrollReveal>

        <div className={styles.teamGrid}>
          <ScrollReveal as="article" className={styles.person}>
            <div className={styles.portrait}>
              <Image
                src="/khalil.png"
                alt="Portrait of Khalil Rawas"
                width={360}
                height={360}
                loading="lazy"
              />
            </div>
            <div className={styles.role}>Co-founder · Operational systems</div>
            <h3 className={styles.name}>Khalil Rawas</h3>
            <p className={styles.bio}>
              Forty years building the operational systems Lebanese and regional
              businesses run on — accounting, inventory, payroll, school
              administration, clinics, dealerships, printing, distribution.
              He&apos;s written the ledgers, the stock movements, the salary
              cycles, the patient files, and the business reports that sit
              underneath an industry. At The Agile Labs he advises on every
              engagement: how the books should actually balance, how the
              inventory should actually move, how the payroll should actually
              run. The accounting and operational logic in our work comes from
              his decades of having already solved these problems in production.
            </p>
            <div className={styles.links}>
              <a className={styles.placeholder} aria-disabled="true">
                LinkedIn ↗
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal as="article" className={styles.person}>
            <div className={styles.portrait}>
              <Image
                src="/lina.png"
                alt="Portrait of Lina Rawas"
                width={360}
                height={360}
                loading="lazy"
              />
            </div>
            <div className={styles.role}>Co-founder · Architecture &amp; delivery</div>
            <h3 className={styles.name}>Lina Rawas</h3>
            <p className={styles.bio}>
              Builds and ships The Agile Labs&apos;s production work. Architected
              and delivered TRX — the offline-capable platform running daily
              distribution operations in South Lebanon, processing 12k+ monthly
              transactions and cutting billing reconciliation time by 40%. Owns
              each engagement end-to-end, from system design through production
              rollout.
            </p>
            <div className={styles.links}>
              <a
                href="https://linkedin.com/in/linarawas"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/linarawwas"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
