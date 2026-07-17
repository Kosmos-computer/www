import { siGithub } from "simple-icons";
import { arcoDocsUrl, githubRepoUrl } from "../content/site-content";
import styles from "./GitHubStarButton.module.css";

export function GitHubStarButton() {
  return (
    <div className={styles.row}>
      <a
        className={styles.button}
        href={githubRepoUrl}
        target="_blank"
        rel="noreferrer"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          aria-hidden
          focusable="false"
        >
          <path d={siGithub.path} fill="currentColor" />
        </svg>
        <span>GitHub</span>
      </a>

      <a
        className={styles.outlineButton}
        href={arcoDocsUrl}
        target="_blank"
        rel="noreferrer"
      >
        Docs
      </a>
    </div>
  );
}
