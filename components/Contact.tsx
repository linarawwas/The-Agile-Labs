"use client";

import ScrollReveal from "./ScrollReveal";
import CalendlyEmbed from "./CalendlyEmbed";
import styles from "./Contact.module.css";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "96171950364";

function val(id: string, otherId?: string): string {
  if (typeof document === "undefined") return "";
  const sel = document.getElementById(id) as HTMLSelectElement | null;
  if (!sel) return "";
  const v = sel.value;
  if (otherId) {
    const opt = sel.options[sel.selectedIndex];
    if (opt && opt.dataset.other !== undefined) {
      return (document.getElementById(otherId) as HTMLInputElement | null)?.value || "Other";
    }
  }
  return v || "—";
}

function composeWhatsApp(ev: React.FormEvent<HTMLFormElement>) {
  ev.preventDefault();
  const name = ((document.getElementById("f-name") as HTMLInputElement)?.value || "there").trim();
  const need = val("f-need", "f-need-other");
  const problem = val("f-problem", "f-problem-other");
  const when = val("f-when", "f-when-other");
  const budget = val("f-budget", "f-budget-other");
  const extra = ((document.getElementById("f-extra") as HTMLTextAreaElement)?.value || "").trim();

  const lines = [
    `Hello The Agile Labs — I'm ${name}.`,
    ``,
    `I'm exploring ${need} for ${problem}.`,
    `Timeline: ${when}. Starting range: ${budget}.`,
  ];
  if (extra) lines.push("", extra);
  const msg = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noreferrer");
}

interface SelectFieldProps {
  id: string;
  otherId: string;
  label: string;
  options: string[];
  helper?: string;
}

function SelectField({ id, otherId, label, options, helper }: SelectFieldProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const opt = e.target.options[e.target.selectedIndex];
    const other = document.getElementById(otherId) as HTMLInputElement | null;
    if (!other) return;
    const isOther = opt.dataset.other !== undefined;
    other.hidden = !isOther;
    if (isOther) other.focus();
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div>
        <select id={id} name={id} onChange={handleChange} className={styles.select}>
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
          <option data-other="">Other</option>
        </select>
        <input
          className={styles.otherInput}
          id={otherId}
          name={otherId}
          type="text"
          placeholder="Describe…"
          hidden
        />
        {helper && <div className={`mono ${styles.helper}`}>{helper}</div>}
      </div>
    </div>
  );
}

export default function Contact() {
  function handleAltWa(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const msg = encodeURIComponent("Hello The Agile Labs — I'd like to reach out about a project.");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noreferrer");
  }

  return (
    <section id="contact">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <span className="eyebrow">Contact · 05</span>
          <h2 className="section-title">Book a call, or send the brief.</h2>
          <p className="lede">
            A free 30-minute discovery call goes straight to Google Meet. If
            you&apos;d rather write, the form composes a WhatsApp message in
            your hand.
          </p>
        </ScrollReveal>

        <div className={styles.contactGrid}>
          {/* Calendly inline embed */}
          <ScrollReveal className={styles.calendlyWrap}>
            <CalendlyEmbed />
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal
            as="form"
            className={styles.form}
            id="inquiry-form"
            onSubmit={composeWhatsApp as unknown as React.FormEventHandler}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="f-name">Name</label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className={styles.input}
              />
            </div>

            <SelectField
              id="f-need"
              otherId="f-need-other"
              label="What do you need?"
              options={[
                "A full operational platform",
                "A billing and accounting module",
                "A field operations / dispatch system",
                "WhatsApp-based customer comms",
                "A migration from a legacy system",
                "An architecture sprint",
              ]}
            />

            <SelectField
              id="f-problem"
              otherId="f-problem-other"
              label="What problem are you solving?"
              options={[
                "Operations still run on paper",
                "Billing reconciliation eats time",
                "No real-time view of the field",
                "Customer comms are scattered",
                "Legacy system needs replacing",
              ]}
            />

            <SelectField
              id="f-when"
              otherId="f-when-other"
              label="Timeline"
              options={[
                "Within 1 month",
                "Within 3 months",
                "Within 6 months",
                "This year",
                "Exploring",
              ]}
            />

            <SelectField
              id="f-budget"
              otherId="f-budget-other"
              label="Starting range"
              options={[
                "Under $10k",
                "$10k – $25k",
                "$25k – $50k",
                "$50k – $100k",
                "$100k+",
                "Not sure yet",
              ]}
              helper="We use this only for scoping, not pricing. We'll match the work to it."
            />

            <div className={styles.field}>
              <label htmlFor="f-extra">Anything else?</label>
              <textarea
                id="f-extra"
                name="extra"
                placeholder="Optional context — links, constraints, current setup."
                className={styles.textarea}
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className="btn btn-primary">
                Send via WhatsApp <span className="arrow">→</span>
              </button>
              <span className={styles.altWhatsapp}>
                or{" "}
                <a href="#" onClick={handleAltWa}>
                  send a message directly ↗
                </a>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
