export const siteMeta = {
  name: "Kosmos",
  tagline: "A generative AI operating system for integrated work & life.",
  description:
    "One shell for chat, code, files, and generated apps. Plug in OpenClaw, coding runtimes, and Arco — agents share focus context across every workspace.",
} as const;

/** Temporary splash frontpage copy — more concrete than the marketing tagline. */
export const splashTagline =
  "An open generative AI operating system — one shell for chat, code, files, and generated apps, with agents that share context across every workspace.";

export const controlPlaneUrl =
  import.meta.env.VITE_CONTROL_PLANE_URL ?? "https://app.kosmos.computer";

export const signUpUrl = `${controlPlaneUrl}/signup`;
export const signInUrl = `${controlPlaneUrl}/connect`;

export const demoUrl = import.meta.env.VITE_DEMO_URL ?? "http://localhost:4610";
export const arcoDocsUrl = "https://docs.kosmos.computer";

export const githubRepoUrl = "https://github.com/Kosmos-computer/Kosmos";

/** Opens the beta / waitlist modal when visited (e.g. from kosmos-docs footer links). */
export const betaModalUrl = "https://www.kosmos.computer/#beta";

/** Formspree endpoint for the waitlist contact form. Set VITE_FORMSPREE_ID in env. */
export const waitlistFormUrl = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : "";

