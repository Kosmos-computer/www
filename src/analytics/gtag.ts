declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-PQ9XK2RDJS";

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  window.gtag?.("event", eventName, params);
}
