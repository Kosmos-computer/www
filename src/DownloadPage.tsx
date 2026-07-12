import { PlatformLogo, PlatformLogoPanel } from "@brand/PlatformLogo";
import logoStyles from "@brand/PlatformLogo.module.css";
import { logoForActionLabel, logosForPlatformId } from "@brand/platformLogos";
import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ImagePlaceholder } from "./components/ImagePlaceholder";
import { ChunkyButton } from "./components/ChunkyButton";
import { downloadOptions, signUpUrl } from "./content/site-content";

function DownloadActions() {
  return (
    <div className={styles.heroActions}>
      <ChunkyButton href={signUpUrl}>Get started</ChunkyButton>
      <ChunkyButton href="/platforms.html" variant="secondary">
        Platform details
      </ChunkyButton>
    </div>
  );
}

function HostedCallout() {
  return (
    <section className={`${styles.block} ${styles.callout}`}>
      <div className={shared.card}>
        <div className={styles.calloutInner}>
          <div>
            <h2 className={styles.calloutTitle}>Hosted plans at launch</h2>
            <p className={styles.calloutBody}>
              Getting started includes $5 of inference credits. Monthly hosted plans provision a
              private instance with usage &amp; credits built in.
            </p>
            <ChunkyButton href={signUpUrl} className={styles.calloutCta}>
              Get started
            </ChunkyButton>
          </div>
          <ImagePlaceholder label="Hosted" fill className={styles.calloutMedia} />
        </div>
      </div>
    </section>
  );
}

export default function DownloadPage() {
  return (
    <PageShell
      title="Download — Kosmos"
      description="Desktop builds, Android APK, Chromebook install, and self-host options."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Download</p>
        <h1 className={styles.heroTitle}>Get Kosmos on your devices</h1>
        <p className={styles.heroBody}>
          Public download links open at launch. Until then, beta testing signups are closed —
          check back soon for desktop builds, APKs, and hosted plans with $5 getting-started
          credits.
        </p>
        <DownloadActions />
      </section>

      <section className={styles.block}>
        <div className={styles.downloadGrid}>
          {downloadOptions.map((option) => (
            <article key={option.id} id={option.id} className={styles.downloadCard}>
              <PlatformLogoPanel ids={logosForPlatformId(option.id)} />
              <h2 className={styles.deviceTitle}>{option.title}</h2>
              <p className={styles.deviceBody}>{option.description}</p>
              <ul className={styles.actionList}>
                {option.actions.map((action) => {
                  const logoId = logoForActionLabel(action.label);

                  return (
                    <li key={action.label}>
                      <span className={logoStyles.inlineLabel}>
                        {logoId ? <PlatformLogo id={logoId} /> : null}
                        <span className={styles.actionLabel}>{action.label}</span>
                      </span>
                      <span className={styles.actionHint}>{action.hint}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <HostedCallout />
    </PageShell>
  );
}
