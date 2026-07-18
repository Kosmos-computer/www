import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarfieldWallpaper } from "@arco/wallpaper/StarfieldWallpaper";
import "@arco/wallpaper/wallpaper.css";
import { GitHubStarButton } from "./components/GitHubStarButton";
import { WaitlistModal } from "./components/WaitlistModal";
import { useWaitlist, WaitlistProvider } from "./components/WaitlistContext";
import { siteMeta, splashTagline } from "./content/site-content";
import { stubImages } from "./content/stub-images";
import styles from "./SplashPage.module.css";

gsap.registerPlugin(ScrollTrigger);

/** Apps launcher grid — shows the OS surface without repeating the chat shot. */
const SPLASH_SHOT = stubImages[12];

function SplashContent() {
  const { openWaitlist } = useWaitlist();
  const trackRef = useRef<HTMLDivElement>(null);
  const shotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const { body } = document;
    const prevHtml = html.style.overscrollBehaviorY;
    const prevBody = body.style.overscrollBehaviorY;
    html.style.overscrollBehaviorY = "none";
    body.style.overscrollBehaviorY = "none";

    return () => {
      html.style.overscrollBehaviorY = prevHtml;
      body.style.overscrollBehaviorY = prevBody;
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const shot = shotRef.current;
    if (!track || !shot) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.set(shot, { yPercent: reduced ? 12 : 115 });

    if (reduced) return;

    const tween = gsap.to(shot, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.4,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className={styles.root} ref={trackRef}>
      <div
        className={`${styles.wallpaper} arco-wallpaper arco-wallpaper-starfield`}
        aria-hidden
      >
        <StarfieldWallpaper theme="dark" mouseLag={0.018} />
        <div className="arco-wallpaper__veil" />
      </div>

      <button type="button" className={styles.cloudLink} onClick={openWaitlist}>
        Access cloud
        <span className={styles.betaTag}>Beta</span>
      </button>

      <main className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 className={styles.wordmark}>{siteMeta.name}</h1>
            <p className={styles.subline}>{splashTagline}</p>
          </div>
          <GitHubStarButton />
        </div>
      </main>

      <div className={styles.shotDock} aria-hidden>
        <div className={styles.shotPanel} ref={shotRef}>
          <div className={styles.shotFrame}>
            <img
              className={styles.shot}
              src={SPLASH_SHOT}
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <WaitlistModal />
    </div>
  );
}

export default function SplashPage() {
  return (
    <WaitlistProvider>
      <SplashContent />
    </WaitlistProvider>
  );
}
