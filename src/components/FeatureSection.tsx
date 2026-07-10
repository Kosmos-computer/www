import { PlatformLogoPanel } from "@brand/PlatformLogo";
import { heroPlatformLogos } from "@brand/platformLogos";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { features } from "../content/site-content";
import shared from "../styles/shared.module.css";
import styles from "./FeatureSection.module.css";

export function FeatureSection() {
  const lastRowStart = features.length - (features.length % 2 === 0 ? 2 : 1);

  return (
    <section id="features" className={styles.section}>
      <div className={shared.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            The integrated shell for AI-native work &amp; life.{" "}
            <span className={shared.sectionTitleMuted}>
              You keep context. Agents keep building across workspaces.
            </span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={styles.cell}
              data-last-row={index >= lastRowStart ? "true" : "false"}
            >
              <div className={styles.copy}>
                <h3 className={styles.cellTitle}>{feature.title}</h3>
                <p className={styles.cellBody}>{feature.description}</p>
                <a className={shared.linkArrow} href={feature.href}>
                  {feature.linkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className={styles.media}>
                {feature.title === "Runs everywhere" ? (
                  <PlatformLogoPanel ids={heroPlatformLogos} />
                ) : (
                  <ImagePlaceholder label={feature.title} />
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a className={shared.linkArrow} href="/features.html">
            Browse all features
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
