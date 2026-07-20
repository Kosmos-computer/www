import { useEffect, useState } from "react";
import {
  desktopDownloadFallback,
  resolveDesktopDownloadUrls,
  type DesktopDownloadUrls,
} from "../content/downloads";

/** Latest desktop installer URLs; Windows/Linux stay null until published. */
export function useDesktopDownloads(): DesktopDownloadUrls {
  const [urls, setUrls] = useState<DesktopDownloadUrls>(desktopDownloadFallback);

  useEffect(() => {
    let cancelled = false;

    void resolveDesktopDownloadUrls().then((resolved) => {
      if (!cancelled) setUrls(resolved);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return urls;
}
