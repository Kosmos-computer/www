export type PlatformLogoId =
  | "apple"
  | "windows"
  | "linux"
  | "android"
  | "chrome"
  | "steam"
  | "globe"
  | "server";

export const platformTileLogos: Record<string, readonly PlatformLogoId[]> = {
  desktop: ["windows", "apple", "linux"],
  android: ["android"],
  ios: ["apple"],
  chromebook: ["chrome"],
  steamos: ["steam"],
  browser: ["globe", "chrome"],
  mobile: ["android", "apple"],
  "self-host": ["server"],
};

export const platformMatrixLogos: Record<string, readonly PlatformLogoId[]> = {
  "Windows / macOS / Linux": ["windows", "apple", "linux"],
  Android: ["android"],
  Chromebook: ["chrome"],
  iOS: ["apple"],
  "SteamOS / Steam Deck": ["steam"],
  Browser: ["globe"],
  "Self-host": ["server"],
};

export const actionLabelLogos: Record<string, PlatformLogoId> = {
  macOS: "apple",
  Windows: "windows",
  Linux: "linux",
  "Android APK": "android",
  iOS: "apple",
  "APK install": "android",
  PWA: "globe",
  "Self-host guide": "server",
};

export const heroPlatformLogos: readonly PlatformLogoId[] = [
  "windows",
  "apple",
  "linux",
  "android",
  "chrome",
  "steam",
  "globe",
];

export function logosForPlatformId(id: string): readonly PlatformLogoId[] {
  return platformTileLogos[id] ?? [];
}

export function logosForPlatformName(name: string): readonly PlatformLogoId[] {
  return platformMatrixLogos[name] ?? [];
}

export function logoForActionLabel(label: string): PlatformLogoId | undefined {
  return actionLabelLogos[label];
}
