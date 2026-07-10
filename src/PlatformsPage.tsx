import { PlatformLogoGroup, PlatformLogoPanel } from "@brand/PlatformLogo";
import logoStyles from "@brand/PlatformLogo.module.css";
import { heroPlatformLogos, logosForPlatformId, logosForPlatformName } from "@brand/platformLogos";
import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ChunkyButton } from "./components/ChunkyButton";
import { platformMatrix, platformTiles } from "./content/site-content";

export default function PlatformsPage() {
  return (
    <PageShell
      title="Platforms — Kosmos"
      description="Kosmos runs on desktop, Android, Chromebook, SteamOS, and the browser."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Platforms</p>
        <h1 className={styles.heroTitle}>Kosmos runs where you work &amp; play</h1>
        <p className={styles.heroBody}>
          One OS across Windows, macOS, Linux, Android APK, Chromebook, Steam Deck, and the
          browser — sideload, PWA, or native desktop when we launch.
        </p>
        <div className={logoStyles.strip}>
          <PlatformLogoGroup ids={heroPlatformLogos} size="medium" />
        </div>
        <div className={styles.heroActions}>
          <ChunkyButton href="/download.html">Download options</ChunkyButton>
          <ChunkyButton href="/features.html" variant="secondary">
            Browse features
          </ChunkyButton>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Availability matrix</h2>
        <div className={shared.card}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Install method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {platformMatrix.map((row) => (
                  <tr key={row.platform}>
                    <td>
                      <div className={logoStyles.platformCell}>
                        <PlatformLogoGroup
                          ids={logosForPlatformName(row.platform)}
                          size="small"
                        />
                        <span>{row.platform}</span>
                      </div>
                    </td>
                    <td>{row.method}</td>
                    <td>
                      <span className={styles.status} data-status={row.status}>
                        {row.statusLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Device surfaces</h2>
        <div className={styles.deviceGrid}>
          {platformTiles.map((tile) => (
            <article key={tile.id} id={tile.id} className={styles.deviceCard}>
              <PlatformLogoPanel ids={logosForPlatformId(tile.id)} />
              <h3 className={styles.deviceTitle}>{tile.title}</h3>
              <p className={styles.deviceBody}>{tile.description}</p>
              <span className={styles.status} data-status={tile.status}>
                {tile.statusLabel}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.block} ${styles.callout}`}>
        <div className={shared.card}>
          <div className={styles.calloutInner}>
            <div>
              <h2 className={`${styles.calloutTitle} ${logoStyles.titleRow}`}>
                <PlatformLogoGroup ids={logosForPlatformId("steamos")} size="small" />
                <span>SteamOS integration</span>
              </h2>
              <p className={styles.calloutBody}>
                Run Kosmos on Steam Deck with embed mode for single-app shells — chat, studio,
                or any workspace full-viewport without desktop chrome.
              </p>
            </div>
            <PlatformLogoPanel
              ids={logosForPlatformId("steamos")}
              className={styles.calloutMedia}
            />
          </div>
        </div>
      </section>

      <section className={styles.ctaRow}>
        <ChunkyButton href="/download.html" size="large">
          Go to download
        </ChunkyButton>
      </section>
    </PageShell>
  );
}
