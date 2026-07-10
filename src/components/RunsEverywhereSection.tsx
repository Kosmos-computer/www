import { PlatformLogoPanel } from "@brand/PlatformLogo";
import { logosForPlatformId } from "@brand/platformLogos";
import { platformTiles } from "../content/site-content";
import shared from "../styles/shared.module.css";
import { ChunkyButton } from "./ChunkyButton";
import styles from "./RunsEverywhereSection.module.css";

export function RunsEverywhereSection() {
  return (
    <section id="platforms" className={styles.section}>
      <div className={shared.sectionHeader}>
        <p className={shared.sectionEyebrow}>Platforms</p>
        <h2 className={shared.sectionTitle}>
          Runs everywhere.{" "}
          <span className={shared.sectionTitleMuted}>
            One OS for desktop, mobile, Chromebook, Steam Deck, and the browser.
          </span>
        </h2>
      </div>

      <div className={shared.card}>
        <div className={styles.grid}>
          {platformTiles.map((tile) => (
            <a key={tile.id} className={styles.tile} href={tile.href}>
              <PlatformLogoPanel ids={logosForPlatformId(tile.id)} />
              <div className={styles.tileCopy}>
                <div className={styles.tileTop}>
                  <h3 className={styles.tileTitle}>{tile.title}</h3>
                  <span className={styles.status} data-status={tile.status}>
                    {tile.statusLabel}
                  </span>
                </div>
                <p className={styles.tileBody}>{tile.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerCopy}>
            Sideload APKs, install as a PWA, or download native desktop builds when we launch.
          </p>
          <div className={styles.footerActions}>
            <ChunkyButton href="/platforms.html" variant="secondary">
              Platform details
            </ChunkyButton>
            <ChunkyButton href="/download.html">Download</ChunkyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
