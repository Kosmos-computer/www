import { PageShell } from "./components/PageShell";
import styles from "./pages/ContentPages.module.css";
import shared from "./styles/shared.module.css";
import { ChunkyButton } from "./components/ChunkyButton";
import { ImagePlaceholder } from "./components/ImagePlaceholder";
import { arcoDocsUrl, educationRecipes } from "./content/site-content";

function categoryAnchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function EducationPage() {
  return (
    <PageShell
      title="Education — Kosmos"
      description="Recipes for building websites, brands, WordPress, socials, office workflows, and more with Kosmos."
    >
      <section className={styles.hero}>
        <p className={shared.sectionEyebrow}>Education</p>
        <h1 className={styles.heroTitle}>How to build with Kosmos</h1>
        <p className={styles.heroBody}>
          Outcome-first recipes — what you want to make, and the steps to have Kosmos do it with
          you. Pick a use case, follow the path, then adapt the prompt to your project.
        </p>
        <div className={styles.heroActions}>
          <ChunkyButton href="/download.html">Get Kosmos</ChunkyButton>
          <ChunkyButton href={arcoDocsUrl} variant="secondary" external>
            Full docs
          </ChunkyButton>
        </div>
      </section>

      <section className={styles.block} aria-label="Recipe categories">
        <ul className={styles.toc}>
          {educationRecipes.map((group) => (
            <li key={group.category}>
              <a href={`#${categoryAnchor(group.category)}`}>{group.category}</a>
            </li>
          ))}
        </ul>
      </section>

      {educationRecipes.map((group) => (
        <section
          key={group.category}
          id={categoryAnchor(group.category)}
          className={`${styles.block} ${styles.categoryAnchor}`}
        >
          <h2 className={styles.blockTitle}>{group.category}</h2>
          <div className={styles.recipeGrid}>
            {group.recipes.map((recipe) => (
              <article key={recipe.id} id={recipe.id} className={styles.recipeCard}>
                <ImagePlaceholder label={recipe.title} fill />
                <div className={styles.recipeHeader}>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  <p className={styles.recipeOutcome}>{recipe.outcome}</p>
                  <p className={styles.recipeBody}>{recipe.description}</p>
                </div>
                <ul className={styles.recipeTools} aria-label="Kosmos surfaces">
                  {recipe.tools.map((tool) => (
                    <li key={tool} className={styles.recipeTool}>
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className={styles.recipeStepsLabel}>Recipe</p>
                <ol className={styles.recipeSteps}>
                  {recipe.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className={`${styles.block} ${styles.callout}`}>
        <div className={shared.card}>
          <div className={styles.calloutInner}>
            <div>
              <h2 className={styles.calloutTitle}>Need the deep reference?</h2>
              <p className={styles.calloutBody}>
                These recipes are the practical path. Arco docs cover tokens, blocks, and the
                generative UI registry when you are ready to go further.
              </p>
              <ChunkyButton href={arcoDocsUrl} external className={styles.calloutCta}>
                Open Arco docs
              </ChunkyButton>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
