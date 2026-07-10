import { PlatformLogoPanel } from "@brand/PlatformLogo";
import { logosForPlatformId } from "@brand/platformLogos";
import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ImagePlaceholder } from "./components/ImagePlaceholder";
import { ChunkyButton } from "./components/ChunkyButton";
import { featureCatalog } from "./content/site-content";

export default function FeaturesPage() {
  return (
    <PageShell
      title="Features — Kosmos"
      description="Platforms, voice, Longformer, agent cursor, avatars, Studio, and more."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Features</p>
        <h1 className={styles.heroTitle}>Everything in the shell</h1>
        <p className={styles.heroBody}>
          From platforms and voice to agent cursor, Longformer, and generative apps — a catalog
          of what Kosmos ships today, with honest status on what is still maturing.
        </p>
        <div className={styles.heroActions}>
          <ChunkyButton href="/platforms.html">Platforms</ChunkyButton>
          <ChunkyButton href="/download.html" variant="secondary">
            Download
          </ChunkyButton>
        </div>
      </section>

      {featureCatalog.map((group) => (
        <section key={group.category} className={styles.block}>
          <h2 className={styles.blockTitle}>{group.category}</h2>
          <div className={styles.catalogGrid}>
            {group.items.map((item) => {
              const platformLogos = logosForPlatformId(item.id);

              return (
                <a key={item.id} id={item.id} className={styles.catalogCard} href={item.href}>
                  {platformLogos.length > 0 ? (
                    <PlatformLogoPanel ids={platformLogos} />
                  ) : (
                    <ImagePlaceholder label={item.title} fill />
                  )}
                  <h3 className={styles.deviceTitle}>{item.title}</h3>
                  <p className={styles.deviceBody}>{item.description}</p>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
