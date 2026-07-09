import { siteMeta } from "../content/site-content";
import shared from "../styles/shared.module.css";
import { ChunkyButton } from "./ChunkyButton";
import { HeroAppPreview } from "./HeroAppPreview";
import { useWaitlist } from "./WaitlistContext";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className={styles.hero}>
      <div className={shared.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>{siteMeta.tagline}</h1>
          <p className={styles.description}>{siteMeta.description}</p>
          <div className={styles.actions}>
            <ChunkyButton onClick={openWaitlist}>Get started →</ChunkyButton>
            <ChunkyButton onClick={openWaitlist} variant="secondary">
              Sign in
            </ChunkyButton>
          </div>
        </div>

        <div className={styles.previewWrap}>
          <HeroAppPreview />
        </div>
      </div>
    </section>
  );
}