export const navPillLinks = [
  { label: "Apps", href: "/apps.html" },
  { label: "Platforms", href: "/platforms.html" },
  { label: "Features", href: "/features.html" },
  { label: "Education", href: "/education.html" },
  { label: "Download", href: "/download.html" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Arco", href: "/spec.html" },
] as const;

/** @deprecated Use navPillLinks — kept for spec page overrides */
export const navLinks = navPillLinks;

export const integrations = [
  "OpenClaw Gateway",
  "Techno Studio",
  "Arco UI",
  "Odysseus",
] as const;

export type Availability = "available" | "beta" | "coming";

export const platformTiles = [
  {
    id: "desktop",
    title: "Desktop",
    description: "Native Electron builds for Windows, macOS, and Linux.",
    status: "available" as Availability,
    statusLabel: "Available",
    href: "/platforms.html#desktop",
  },
  {
    id: "android",
    title: "Android APK",
    description: "Sideload the thin client — point it at your server and go.",
    status: "available" as Availability,
    statusLabel: "Available",
    href: "/platforms.html#android",
  },
  {
    id: "ios",
    title: "iOS",
    description: "Capacitor-compatible path — sideload beta, not App Store yet.",
    status: "coming" as Availability,
    statusLabel: "Coming",
    href: "/platforms.html#ios",
  },
  {
    id: "chromebook",
    title: "Chromebook",
    description: "Install via APK over ADB or as a PWA from HTTPS.",
    status: "available" as Availability,
    statusLabel: "Available",
    href: "/platforms.html#chromebook",
  },
  {
    id: "steamos",
    title: "SteamOS",
    description: "Steam Deck integration with embed mode for single-app shells.",
    status: "available" as Availability,
    statusLabel: "Available",
    href: "/platforms.html#steamos",
  },
  {
    id: "browser",
    title: "Browser / PWA",
    description: "Open in Chrome and install as a progressive web app.",
    status: "available" as Availability,
    statusLabel: "Available",
    href: "/platforms.html#browser",
  },
] as const;

export const platformMatrix = [
  {
    platform: "Windows / macOS / Linux",
    method: "Electron (DMG, NSIS, AppImage)",
    status: "available" as Availability,
    statusLabel: "Available",
  },
  {
    platform: "Android",
    method: "Sideload APK (thin client)",
    status: "available" as Availability,
    statusLabel: "Available",
  },
  {
    platform: "Chromebook",
    method: "APK over ADB or PWA",
    status: "available" as Availability,
    statusLabel: "Available",
  },
  {
    platform: "iOS",
    method: "Capacitor build path",
    status: "coming" as Availability,
    statusLabel: "Coming",
  },
  {
    platform: "SteamOS / Steam Deck",
    method: "Embed mode + SteamOS shell",
    status: "available" as Availability,
    statusLabel: "Available",
  },
  {
    platform: "Browser",
    method: "HTTPS / PWA",
    status: "available" as Availability,
    statusLabel: "Available",
  },
  {
    platform: "Self-host",
    method: "Docker / Coolify",
    status: "available" as Availability,
    statusLabel: "Available",
  },
] as const;

export const voiceHighlights = [
  {
    title: "Full-duplex voice",
    description: "Local STT and TTS with barge-in — talk to the OS in real time.",
    placeholder: "Voice bar",
  },
  {
    title: "Longformer",
    description:
      "Transcription studio for long-form audio — upload, chapterize, clip, and edit.",
    placeholder: "Longformer editor",
  },
  {
    title: "Voice models",
    description: "Swap brain, STT, and TTS slots from one models hub.",
    placeholder: "Models hub",
  },
] as const;

export const agentHighlights = [
  {
    title: "Agent cursor",
    description:
      "A visible cursor that clicks, types, and demos apps — watch the OS get used.",
    placeholder: "Cursor demo",
  },
  {
    title: "Avatar sprite",
    description:
      "Programmable face rigs and pixel marks agents can drive while they speak.",
    placeholder: "Avatar face",
  },
  {
    title: "Techno Studio",
    description: "Code, diffs, terminal, and live preview in one agent canvas.",
    placeholder: "Studio",
  },
] as const;

export const features = [
  {
    title: "Stable shell",
    description:
      "Nav rail, sidebar, main, and context panel — switch workspaces without reshuffling chrome.",
    href: "/features.html#shell",
    linkLabel: "Explore the shell",
  },
  {
    title: "Agent surface",
    description:
      "Chat, Orchestrator, Psyche, and inline generated UI — the brain stays in the context panel.",
    href: "/features.html#agent-surface",
    linkLabel: "See agent UX",
  },
  {
    title: "Techno Studio",
    description:
      "Techno Studio embedded for terminals, diffs, and repo work — not a separate product tab.",
    href: "/features.html#studio",
    linkLabel: "View Studio",
  },
  {
    title: "Generated apps",
    description:
      "Describe an app in chat; Arco renders it inside Desktop windows and the Apps grid.",
    href: "/features.html#generated-apps",
    linkLabel: "How gen-UI works",
  },
  {
    title: "Longformer",
    description:
      "Talk, transcribe, and edit long-form audio in a dedicated transcription studio.",
    href: "/features.html#longformer",
    linkLabel: "See Longformer",
  },
  {
    title: "Agent cursor",
    description:
      "Agents drive a visible cursor — click, type, and demonstrate apps on the desktop.",
    href: "/features.html#agent-cursor",
    linkLabel: "See cursor control",
  },
  {
    title: "Runs everywhere",
    description:
      "Desktop, Android APK, Chromebook, SteamOS, and browser — one OS across devices.",
    href: "/platforms.html",
    linkLabel: "View platforms",
  },
  {
    title: "Avatar sprite",
    description:
      "Swappable face rigs and programmable pixel marks that animate with voice and status.",
    href: "/features.html#avatar",
    linkLabel: "See avatars",
  },
] as const;

export const featureCatalog = [
  {
    category: "Platforms",
    items: [
      {
        id: "desktop",
        title: "Desktop",
        description: "Windows, macOS, and Linux via Electron.",
        href: "/platforms.html#desktop",
      },
      {
        id: "android",
        title: "Android APK",
        description: "Sideload thin client — no app store required.",
        href: "/platforms.html#android",
      },
      {
        id: "chromebook",
        title: "Chromebook",
        description: "APK over ADB or install as a PWA.",
        href: "/platforms.html#chromebook",
      },
      {
        id: "ios",
        title: "iOS-ready",
        description: "Compatible build path — sideload beta coming.",
        href: "/platforms.html#ios",
      },
      {
        id: "steamos",
        title: "SteamOS",
        description: "Steam Deck shells with embed mode.",
        href: "/platforms.html#steamos",
      },
      {
        id: "self-host",
        title: "Self-host",
        description: "Docker / Coolify — your data, your instance.",
        href: "/download.html#self-host",
      },
    ],
  },
  {
    category: "Interaction",
    items: [
      {
        id: "agent-cursor",
        title: "Agent cursor",
        description: "Visible cursor control for clicks and typing.",
        href: "/features.html#agent-cursor",
      },
      {
        id: "avatar",
        title: "Face / avatar sprite",
        description: "Animated face rigs and programmable marks.",
        href: "/features.html#avatar",
      },
      {
        id: "voice",
        title: "Voice duplex",
        description: "Local full-duplex STT/TTS with barge-in.",
        href: "/features.html#voice",
      },
      {
        id: "voice-models",
        title: "Voice models",
        description: "Swap brain, STT, and TTS in the models hub.",
        href: "/features.html#voice",
      },
    ],
  },
  {
    category: "Work",
    items: [
      {
        id: "longformer",
        title: "Longformer",
        description: "Transcription studio for long-form audio.",
        href: "/features.html#longformer",
      },
      {
        id: "studio",
        title: "Techno Studio",
        description: "Agent canvas for code, diffs, and preview.",
        href: "/features.html#studio",
      },
      {
        id: "generated-apps",
        title: "Generated apps",
        description: "Describe an app; dock it in the OS.",
        href: "/features.html#generated-apps",
      },
      {
        id: "automations",
        title: "Automations",
        description: "Scheduled headless agent runs with history.",
        href: "/features.html#automations",
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        id: "models",
        title: "Models hub",
        description: "One registry for chat, voice, image, and local engines.",
        href: "/features.html#models",
      },
      {
        id: "mcp",
        title: "MCP & skills",
        description: "Plug in tool servers and gated skills.",
        href: "/features.html#mcp",
      },
      {
        id: "pim",
        title: "Tasks & Calendar",
        description: "Shared OS data every app and agent can use.",
        href: "/features.html#pim",
      },
      {
        id: "auth",
        title: "Auth & roles",
        description: "Local accounts, sessions, and capability roles.",
        href: "/features.html#auth",
      },
    ],
  },
] as const;

export const downloadOptions = [
  {
    id: "desktop",
    title: "Desktop",
    description: "Native builds for macOS, Windows, and Linux.",
    actions: [
      { label: "macOS", hint: "Coming at launch" },
      { label: "Windows", hint: "Coming at launch" },
      { label: "Linux", hint: "Coming at launch" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Android APK available for sideload. iOS path in progress.",
    actions: [
      { label: "Android APK", hint: "Sideload" },
      { label: "iOS", hint: "Coming" },
    ],
  },
  {
    id: "chromebook",
    title: "Chromebook",
    description: "Install the APK over Wi‑Fi ADB, or add the PWA from HTTPS.",
    actions: [
      { label: "APK install", hint: "ADB" },
      { label: "PWA", hint: "Browser" },
    ],
  },
  {
    id: "self-host",
    title: "Self-host",
    description: "Run your own instance with Docker or Coolify.",
    actions: [{ label: "Self-host guide", hint: "Docs" }],
  },
] as const;

export const principles = [
  {
    id: "I",
    title: "Shell stability",
    body: "Chrome is invariant. Workspaces plug into sidebar and main slots without remounting the frame.",
  },
  {
    id: "II",
    title: "Engine boundaries",
    body: "OpenClaw owns agent orchestration. Techno Studio owns the coding sandbox. Arco owns streamed UI. Kosmos composes — it does not fork.",
  },
  {
    id: "III",
    title: "Shared focus context",
    body: "The assistant knows which workspace and entity you are viewing. AI actions attach to real focus, not orphaned prompts.",
  },
  {
    id: "IV",
    title: "Generated UI is first-class",
    body: "Agents emit Arco blocks in chat and ship full apps to Desktop. Rendering is not a bolt-on widget.",
  },
  {
    id: "V",
    title: "Multi-form-factor surfaces",
    body: "The same workspace renders full-screen, as a desktop window, on phone stack, or as a watch glance via SurfaceManager.",
  },
  {
    id: "VI",
    title: "Surgical integration",
    body: "One product experience without merging every repo into a monolith. Plug engines in per workspace.",
  },
] as const;

export const faqItems = [
  {
    question: "Is Kosmos a product or a prototype?",
    answer:
      "Kosmos is the working product surface today. The production path is a Kosmos client served from the OpenClaw plugin with real gateway-backed stores.",
  },
  {
    question: "Where does Kosmos run?",
    answer:
      "Desktop on Windows, macOS, and Linux; Android APK and Chromebook via sideload or PWA; SteamOS embed for Deck; and the browser. iOS uses a Capacitor-compatible path and is not App Store–listed yet.",
  },
  {
    question: "What is Longformer?",
    answer:
      "Longformer is the in-OS transcription studio — upload or capture long-form audio, then chapterize, clip, and edit. It sits alongside full-duplex voice and swappable STT/TTS models.",
  },
  {
    question: "Can agents control the UI?",
    answer:
      "Yes. On desktop, agents can drive a visible cursor to click, type, and demonstrate apps. Multi-agent backends include Cursor SDK, coding agents, and more.",
  },
  {
    question: "Do I need every backend running?",
    answer:
      "MVP: OpenClaw gateway plus Arco. Add Techno Studio for the Code workspace. Odysseus is optional for productivity and RAG services.",
  },
  {
    question: "How is this different from a coding agent alone?",
    answer:
      "A coding agent handles the repo. Kosmos is the full OS shell — chat, desktop, apps, memory, and reference workspaces around it.",
  },
  {
    question: "What is Arco vs Kosmos?",
    answer:
      "Kosmos is the operating system — shell, workspaces, and agent UX. Arco is the generative UI library: tokens, components, blocks, and the registry an AI assembles from.",
  },
  {
    question: "Is this another AI chat sidebar?",
    answer:
      "No. Kosmos is the presentation layer where agents, entity data, and generated UI share one session and focus model.",
  },
] as const;

export const architectureLayers = [
  { label: "Viewers", detail: "Browser, desktop, phone, watch, Steam Deck" },
  { label: "Kosmos shell", detail: "AppShell · SurfaceManager · tokens" },
  { label: "Engines", detail: "OpenClaw · Techno Studio · Arco · Odysseus" },
  { label: "Workspaces", detail: "Chat, Code, Apps, Notes, Longformer, …" },
] as const;

/** Recipe guides: outcome-first use cases with Kosmos step lists. */
export const educationRecipes = [
  {
    category: "Create & publish",
    recipes: [
      {
        id: "website",
        title: "Make a website",
        outcome: "A live site you can iterate on from chat.",
        description:
          "Describe the pages, tone, and sections you need. Kosmos generates the UI, docks it as an app, and lets you refine copy and layout without leaving the shell.",
        tools: ["Chat", "Generated apps", "Studio"],
        steps: [
          "Open Chat and describe the site: audience, pages, and visual direction.",
          "Review the generated app in Desktop — click through pages as a visitor would.",
          "Ask for changes in plain language: new sections, CTAs, or layout tweaks.",
          "Open Techno Studio when you need code-level edits, assets, or deploy scripts.",
          "Ship via your host of choice — the agent can draft the deploy steps for you.",
        ],
      },
      {
        id: "brand",
        title: "Build a brand",
        outcome: "Name, voice, palette, and assets in one workspace.",
        description:
          "Treat branding as a project the OS can hold — naming options, messaging, visual direction, and the first set of assets agents can reuse across apps and posts.",
        tools: ["Chat", "Notes", "Generated apps"],
        steps: [
          "Start a Chat thread with your product, audience, and competitors.",
          "Ask for naming shortlists, taglines, and a voice guide — pin the winners in Notes.",
          "Generate a simple brand board app: logo mark concepts, colors, and type pairings.",
          "Export or screenshot the board; ask the agent to apply the system to your site or deck.",
          "Reuse the same brand context whenever you spin up social posts or new apps.",
        ],
      },
      {
        id: "wordpress",
        title: "Launch WordPress",
        outcome: "A WordPress install planned, provisioned, and content-ready.",
        description:
          "Use Studio and the agent for the ops path — hosting, install, theme, and first posts — while Chat holds the content brief and site map.",
        tools: ["Studio", "Chat", "Automations"],
        steps: [
          "Describe the site type and hosting preference in Chat (shared host, VPS, or local).",
          "Open Techno Studio and ask the agent to walk the install: DNS, WordPress, SSL, admin.",
          "Have it install a starter theme or block theme and map your pages from the brief.",
          "Draft homepage and about copy in Chat, then paste or push into WordPress.",
          "Schedule an Automation to check updates, backups, or draft weekly posts.",
        ],
      },
      {
        id: "custom-app",
        title: "Ship a custom app",
        outcome: "A tool that lives in your Apps grid and Desktop.",
        description:
          "Kosmos treats generated UI as first-class — describe a calculator, CRM slice, or internal tool and keep iterating until it earns a permanent window.",
        tools: ["Chat", "Generated apps", "Arco"],
        steps: [
          "In Chat, name the job-to-be-done and the data the app must show.",
          "Accept the first Arco-rendered app into Desktop and try the happy path.",
          "Request refinements: empty states, filters, or keyboard shortcuts.",
          "Pin it in Apps so it survives across sessions and devices.",
          "Connect MCP or skills when the app needs live data or external actions.",
        ],
      },
    ],
  },
  {
    category: "Run your presence",
    recipes: [
      {
        id: "socials",
        title: "Manage your socials",
        outcome: "A content pipeline from idea to scheduled posts.",
        description:
          "Keep brand voice, drafts, and calendars in one OS. Agents draft posts, you approve, and automations handle the cadence.",
        tools: ["Chat", "Notes", "Tasks", "Automations"],
        steps: [
          "Drop your brand voice and channel list into Notes (or point Chat at an existing brief).",
          "Ask Chat for a week of posts per channel — hooks, captions, and CTAs.",
          "Edit in place, then move approved items onto Tasks with due dates.",
          "Wire an Automation for draft reminders or weekly batch generation.",
          "Reuse Longformer clips or site copy as source material for carousels and threads.",
        ],
      },
      {
        id: "newsletter",
        title: "Run a newsletter",
        outcome: "Research, draft, and ship on a repeatable rhythm.",
        description:
          "Combine Notes, Chat, and Automations into an editorial loop — research digests, draft issues, and a checklist that does not live in five tabs.",
        tools: ["Chat", "Notes", "Automations"],
        steps: [
          "Create a Notes space for sources, subscriber promises, and past issues.",
          "Ask Chat to outline the next issue from your notes and recent links.",
          "Generate a draft in your house style; revise with voice or typed feedback.",
          "Export to your ESP (or ask Studio to script the send path).",
          "Schedule a weekly Automation that opens a fresh outline from your source Notes.",
        ],
      },
      {
        id: "landing-campaign",
        title: "Launch a campaign page",
        outcome: "Offer, page, and follow-up in one pass.",
        description:
          "Spin a focused landing page from a brief, pair it with email or social copy, and keep the offer context shared across every workspace.",
        tools: ["Generated apps", "Chat", "Tasks"],
        steps: [
          "Brief Chat on the offer, audience, and proof points.",
          "Generate a single-page app with hero, proof, and CTA — dock it in Desktop.",
          "Ask for matching ad and email variants that reuse the same claims.",
          "Track launch tasks in the OS calendar and task list.",
          "Iterate the page live as feedback comes in — no separate design handoff.",
        ],
      },
    ],
  },
  {
    category: "Work & office",
    recipes: [
      {
        id: "office-suite",
        title: "Full office app suite",
        outcome: "Docs, sheets, tasks, and calendar that agents can use too.",
        description:
          "Instead of bolting AI onto five SaaS tabs, keep productivity surfaces inside Kosmos — shared focus so the assistant always knows what you are looking at.",
        tools: ["Notes", "Tasks", "Calendar", "Generated apps"],
        steps: [
          "Use Notes for long-form writing and meeting capture; keep projects in Tasks.",
          "Put deadlines and rituals on Calendar so agents can plan around real time.",
          "Ask Chat to generate lightweight tools — a budget sheet, CRM board, or invoice form.",
          "Work with the context panel open so suggestions attach to the focused entity.",
          "Add MCP connectors when you still need Google, Slack, or mail in the loop.",
        ],
      },
      {
        id: "meeting-ops",
        title: "Run meetings end to end",
        outcome: "Agenda in, transcript out, actions assigned.",
        description:
          "Prep in Notes, capture with Longformer or voice, then let the agent turn the recording into decisions and tasks.",
        tools: ["Notes", "Longformer", "Voice", "Tasks"],
        steps: [
          "Draft the agenda in Notes and share the link or window before the call.",
          "Record or upload audio into Longformer; chapterize the long take.",
          "Ask Chat to extract decisions, owners, and open questions from the transcript.",
          "Push action items into Tasks with due dates and assignees.",
          "File the summary back into Notes so the next meeting starts with context.",
        ],
      },
      {
        id: "research-brief",
        title: "Produce a research brief",
        outcome: "Sources gathered, synthesized, and ready to share.",
        description:
          "Use Chat for synthesis and Notes as the durable brief. Agents keep focus on the document you are editing — not a disconnected sidebar.",
        tools: ["Chat", "Notes", "Studio"],
        steps: [
          "State the question, audience, and depth you need in Chat.",
          "Collect links and quotes into Notes as the agent researches.",
          "Ask for a structured brief: summary, findings, risks, and recommendations.",
          "Refine tone for exec vs. eng; export or generate a shareable app view.",
          "Open Studio if you need charts, scrapers, or a repeatable research script.",
        ],
      },
      {
        id: "personal-os",
        title: "Set up your personal OS",
        outcome: "One shell for life admin, projects, and focus.",
        description:
          "Kosmos is meant for integrated work and life — start with the surfaces you touch daily and let agents inherit that context.",
        tools: ["Shell", "Tasks", "Calendar", "Chat"],
        steps: [
          "Install on your primary device and sign into your instance.",
          "Create a home layout: Chat, Tasks, Calendar, and one Notes space.",
          "Tell Chat your recurring rituals — morning plan, weekly review, inbox zero.",
          "Add Automations for the boring cadence (reminders, digests, backups).",
          "Mirror the same session on phone or browser so context travels with you.",
        ],
      },
    ],
  },
  {
    category: "Build with agents",
    recipes: [
      {
        id: "code-with-studio",
        title: "Build software in Studio",
        outcome: "Repo work with terminal, diffs, and live preview.",
        description:
          "Techno Studio keeps coding inside the OS next to chat and generated UI — not in a separate product.",
        tools: ["Studio", "Chat", "Agent cursor"],
        steps: [
          "Open Techno Studio and point it at your repo or a new project scaffold.",
          "Describe the feature in Chat with the Studio workspace focused.",
          "Watch diffs and terminal output; approve or redirect the agent mid-run.",
          "Use agent cursor on desktop when you want a visible demo of the UI path.",
          "Preview, commit, and keep the same thread for the next slice of work.",
        ],
      },
      {
        id: "automations",
        title: "Automate recurring work",
        outcome: "Headless agent runs on a schedule with history.",
        description:
          "Anything you do weekly in Chat can become an Automation — reports, drafts, cleanups, and checks that leave a trail you can audit.",
        tools: ["Automations", "Chat", "MCP"],
        steps: [
          "Run the workflow once manually in Chat until the prompt and tools feel right.",
          "Promote it to an Automation with schedule, inputs, and success criteria.",
          "Attach MCP skills for mail, GitHub, or other systems the job needs.",
          "Review run history after the first few executions; tighten the prompt.",
          "Chain outputs into Notes or Tasks so humans still own the decisions.",
        ],
      },
      {
        id: "voice-day",
        title: "Work hands-free with voice",
        outcome: "Talk to the OS — barge-in, duplex, and follow-through.",
        description:
          "Full-duplex voice lets you plan, dictate, and drive agents without parking at a keyboard — useful on desktop and when your hands are busy.",
        tools: ["Voice", "Chat", "Longformer"],
        steps: [
          "Enable voice in the models hub — pick STT/TTS that fit your machine.",
          "Start a planning session out loud; interrupt freely when the agent drifts.",
          "Dictate long notes or meeting thoughts, then open Longformer to edit.",
          "Ask the agent to turn spoken goals into Tasks and calendar blocks.",
          "Keep an avatar or cursor view if you want visual confirmation of actions.",
        ],
      },
      {
        id: "self-host",
        title: "Self-host your instance",
        outcome: "Your data, your gateway, your devices.",
        description:
          "Run Kosmos on your own iron with Docker or Coolify, then point desktop and mobile clients at that control plane.",
        tools: ["Self-host", "Desktop", "Android"],
        steps: [
          "Follow the self-host guide for Docker or Coolify and bring up the gateway.",
          "Configure models, auth, and storage for your threat model.",
          "Connect the desktop app and verify Chat, Apps, and Studio against your instance.",
          "Sideload the Android APK or install the PWA for on-the-go access.",
          "Invite collaborators with roles that match what they should be able to do.",
        ],
      },
    ],
  },
] as const;

export type DirectoryKind = "skill" | "app" | "component" | "recipe" | "prompt";

/** Apps directory — skills, apps, UI components, recipes, and community prompts. */
export const appsDirectory = [
  {
    id: "skills",
    label: "Skills",
    description: "Gated agent capabilities and MCP tool packs you can enable per workspace.",
    items: [
      {
        id: "skill-web-browse",
        kind: "skill" as DirectoryKind,
        title: "Web browse",
        description: "Fetch pages, extract structure, and cite sources into Notes or Chat.",
        tags: ["MCP", "Research"],
        meta: "OpenClaw skill",
      },
      {
        id: "skill-github",
        kind: "skill" as DirectoryKind,
        title: "GitHub",
        description: "Issues, PRs, and repo context for Studio and Automations.",
        tags: ["MCP", "Code"],
        meta: "MCP server",
      },
      {
        id: "skill-mail",
        kind: "skill" as DirectoryKind,
        title: "Mail",
        description: "Draft, search, and file messages with human approval gates.",
        tags: ["MCP", "Office"],
        meta: "Gated skill",
      },
      {
        id: "skill-calendar",
        kind: "skill" as DirectoryKind,
        title: "Calendar sync",
        description: "Read and propose events against the OS calendar store.",
        tags: ["PIM", "Office"],
        meta: "Built-in",
      },
      {
        id: "skill-filesystem",
        kind: "skill" as DirectoryKind,
        title: "Filesystem",
        description: "Scoped read/write for project folders the agent is allowed to touch.",
        tags: ["Local", "Studio"],
        meta: "Desktop",
      },
      {
        id: "skill-image-gen",
        kind: "skill" as DirectoryKind,
        title: "Image gen",
        description: "Generate and iterate visuals for brand boards, posts, and app assets.",
        tags: ["Models", "Creative"],
        meta: "Models hub",
      },
    ],
  },
  {
    id: "apps",
    label: "Apps",
    description: "Generated and first-party apps that dock in Desktop and the Apps grid.",
    items: [
      {
        id: "app-notes",
        kind: "app" as DirectoryKind,
        title: "Notes",
        description: "Long-form writing and meeting capture with shared focus context.",
        tags: ["First-party", "PIM"],
        meta: "Workspace",
      },
      {
        id: "app-tasks",
        kind: "app" as DirectoryKind,
        title: "Tasks",
        description: "Projects, due dates, and owners agents can update from Chat.",
        tags: ["First-party", "PIM"],
        meta: "Workspace",
      },
      {
        id: "app-calendar",
        kind: "app" as DirectoryKind,
        title: "Calendar",
        description: "Rituals and deadlines the OS and Automations plan around.",
        tags: ["First-party", "PIM"],
        meta: "Workspace",
      },
      {
        id: "app-crm-board",
        kind: "app" as DirectoryKind,
        title: "CRM board",
        description: "Lightweight pipeline board generated from a Chat brief.",
        tags: ["Generated", "Sales"],
        meta: "Arco app",
      },
      {
        id: "app-budget",
        kind: "app" as DirectoryKind,
        title: "Budget sheet",
        description: "Simple categories, totals, and month view for personal or team spend.",
        tags: ["Generated", "Finance"],
        meta: "Arco app",
      },
      {
        id: "app-brand-board",
        kind: "app" as DirectoryKind,
        title: "Brand board",
        description: "Logo concepts, palette, and type pairings in one dockable window.",
        tags: ["Generated", "Creative"],
        meta: "Arco app",
      },
      {
        id: "app-landing",
        kind: "app" as DirectoryKind,
        title: "Campaign landing",
        description: "Single-page offer with hero, proof, and CTA — iterate live from Chat.",
        tags: ["Generated", "Marketing"],
        meta: "Arco app",
      },
      {
        id: "app-invoice",
        kind: "app" as DirectoryKind,
        title: "Invoice form",
        description: "Client, line items, and PDF-ready layout for freelancers.",
        tags: ["Generated", "Office"],
        meta: "Arco app",
      },
    ],
  },
  {
    id: "components",
    label: "UI components",
    description: "Arco registry blocks agents assemble into chat UI and full apps.",
    items: [
      {
        id: "ui-stat-cards",
        kind: "component" as DirectoryKind,
        title: "Stat cards",
        description: "Metric tiles with label, value, and optional delta.",
        tags: ["Arco", "Data"],
        meta: "registry/statCards",
      },
      {
        id: "ui-data-table",
        kind: "component" as DirectoryKind,
        title: "Data table",
        description: "Sortable rows for lists, CRM, and inventory views.",
        tags: ["Arco", "Data"],
        meta: "registry/dataTable",
      },
      {
        id: "ui-form-stack",
        kind: "component" as DirectoryKind,
        title: "Form stack",
        description: "Labeled fields, validation, and submit actions in one block.",
        tags: ["Arco", "Input"],
        meta: "registry/formStack",
      },
      {
        id: "ui-kanban",
        kind: "component" as DirectoryKind,
        title: "Kanban columns",
        description: "Drag-friendly columns for boards and pipelines.",
        tags: ["Arco", "Layout"],
        meta: "registry/kanban",
      },
      {
        id: "ui-hero-cta",
        kind: "component" as DirectoryKind,
        title: "Hero + CTA",
        description: "Landing hero with headline, support line, and primary action.",
        tags: ["Arco", "Marketing"],
        meta: "registry/heroCta",
      },
      {
        id: "ui-chat-blocks",
        kind: "component" as DirectoryKind,
        title: "Inline chat blocks",
        description: "Rich blocks streamed into Chat — not just markdown.",
        tags: ["Arco", "Agent"],
        meta: "Chat surface",
      },
      {
        id: "ui-empty-state",
        kind: "component" as DirectoryKind,
        title: "Empty state",
        description: "Friendly zero-data panels with a suggested next action.",
        tags: ["Arco", "UX"],
        meta: "registry/emptyState",
      },
      {
        id: "ui-timeline",
        kind: "component" as DirectoryKind,
        title: "Timeline",
        description: "Chronological events for activity feeds and project history.",
        tags: ["Arco", "Data"],
        meta: "registry/timeline",
      },
    ],
  },
  {
    id: "recipes",
    label: "App recipes",
    description: "Composable blueprints — prompt + surfaces + components to ship a working app.",
    items: [
      {
        id: "recipe-personal-crm",
        kind: "recipe" as DirectoryKind,
        title: "Personal CRM",
        description: "Contacts board, follow-up tasks, and a weekly Automation digest.",
        tags: ["Sales", "PIM"],
        meta: "Chat · Tasks · Automations",
        href: "/education.html#office-suite",
      },
      {
        id: "recipe-content-studio",
        kind: "recipe" as DirectoryKind,
        title: "Content studio",
        description: "Brand voice in Notes, weekly posts in Chat, schedule on Tasks.",
        tags: ["Marketing", "Social"],
        meta: "Notes · Chat · Tasks",
        href: "/education.html#socials",
      },
      {
        id: "recipe-meeting-packet",
        kind: "recipe" as DirectoryKind,
        title: "Meeting packet",
        description: "Agenda → Longformer transcript → decisions and assigned tasks.",
        tags: ["Office", "Voice"],
        meta: "Notes · Longformer · Tasks",
        href: "/education.html#meeting-ops",
      },
      {
        id: "recipe-launch-kit",
        kind: "recipe" as DirectoryKind,
        title: "Launch kit",
        description: "Landing page app plus matching ad and email copy from one brief.",
        tags: ["Marketing", "Generated"],
        meta: "Generated apps · Chat",
        href: "/education.html#landing-campaign",
      },
      {
        id: "recipe-freelancer-ops",
        kind: "recipe" as DirectoryKind,
        title: "Freelancer ops",
        description: "Invoice form, project Tasks, and client Notes in one shell.",
        tags: ["Office", "Finance"],
        meta: "Apps · Tasks · Notes",
      },
      {
        id: "recipe-research-desk",
        kind: "recipe" as DirectoryKind,
        title: "Research desk",
        description: "Browse skill + Notes brief + shareable summary app.",
        tags: ["Research", "MCP"],
        meta: "Skills · Notes · Chat",
        href: "/education.html#research-brief",
      },
    ],
  },
  {
    id: "prompts",
    label: "Prompts from users",
    description: "Community starters — copy into Chat and adapt. Attribution welcome.",
    items: [
      {
        id: "prompt-site-from-brief",
        kind: "prompt" as DirectoryKind,
        title: "Site from a one-pager",
        description:
          "Build a 4-page marketing site from this brief. Keep the shell calm, Instrument-like type, and one primary CTA per page. Dock it in Desktop when ready.",
        tags: ["Website", "Generated"],
        meta: "@builder",
      },
      {
        id: "prompt-weekly-social",
        kind: "prompt" as DirectoryKind,
        title: "Weekly social batch",
        description:
          "Using my brand voice in Notes, draft 5 posts for LinkedIn and 5 for X. Hooks first, no hashtag spam. Put approvals on Tasks due Friday.",
        tags: ["Social", "Marketing"],
        meta: "@ops",
      },
      {
        id: "prompt-brand-sprint",
        kind: "prompt" as DirectoryKind,
        title: "90-minute brand sprint",
        description:
          "I have a product and audience. Give me 8 names, 3 taglines, a voice paragraph, and a brand-board app with palette + type. Pin winners in Notes.",
        tags: ["Brand", "Creative"],
        meta: "@founder",
      },
      {
        id: "prompt-meeting-to-tasks",
        kind: "prompt" as DirectoryKind,
        title: "Meeting → tasks",
        description:
          "From this Longformer transcript, extract decisions, open questions, and action items with owners. Create Tasks with due dates next week.",
        tags: ["Office", "Longformer"],
        meta: "@pm",
      },
      {
        id: "prompt-internal-tool",
        kind: "prompt" as DirectoryKind,
        title: "Internal tool scaffold",
        description:
          "Generate a small ops app: filterable table, detail drawer, and empty state. Data shape attached. Pin to Apps when the happy path works.",
        tags: ["Generated", "Ops"],
        meta: "@eng",
      },
      {
        id: "prompt-automation-digest",
        kind: "prompt" as DirectoryKind,
        title: "Monday digest Automation",
        description:
          "Turn this Chat workflow into a Monday 9am Automation: summarize open Tasks, calendar for the week, and draft a standup note in Notes.",
        tags: ["Automations", "PIM"],
        meta: "@team-lead",
      },
    ],
  },
] as const;
