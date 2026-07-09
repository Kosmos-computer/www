import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ChunkyButton } from "./components/ChunkyButton";
import { ImagePlaceholder } from "./components/ImagePlaceholder";
import { appsDirectory, type DirectoryKind } from "./content/site-content";

const kindLabels: Record<DirectoryKind, string> = {
  skill: "Skill",
  app: "App",
  component: "Component",
  recipe: "Recipe",
  prompt: "Prompt",
};

export default function AppsPage() {
  return (
    <PageShell
      title="Apps — Kosmos"
      description="Directory of skills, apps, UI components, app recipes, and prompts from the Kosmos community."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Apps</p>
        <h1 className={styles.heroTitle}>Directory for the OS</h1>
        <p className={styles.heroBody}>
          Skills, dockable apps, Arco UI components, composable recipes, and prompts shared by
          users — browse what you can plug into Kosmos and reuse in Chat.
        </p>
        <div className={styles.heroActions}>
          <ChunkyButton href="/education.html">Education recipes</ChunkyButton>
          <ChunkyButton href="/download.html" variant="secondary">
            Get Kosmos
          </ChunkyButton>
        </div>
      </section>

      <section className={styles.block} aria-label="Directory sections">
        <ul className={styles.toc}>
          {appsDirectory.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </section>

      {appsDirectory.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${styles.block} ${styles.categoryAnchor}`}
        >
          <div className={styles.directoryIntro}>
            <h2 className={styles.blockTitle}>{section.label}</h2>
            <p className={styles.directorySectionBody}>{section.description}</p>
          </div>
          <div className={styles.directoryGrid}>
            {section.items.map((item) => {
              const body = (
                <>
                  <ImagePlaceholder label={item.title} fill />
                  <div className={styles.directoryMeta}>
                    <span className={styles.kindBadge} data-kind={item.kind}>
                      {kindLabels[item.kind]}
                    </span>
                    <span className={styles.directoryMetaLabel}>{item.meta}</span>
                  </div>
                  <h3 className={styles.deviceTitle}>{item.title}</h3>
                  <p className={styles.deviceBody}>{item.description}</p>
                  <ul className={styles.recipeTools} aria-label="Tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className={styles.recipeTool}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </>
              );

              if ("href" in item && item.href) {
                return (
                  <a key={item.id} id={item.id} className={styles.directoryCard} href={item.href}>
                    {body}
                  </a>
                );
              }

              return (
                <article key={item.id} id={item.id} className={styles.directoryCard}>
                  {body}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className={`${styles.block} ${styles.callout}`}>
        <div className={shared.card}>
          <div className={styles.calloutInner}>
            <div>
              <h2 className={styles.calloutTitle}>Share a prompt or recipe</h2>
              <p className={styles.calloutBody}>
                Community listings grow with the product. Get Kosmos, ship something useful, and
                we will feature strong prompts and app recipes here.
              </p>
              <ChunkyButton href="/download.html" className={styles.calloutCta}>
                Get Kosmos
              </ChunkyButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
