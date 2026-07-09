import { voiceHighlights } from "../content/site-content";
import shared from "../styles/shared.module.css";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./VoiceLongformerSection.module.css";

export function VoiceLongformerSection() {
  return (
    <section id="voice" className={styles.section}>
      <div className={shared.sectionHeader}>
        <p className={shared.sectionEyebrow}>Voice &amp; Longformer</p>
        <h2 className={shared.sectionTitle}>
          Talk, transcribe, remember.{" "}
          <span className={shared.sectionTitleMuted}>
            Full-duplex voice and a transcription studio built into the OS.
          </span>
        </h2>
      </div>

      <div className={shared.card}>
        <div className={styles.intro}>
          <h3 className={styles.introTitle}>Longformer — talk, transcribe, edit</h3>
          <p className={styles.introBody}>
            Speak to Kosmos with local STT/TTS, then open Longformer to chapterize clips,
            summaries, and notes from the same audio stack. Swap voice models from the hub
            without leaving the shell.
          </p>
        </div>

        <div className={styles.grid}>
          {voiceHighlights.map((item) => (
            <article key={item.title} className={styles.cell}>
              <ImagePlaceholder label={item.placeholder} fill />
              <h3 className={styles.cellTitle}>{item.title}</h3>
              <p className={styles.cellBody}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a className={shared.linkArrow} href="/features.html#longformer">
            Explore Longformer
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
