import { agentHighlights } from "../content/site-content";
import shared from "../styles/shared.module.css";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./AgentExperienceSection.module.css";

export function AgentExperienceSection() {
  return (
    <section id="agents" className={styles.section}>
      <div className={shared.sectionHeader}>
        <p className={shared.sectionEyebrow}>Agents</p>
        <h2 className={shared.sectionTitle}>
          Agents that use the OS.{" "}
          <span className={shared.sectionTitleMuted}>
            Cursor control, living avatars, and a studio that builds in place.
          </span>
        </h2>
      </div>

      <div className={shared.card}>
        <div className={styles.grid}>
          {agentHighlights.map((item) => (
            <article key={item.title} className={styles.cell}>
              <ImagePlaceholder label={item.placeholder} fill />
              <h3 className={styles.cellTitle}>{item.title}</h3>
              <p className={styles.cellBody}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a className={shared.linkArrow} href="/features.html#agent-cursor">
            See agent features
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
