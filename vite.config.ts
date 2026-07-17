import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { GA_MEASUREMENT_ID } from "./src/analytics/gtag";

function googleAnalyticsPlugin(measurementId: string): Plugin {
  const gtagSnippet = `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${measurementId}');
    </script>`;

  return {
    name: "google-analytics",
    transformIndexHtml(html) {
      return html.replace("</head>", `    ${gtagSnippet}\n  </head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), googleAnalyticsPlugin(GA_MEASUREMENT_ID)],
  resolve: {
    alias: {
      "@brand": fileURLToPath(new URL("./src/brand", import.meta.url)),
      "@arco/wallpaper": fileURLToPath(new URL("./src/wallpaper", import.meta.url)),
    },
  },
  server: {
    port: 5174,
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        home: fileURLToPath(new URL("./home.html", import.meta.url)),
        spec: fileURLToPath(new URL("./spec.html", import.meta.url)),
        platforms: fileURLToPath(new URL("./platforms.html", import.meta.url)),
        features: fileURLToPath(new URL("./features.html", import.meta.url)),
        education: fileURLToPath(new URL("./education.html", import.meta.url)),
        apps: fileURLToPath(new URL("./apps.html", import.meta.url)),
        download: fileURLToPath(new URL("./download.html", import.meta.url)),
      },
    },
  },
});
