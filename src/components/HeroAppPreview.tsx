import { useEffect, useRef, useState } from "react";
import { StarfieldWallpaper } from "@arco/wallpaper/StarfieldWallpaper";
import "@arco/wallpaper/wallpaper.css";
import { stubImages } from "../content/stub-images";
import styles from "./HeroAppPreview.module.css";

/** Curated hero loop — Techno Studio first, then a spread of product shots. */
const HERO_SLIDES = [
  stubImages[7],
  stubImages[0],
  stubImages[1],
  stubImages[2],
  stubImages[9],
  stubImages[12],
  stubImages[16],
  stubImages[17],
] as const;

const AUTO_MS = 4500;

export function HeroAppPreview() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (next: number) => {
    setIndex(((next % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div
      className={styles.frame}
      aria-roledescription="carousel"
      aria-label="Kosmos product screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className={`${styles.backdrop} arco-wallpaper arco-wallpaper-starfield`}>
        <StarfieldWallpaper theme="dark" />
        <div className="arco-wallpaper__veil" />
      </div>

      <div className={styles.carousel}>
        <div className={styles.shotWrap}>
          {HERO_SLIDES.map((src, i) => (
            <img
              key={src}
              className={styles.shot}
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              aria-hidden={i !== index}
              data-active={i === index ? "true" : "false"}
            />
          ))}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Previous screenshot"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <div className={styles.dots} role="tablist" aria-label="Slides">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={HERO_SLIDES[i]}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show screenshot ${i + 1}`}
                className={styles.dot}
                data-active={i === index ? "true" : "false"}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.navBtn}
            aria-label="Next screenshot"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
