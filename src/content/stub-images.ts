/** Product screenshots used as unlabeled stubs until assets are named. */
export const stubImages = [
  "/images/stubs/stub-01.png",
  "/images/stubs/stub-02.png",
  "/images/stubs/stub-03.png",
  "/images/stubs/stub-04.png",
  "/images/stubs/stub-05.png",
  "/images/stubs/stub-06.png",
  "/images/stubs/stub-07.png",
  "/images/stubs/stub-08.png",
  "/images/stubs/stub-09.png",
  "/images/stubs/stub-10.png",
  "/images/stubs/stub-11.png",
  "/images/stubs/stub-12.png",
  "/images/stubs/stub-13.png",
  "/images/stubs/stub-14.png",
  "/images/stubs/stub-15.png",
  "/images/stubs/stub-16.png",
  "/images/stubs/stub-17.png",
  "/images/stubs/stub-18.png",
] as const;

export function stubImageAt(index: number): string {
  const len = stubImages.length;
  const i = ((index % len) + len) % len;
  return stubImages[i];
}

/** Stable stub pick from a string key (title, id, etc.). */
export function stubImageFor(key: string): string {
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  }
  return stubImageAt(hash);
}
