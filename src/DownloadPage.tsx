import { PlatformLogo, PlatformLogoPanel } from "@brand/PlatformLogo";
import logoStyles from "@brand/PlatformLogo.module.css";
import { logoForActionLabel, logosForPlatformId } from "@brand/platformLogos";
import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ImagePlaceholder } from "./components/ImagePlaceholder";
import { ChunkyButton } from "./components/ChunkyButton";
import type { DesktopPlatform } from "./content/downloads";
import { downloadOptions, signUpUrl } from "./content/site-content";
import { useDesktopDownloads } from "./hooks/useDesktopDownloads";

const platformHints: Record<DesktopPlatform, string> = {
  mac: "Apple Silicon DMG",
  windows: "NSIS installer",
  linux: "AppImage",
};

function DownloadActions() {
  const downloads = useDesktopDownloads();

  return (
    <div className={styles.heroActions}>
      {downloads.mac ? (
        <ChunkyButton href={downloads.mac}>Download for Mac</ChunkyButton>
      ) : null}
      {downloads.windows ? (
        <ChunkyButton href={downloads.windows} variant="secondary">
          Download for Windows
        </ChunkyButton>
      ) : null}
      {downloads.linux ? (
        <ChunkyButton href={downloads.linux} variant="secondary">
          Download for Linux
        </ChunkyButton>
      ) : null}
      <ChunkyButton href={signUpUrl} variant="secondary">
        Get started
      </ChunkyButton>
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

function joinList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function desktopHeroCopy(downloads: ReturnType<typeof useDesktopDownloads>): string {
  const available = [
    downloads.mac ? "macOS" : null,
    downloads.windows ? "Windows" : null,
    downloads.linux ? "Linux" : null,
  ].filter((label): label is string => Boolean(label));

  const missing = [
    !downloads.mac ? "macOS" : null,
    !downloads.windows ? "Windows" : null,
    !downloads.linux ? "Linux" : null,
  ].filter((label): label is string => Boolean(label));

  if (available.length === 0) {
    return "Desktop builds, Android APKs, and hosted plans with $5 getting-started credits open at launch.";
  }

  if (missing.length === 0) {
    return "Desktop builds for macOS, Windows, and Linux are available now. Android packages and hosted plans with $5 getting-started credits follow at launch.";
  }

  return `${joinList(available)} builds are available now. ${joinList(missing)} packages follow — hosted plans will include $5 getting-started credits at launch.`;
}

export default function DownloadPage() {
  const downloads = useDesktopDownloads();

  return (
    <PageShell
      title="Download — Kosmos"
      description="Desktop builds, Android APK, Chromebook install, and self-host options."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Download</p>
        <h1 className={styles.heroTitle}>Get Kosmos on your devices</h1>
        <p className={styles.heroBody}>{desktopHeroCopy(downloads)}</p>
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
                  const platform =
                    "href" in action && action.href ? (action.href as DesktopPlatform) : null;
                  const href = platform ? downloads[platform] : undefined;
                  const hint =
                    platform && href
                      ? platformHints[platform]
                      : platform
                        ? "Coming at launch"
                        : action.hint;

                  return (
                    <li key={action.label}>
                      <span className={logoStyles.inlineLabel}>
                        {logoId ? <PlatformLogo id={logoId} /> : null}
                        {href ? (
                          <a className={styles.actionLink} href={href}>
                            {action.label}
                          </a>
                        ) : (
                          <span className={styles.actionLabel}>{action.label}</span>
                        )}
                      </span>
                      <span className={styles.actionHint}>{hint}</span>
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
