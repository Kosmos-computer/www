import { signInUrl, signUpUrl, siteMeta } from "../content/site-content";
import shared from "../styles/shared.module.css";
import { ChunkyButton } from "./ChunkyButton";
import { HeroAppPreview } from "./HeroAppPreview";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={shared.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>{siteMeta.tagline}</h1>
          <p className={styles.description}>{siteMeta.description}</p>
          <div className={styles.actions}>
            <ChunkyButton href={signUpUrl}>Get started →</ChunkyButton>
            <ChunkyButton href={signInUrl} variant="secondary">
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
