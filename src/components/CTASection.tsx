import { ArcoLogo } from "@brand/ArcoLogo";
import { arcoDocsUrl, siteMeta } from "../content/site-content";
import { ChunkyButton } from "./ChunkyButton";
import { JourneyConstellation } from "./JourneyConstellation";
import { useWaitlist } from "./WaitlistContext";
import styles from "./CTASection.module.css";

type CTAAction =
  | {
      label: string;
      href: string;
      action?: undefined;
      variant?: "primary" | "secondary";
      external?: boolean;
    }
  | {
      label: string;
      href?: undefined;
      action: "waitlist";
      variant?: "primary" | "secondary";
      external?: never;
    };

type CTASectionProps = {
  title?: string;
  body?: string;
  actions?: readonly CTAAction[];
  journey?: boolean;
};

const defaultActions: readonly CTAAction[] = [
  { label: "Get started", action: "waitlist", variant: "primary" },
  { label: "Read Arco docs", href: arcoDocsUrl, variant: "secondary" },
];

function CTAActions({ actions }: { actions: readonly CTAAction[] }) {
  const { openWaitlist } = useWaitlist();

  return (
    <>
      {actions.map((action) => {
        const key = action.href ?? action.label;
        if (action.action === "waitlist") {
          return (
            <ChunkyButton
              key={key}
              onClick={openWaitlist}
              variant={action.variant === "secondary" ? "secondary" : "primary"}
              size={action.variant === "primary" ? "large" : "default"}
            >
              {action.label}
            </ChunkyButton>
          );
        }

        return (
          <ChunkyButton
            key={key}
            href={action.href}
            variant={action.variant === "secondary" ? "secondary" : "primary"}
            size={action.variant === "primary" ? "large" : "default"}
            external={action.external}
          >
            {action.label}
          </ChunkyButton>
        );
      })}
    </>
  );
}

export function CTASection({
  title = "Start your journey",
  body = "Hosted Kosmos is coming soon — a getting-started plan with $5 of inference credits, plus monthly plans for your private instance.",
  actions = defaultActions,
  journey = true,
}: CTASectionProps) {
  if (journey) {
    return (
      <section className={styles.journeySection}>
        <JourneyConstellation />
        <div className={styles.journeyContent}>
          <h2 className={styles.journeyTitle}>{title}</h2>
          <p className={styles.journeyBody}>{body}</p>
          <div className={styles.journeyActions}>
            <CTAActions actions={actions} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <div className={styles.actions}>
          <CTAActions actions={actions} />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { openWaitlist } = useWaitlist();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <a className={styles.footerBrand} href="/" aria-label={`${siteMeta.name} home`}>
          <ArcoLogo className={styles.footerLogo} title="Kosmos" />
        </a>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="/apps.html">Apps</a>
          <a href="/platforms.html">Platforms</a>
          <a href="/features.html">Features</a>
          <a href="/education.html">Education</a>
          <a href="/download.html">Download</a>
          <button type="button" className={styles.footerLinkButton} onClick={openWaitlist}>
            Get started
          </button>
          <a href={arcoDocsUrl}>Arco docs</a>
          <a href="/spec.html">Arco spec</a>
        </nav>
      </div>
    </footer>
  );
}
