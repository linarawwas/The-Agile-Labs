import ScrollReveal from "./ScrollReveal";
import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section id="testimonial" className={`invert ${styles.testimonial}`}>
      <div className="wrap">
        <ScrollReveal as="blockquote" className={styles.quote}>
          Before AquaOps, we spent time every day comparing paper and Excel numbers.
          We also had at least one problem delivery per week where bottles or
          payments were unclear. With AquaOps, we saved hours, removed the extra
          support roles, and stopped losing money quietly.
        </ScrollReveal>
        <ScrollReveal className={styles.attrib}>
          — Water Company Owner, Lebanon · Early AquaOps Partner
        </ScrollReveal>
      </div>
    </section>
  );
}
