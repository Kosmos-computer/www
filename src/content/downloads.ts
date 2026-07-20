import { githubRepoUrl } from "./site-content";

export type DesktopPlatform = "mac" | "windows" | "linux";

export type DesktopDownloadUrls = Record<DesktopPlatform, string | null>;

/** Last known published Apple Silicon DMG (used while newer tags lack assets). */
export const macArm64DmgFallbackUrl =
  "https://github.com/Kosmos-computer/Kosmos/releases/download/v0.1.9/Kosmos-0.1.9-arm64.dmg";

export const githubReleasesUrl = `${githubRepoUrl}/releases`;

export const desktopDownloadFallback: DesktopDownloadUrls = {
  mac: macArm64DmgFallbackUrl,
  windows: null,
  linux: null,
};

type GithubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GithubRelease = {
  assets?: GithubReleaseAsset[];
};

function isInstallAsset(name: string): boolean {
  return !name.endsWith(".blockmap") && !name.endsWith(".yml");
}

function findAssetUrl(
  releases: GithubRelease[],
  matches: (name: string) => boolean,
): string | null {
  for (const release of releases) {
    const asset = release.assets?.find(
      (candidate) => isInstallAsset(candidate.name) && matches(candidate.name),
    );
    if (asset) return asset.browser_download_url;
  }
  return null;
}

/** Resolve newest installers per desktop platform from GitHub Releases. */
export async function resolveDesktopDownloadUrls(
  fetchImpl: typeof fetch = fetch,
): Promise<DesktopDownloadUrls> {
  try {
    const response = await fetchImpl(
      "https://api.github.com/repos/Kosmos-computer/Kosmos/releases?per_page=20",
      {
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!response.ok) return desktopDownloadFallback;

    const releases = (await response.json()) as GithubRelease[];

    return {
      mac:
        findAssetUrl(
          releases,
          (name) => name.endsWith(".dmg") && name.includes("arm64"),
        ) ?? macArm64DmgFallbackUrl,
      windows: findAssetUrl(releases, (name) => name.endsWith(".exe")),
      linux: findAssetUrl(
        releases,
        (name) => name.endsWith(".AppImage") || name.toLowerCase().endsWith(".appimage"),
      ),
    };
  } catch {
    return desktopDownloadFallback;
  }
}
