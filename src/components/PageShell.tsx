import { useEffect, type ReactNode } from "react";
import { PasscodeGate } from "./PasscodeGate";
import { WaitlistProvider } from "./WaitlistContext";
import { WaitlistModal } from "./WaitlistModal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./CTASection";
import styles from "../pages/ContentPages.module.css";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return (
    <PasscodeGate>
      <WaitlistProvider>
        <div>
          <SiteHeader homeHref="/" />
          <main className={styles.main}>{children}</main>
          <SiteFooter />
          <WaitlistModal />
        </div>
      </WaitlistProvider>
    </PasscodeGate>
  );
}
