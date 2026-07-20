import { siApple, siGithub, siLinux } from "simple-icons";
import { arcoDocsUrl, githubRepoUrl } from "../content/site-content";
import { useDesktopDownloads } from "../hooks/useDesktopDownloads";
import styles from "./GitHubStarButton.module.css";

/** Windows logo path (simple-icons omits the trademarked mark). */
const WINDOWS_ICON_PATH =
  "M3 5.5 10.5 4.5V11.5H3V5.5Zm7.5 7.5V20L3 19v-5.5h7.5Zm1.5-8 9-1.5V11H12V5Zm9 7.5V21l-9-1.5V13H21Z";

const platformButtons = [
  {
    id: "mac" as const,
    label: "Download for Mac",
    path: siApple.path,
    primary: true,
  },
  {
    id: "windows" as const,
    label: "Download for Windows",
    path: WINDOWS_ICON_PATH,
    primary: false,
  },
  {
    id: "linux" as const,
    label: "Download for Linux",
    path: siLinux.path,
    primary: false,
  },
] as const;

export function GitHubStarButton() {
  const downloads = useDesktopDownloads();

  return (
    <div className={styles.row}>
      {platformButtons.map((platform) => {
        const href = downloads[platform.id];
        if (!href) return null;

        return (
          <a
            key={platform.id}
            className={platform.primary ? styles.button : styles.outlineButton}
            href={href}
            rel="noreferrer"
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              aria-hidden
              focusable="false"
            >
              <path d={platform.path} fill="currentColor" />
            </svg>
            <span>{platform.label}</span>
          </a>
        );
      })}

      <a
        className={styles.outlineButton}
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
