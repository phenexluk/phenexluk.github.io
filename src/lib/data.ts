import type { Locale } from "./i18n";

export type ProjectPlatform = "hybrid" | "module" | "native" | "android" | "prototype" | "flutter";

export type Project = {
  id: string;
  featured: boolean;
  platform: ProjectPlatform;
  tech: string[];
};

export type Showcase = {
  id: string;
  platform: "flutter" | "android";
  tech: string[];
  github: string;
};

export type Experience = {
  id: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  tech: string[];
};

export const siteConfig = {
  name: "Phenex Luk",
  chineseName: "",
  title: "Lead Mobile Developer",
  email: "tkd1996131@gmail.com",
  location: "Hong Kong",
  github: "https://github.com/phenexluk",
  linkedin: "https://www.linkedin.com/in/phenex-luk-7ba3a816a",
};

export const projects: Project[] = [
  { id: "ctf-club", featured: true, platform: "hybrid", tech: ["React Native", "Expo", "AEP", "Firebase"] },
  { id: "cathay-mall", featured: true, platform: "module", tech: ["Kotlin", "Swift", "MVVM"] },
  { id: "gamesbond", featured: true, platform: "hybrid", tech: ["React Native", "Next.js", "Kotlin Spring Boot", "Web3"] },
  { id: "versus-arena", featured: false, platform: "hybrid", tech: ["React Native", "Expo"] },
  { id: "versus-arena-flutter", featured: true, platform: "flutter", tech: ["Flutter", "Dart"] },
  { id: "cga-esports", featured: false, platform: "native", tech: ["Android", "iOS", "Java", "Swift"] },
  { id: "zou-gwai", featured: false, platform: "android", tech: ["Android", "Java", "MVVM"] },
  { id: "viatris-vclub", featured: false, platform: "hybrid", tech: ["React Native", "Expo"] },
];

export const showcases: Showcase[] = [
  {
    id: "hk-bus-flutter",
    platform: "flutter",
    tech: ["Flutter", "Dart", "Provider", "GPS", "Maps", "REST"],
    github: "https://github.com/phenexluk/HongKong-Bus-checker-Flutter",
  },
  {
    id: "hk-weather-android",
    platform: "android",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Glance Widget", "HKO API"],
    github: "https://github.com/phenexluk/HongKongWeather-Kotlin-Android",
  },
];

export const experiences: Experience[] = [
  {
    id: "appnovation",
    company: "Appnovation",
    location: "Hong Kong",
    start: "2025-05",
    end: null,
    tech: ["React Native", "Expo", "AEP", "AJO"],
  },
  {
    id: "accenture",
    company: "Accenture",
    location: "Hong Kong",
    start: "2023-06",
    end: "2025-04",
    tech: ["Kotlin", "Swift", "Node.js", "React Native"],
  },
  {
    id: "gamesbond",
    company: "Gamesbond Limited",
    location: "Hong Kong",
    start: "2022-03",
    end: "2023-05",
    tech: ["React Native", "Next.js", "Kotlin Spring Boot"],
  },
  {
    id: "versus",
    company: "Versus Arena",
    location: "Hong Kong",
    start: "2020-06",
    end: "2022-03",
    tech: ["React Native", "Expo", "Android", "iOS"],
  },
  {
    id: "echk",
    company: "ECHK",
    location: "Hong Kong",
    start: "2018-09",
    end: "2020-05",
    tech: ["Android", "Java"],
  },
  {
    id: "smartorder",
    company: "SmartOrder Technology",
    location: "Hong Kong",
    start: "2016-09",
    end: "2018-08",
    tech: ["Android", "Java", "POS"],
  },
];

export type SkillGroupId =
  | "mobile"
  | "frontend"
  | "ai"
  | "backend"
  | "devops"
  | "languages";

export const skillGroups: { id: SkillGroupId; skills: string[] }[] = [
  {
    id: "mobile",
    skills: [
      "React Native (Expo)",
      "Flutter",
      "iOS (Swift, Objective-C)",
      "Android (Java, Kotlin)",
      "MVVM Architecture",
    ],
  },
  {
    id: "frontend",
    skills: [
      "Next.js",
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Flexbox Layouts",
      "UI/UX Implementation",
    ],
  },
  {
    id: "ai",
    skills: [
      "Cursor",
      "Claude 3.5 Sonnet",
      "Google Gemini",
      "AI-Assisted Code Refactoring",
    ],
  },
  {
    id: "backend",
    skills: [
      ".NET Core / ASP.NET Core",
      "Kotlin Spring Boot",
      "Node.js",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "OAuth 2.0 / OIDC",
    ],
  },
  {
    id: "devops",
    skills: [
      "Git (GitFlow)",
      "CI/CD (Jenkins, GitHub Actions, Fastlane, Firebase)",
      "Docker",
      "TestFlight",
    ],
  },
  {
    id: "languages",
    skills: [
      "Cantonese (Native)",
      "English (Fluent)",
      "Mandarin (Fair)",
      "Japanese (Conversational)",
    ],
  },
];

export type Messages = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    showcase: string;
    experience: string;
    contact: string;
    role: string;
  };
  hero: {
    kicker: string;
    summary: string;
    detail: string;
    aiWorkflow: string;
    statYears: string;
    statYearsLabel: string;
    statPlatforms: string;
    statPlatformsLabel: string;
    statBrands: string;
    statBrandsLabel: string;
    status: string;
    tagline: string;
    nextTitle: string;
    nextBody: string;
    focus: string;
    focusItems: string[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: Record<SkillGroupId, string>;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    outcome: string;
    viewAll: string;
    swipeHint: string;
    prev: string;
    next: string;
    platforms: Record<ProjectPlatform, string>;
    items: Record<
      string,
      { title: string; description: string; outcome: string }
    >;
  };
  showcase: {
    kicker: string;
    title: string;
    subtitle: string;
    viewOnGithub: string;
    platforms: Record<"flutter" | "android", string>;
    items: Record<string, { title: string; description: string; highlights: string[] }>;
  };
  experience: {
    kicker: string;
    title: string;
    present: string;
    responsibilities: string;
    items: Record<
      string,
      { title: string; bullets: string[] }
    >;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    cta: string;
  };
  footer: {
    copyright: string;
    viewSource: string;
  };
};

const en: Messages = {
  meta: {
    title: "Phenex Luk — Mobile apps that ship.",
    description:
      "Phenex Luk is a Lead Mobile Developer in Hong Kong with 10+ years building React Native, Flutter, iOS, and Android apps — leveraging AI-assisted workflows to ship faster.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    showcase: "Showcase",
    experience: "Experience",
    contact: "Contact",
    role: "Lead Mobile Developer",
  },
  hero: {
    kicker: "Hi, I'm",
    summary:
      "Architecting and delivering high-performance cross-platform mobile solutions for global brands.",
    detail:
      "Expert in React Native, Flutter, Swift, and Kotlin — leading teams, integrating complex third-party services, and migrating legacy native apps into scalable hybrid frameworks.",
    aiWorkflow:
      "Leverages modern AI-assisted development workflows — Cursor, Claude, and Gemini — to accelerate sprint cycles, optimize code refactoring, and reduce time-to-market.",
    statYears: "10+",
    statYearsLabel: "years building mobile products",
    statPlatforms: "3",
    statPlatformsLabel: "platforms — iOS, Android & cross-platform",
    statBrands: "12+",
    statBrandsLabel: "apps shipped for enterprise brands",
    status: "Lead Mobile Developer",
    tagline:
      "Mobile-first engineer · React Native, Flutter, iOS & Android · full-stack capable",
    nextTitle: "Leading at Appnovation",
    nextBody:
      "Engineering cross-platform loyalty apps with React Native & Expo, collaborating with Adobe on AEP and AJO integrations.",
    focus: "Focus",
    focusItems: ["React Native", "Flutter", "iOS & Android", "MVVM", "AEP / Firebase", "AI-assisted Dev", "CI/CD"],
  },
  skills: {
    kicker: "Key Skills",
    title: "The full toolkit.",
    groups: {
      mobile: "Core Mobile",
      frontend: "Front-End Engineering",
      ai: "AI & Engineering Productivity",
      backend: "Backend & API Architecture",
      devops: "DevOps & Tools",
      languages: "Languages",
    },
  },
  projects: {
    kicker: "Featured Projects",
    title: "Selected work across loyalty, e-commerce, and consumer apps.",
    subtitle: "Start here for the fastest read on the apps I build.",
    outcome: "Outcome",
    viewAll: "View all featured projects",
    swipeHint: "Swipe the phone to explore projects",
    prev: "Previous project",
    next: "Next project",
    platforms: {
      hybrid: "React Native",
      module: "Module",
      native: "iOS & Android",
      android: "Android",
      prototype: "Prototype",
      flutter: "Flutter",
    },
    items: {
      "ctf-club": {
        title: "Chow Tai Fook — CTF Club",
        description:
          "Full loyalty app revamp using React Native with Expo. Integrated Adobe Experience Platform and AJO for personalized member journeys.",
        outcome: "Delivered a production-grade loyalty experience for one of Asia's largest jewellery brands.",
      },
      "cathay-mall": {
        title: "Cathay Mall Membership Module",
        description:
          "Architected the cross-platform membership module for the unified Cathay & Asia Miles app using Kotlin and Swift with MVVM.",
        outcome: "Unified loyalty experience across Cathay's flagship mobile product.",
      },
      "gamesbond": {
        title: "GamesBond",
        description:
          "Hybrid mobile app embedding Web3 NFT features with React Native, Next.js frontend, and Kotlin Spring Boot backend.",
        outcome: "Seamlessly blended Web3 into a polished consumer-facing mobile experience.",
      },
      "versus-arena": {
        title: "Versus Arena",
        description:
          "Cross-platform gaming community app built with React Native and Expo after migrating from legacy native codebases.",
        outcome: "Reduced development overhead and accelerated time-to-market.",
      },
      "versus-arena-flutter": {
        title: "Versus Arena (Prototype)",
        description:
          "Flutter prototype reimagining the Versus Arena gaming community app — exploring cross-platform UI, navigation, and performance ahead of a production rebuild.",
        outcome: "Validated Flutter as a strong candidate for the next-generation Versus Arena experience.",
      },
      "cga-esports": {
        title: "CGA — eSports",
        description:
          "Native Android and iOS builds for a competitive gaming platform with real-time match tracking.",
        outcome: "Shipped performant native apps for a fast-growing eSports audience.",
      },
      "zou-gwai": {
        title: "走鬼",
        description:
          "Rebuilt app architecture with Java and MVVM, driving the app to rank #1 on both Google Play and Apple App Store in Hong Kong.",
        outcome: "#1 ranked app in Hong Kong on both major app stores.",
      },
      "viatris-vclub": {
        title: "Viatris HK — Vclub",
        description:
          "Key contributor to a healthcare loyalty app built with React Native and Expo for the Hong Kong market.",
        outcome: "Delivered a compliant, user-friendly health loyalty experience.",
      },
    },
  },
  showcase: {
    kicker: "GitHub Showcase",
    title: "Open-source apps built end-to-end.",
    subtitle:
      "Fully developed personal showcases — Flutter and native Android — using Hong Kong open data APIs.",
    viewOnGithub: "View on GitHub",
    platforms: {
      flutter: "Flutter",
      android: "Android / Kotlin",
    },
    items: {
      "hk-bus-flutter": {
        title: "Hong Kong Bus Checker",
        description:
          "Flutter + Dart client for KMB bus ETA lookup — GPS nearby routes, KMB-style route search, animated map with stop ETAs, and bilingual UI.",
        highlights: [
          "GPS nearby discovery with live remaining-time ETA",
          "KMB-style numpad search with smart key filtering",
          "Route detail map with CSDI tiles + expandable stop panels",
        ],
      },
      "hk-weather-android": {
        title: "Hong Kong Weather",
        description:
          "Kotlin Android showcase powered by the HKO Open Data API — Compose UI, MVVM, home screen widget, and a station temperature map.",
        highlights: [
          "Jetpack Compose weather UI with location-aware readings",
          "Glance home screen widget with WorkManager refresh",
          "OSMDroid map overlay across HKO automatic weather stations",
        ],
      },
    },
  },
  experience: {
    kicker: "Work Experience",
    title: "A decade of mobile engineering across Hong Kong's top agencies and start-ups.",
    present: "Present",
    responsibilities: "Key Responsibilities",
    items: {
      appnovation: {
        title: "Associate Lead Mobile Developer",
        bullets: [
          "Engineered high-performance cross-platform apps with React Native and Expo.",
          "Collaborated with Adobe teams on AEP and AJO service synchronization.",
          "Led CTF Club loyalty revamp; contributed to Viatris Vclub, Humansa, and LAB Golf.",
        ],
      },
      accenture: {
        title: "Application Development Senior Analyst",
        bullets: [
          "Spearheaded full-stack development across Android, iOS, and Node.js.",
          "Mentored engineering pods and ensured Agile delivery cycles.",
          "Architected Cathay Mall Membership Module for the unified Cathay & Asia Miles app.",
        ],
      },
      gamesbond: {
        title: "Analyst Programmer (Mobile Apps)",
        bullets: [
          "Orchestrated end-to-end mobile app lifecycles via React Native.",
          "Built responsive web interfaces with Next.js and backend with Kotlin Spring Boot.",
          "Developed GamesBond hybrid app with Web3 NFT features.",
        ],
      },
      versus: {
        title: "Mobile Application Developer",
        bullets: [
          "Supervised legacy native app migrations to React Native/Hooks.",
          "Slashed corporate development overhead and accelerated time-to-market.",
          "Delivered Versus Arena and CGA eSports apps.",
        ],
      },
      echk: {
        title: "Android Application Developer",
        bullets: [
          "Built robust native Android apps with Java.",
          "Gathered requirements directly from business clients.",
          "Rebuilt 走鬼 architecture — drove app to #1 in Hong Kong app stores.",
        ],
      },
      smartorder: {
        title: "IT & Android Support Engineer",
        bullets: [
          "Provided on-site technical support and system architecture installations.",
          "Contributed to SmartOrder POS native Android app deployment and optimization.",
        ],
      },
    },
  },
  contact: {
    kicker: "Get in Touch",
    title: "Let's build something great.",
    subtitle:
      "Have a mobile project in mind or want to discuss opportunities? I'd love to hear from you.",
    email: "Email",
    location: "Location",
    github: "GitHub",
    linkedin: "LinkedIn",
    cta: "Send an email",
  },
  footer: {
    copyright: "All rights reserved.",
    viewSource: "View Source",
  },
};

const zh: Messages = {
  meta: {
    title: "Phenex Luk — 能交付的流動應用",
    description:
      "Phenex Luk 是香港資深流動應用開發主管，擁有超過十年 React Native、Flutter、iOS 及 Android 開發經驗，服務全球品牌。",
  },
  nav: {
    home: "首頁",
    projects: "項目",
    showcase: "展示",
    experience: "經歷",
    contact: "聯絡",
    role: "資深流動開發主管",
  },
  hero: {
    kicker: "你好，我是",
    summary: "為全球品牌構建及交付高效能跨平台流動解決方案。",
    detail:
      "精通 React Native、Flutter、Swift 及 Kotlin — 帶領團隊、整合複雜第三方服務，並將傳統原生應用遷移至可擴展的混合框架。",
    aiWorkflow:
      "運用 Cursor、Claude、Gemini 等現代 AI 輔助開發流程，加快衝刺週期、優化重構，並縮短上市時間。",
    statYears: "10+",
    statYearsLabel: "年流動產品開發經驗",
    statPlatforms: "3",
    statPlatformsLabel: "平台 — iOS、Android 及跨平台",
    statBrands: "12+",
    statBrandsLabel: "為企業品牌交付的應用",
    status: "資深流動開發主管",
    tagline: "流動優先工程師 · React Native、Flutter、iOS 及 Android · 具全端能力",
    nextTitle: "現職於 Appnovation",
    nextBody: "以 React Native 及 Expo 開發跨平台會員應用，與 Adobe 團隊協作 AEP 及 AJO 整合。",
    focus: "專長",
    focusItems: ["React Native", "Flutter", "iOS & Android", "MVVM", "AEP / Firebase", "AI 輔助開發", "CI/CD"],
  },
  skills: {
    kicker: "核心技能",
    title: "完整技術工具箱。",
    groups: {
      mobile: "核心流動開發",
      frontend: "前端工程",
      ai: "AI 與工程效率",
      backend: "後端與 API 架構",
      devops: "DevOps 與工具",
      languages: "語言",
    },
  },
  projects: {
    kicker: "精選項目",
    title: "涵蓋會員計劃、電商及消費類應用的精選作品。",
    subtitle: "從這裡快速了解我構建的應用。",
    outcome: "成果",
    viewAll: "查看所有精選項目",
    swipeHint: "滑動手機瀏覽項目",
    prev: "上一個項目",
    next: "下一個項目",
    platforms: {
      hybrid: "React Native",
      module: "模組",
      native: "iOS 及 Android",
      android: "Android",
      prototype: "原型",
      flutter: "Flutter",
    },
    items: {
      "ctf-club": {
        title: "周大福 — CTF Club",
        description:
          "以 React Native 及 Expo 全面翻新會員應用，整合 Adobe Experience Platform 及 AJO 實現個人化會員體驗。",
        outcome: "為亞洲最大珠寶品牌之一交付生產級會員應用。",
      },
      "cathay-mall": {
        title: "國泰會員模組",
        description:
          "以 Kotlin 及 Swift 配合 MVVM 架構，為統一的國泰及亞洲萬里通應用構建跨平台會員模組。",
        outcome: "在國泰旗艦應用中實現統一的會員體驗。",
      },
      "gamesbond": {
        title: "GamesBond",
        description:
          "以 React Native、Next.js 前端及 Kotlin Spring Boot 後端構建嵌入 Web3 NFT 功能的混合應用。",
        outcome: "將 Web3 無縫融入精緻的消費者流動體驗。",
      },
      "versus-arena": {
        title: "Versus Arena",
        description:
          "從傳統原生代碼庫遷移後，以 React Native 及 Expo 構建的跨平台遊戲社群應用。",
        outcome: "降低開發成本並加快上市速度。",
      },
      "versus-arena-flutter": {
        title: "Versus Arena（原型）",
        description:
          "以 Flutter 重新構想 Versus Arena 遊戲社群應用 — 在正式重建前探索跨平台 UI、導航及效能。",
        outcome: "驗證 Flutter 作為下一代 Versus Arena 體驗的可行方案。",
      },
      "cga-esports": {
        title: "CGA — 電競",
        description: "為競技遊戲平台構建具即時賽事追蹤功能的原生 Android 及 iOS 應用。",
        outcome: "為快速成長的電競用戶群交付高效能原生應用。",
      },
      "zou-gwai": {
        title: "走鬼",
        description:
          "以 Java 及 MVVM 重構應用架構，推動應用登上香港 Google Play 及 App Store 榜首。",
        outcome: "在香港兩大應用商店均排名第一。",
      },
      "viatris-vclub": {
        title: "Viatris HK — Vclub",
        description: "以 React Native 及 Expo 為香港市場構建醫療保健會員應用的核心貢獻者。",
        outcome: "交付合規且用戶友好的健康會員體驗。",
      },
    },
  },
  showcase: {
    kicker: "GitHub 展示",
    title: "端到端構建的開源應用。",
    subtitle: "以 Flutter 及原生 Android 完整開發的個人展示項目，連接香港開放數據 API。",
    viewOnGithub: "在 GitHub 查看",
    platforms: {
      flutter: "Flutter",
      android: "Android / Kotlin",
    },
    items: {
      "hk-bus-flutter": {
        title: "香港巴士查詢",
        description:
          "以 Flutter + Dart 構建的九巴 ETA 查詢應用 — GPS 附近路線、九巴風格路線搜尋、動畫地圖站點 ETA，以及雙語介面。",
        highlights: [
          "GPS 附近路線發現與剩餘時間 ETA",
          "九巴風格數字鍵盤搜尋，智能按鍵啟用",
          "路線詳情地圖（CSDI 圖磚）與可展開站點面板",
        ],
      },
      "hk-weather-android": {
        title: "香港天氣",
        description:
          "以 Kotlin Android 及香港天文台開放數據 API 構建的展示應用 — Compose UI、MVVM、主畫面 Widget 及測站溫度地圖。",
        highlights: [
          "Jetpack Compose 天氣介面，按位置顯示最近測站讀數",
          "Glance 主畫面 Widget，配合 WorkManager 定時更新",
          "OSMDroid 地圖覆蓋香港天文台自動氣象站溫度",
        ],
      },
    },
  },
  experience: {
    kicker: "工作經歷",
    title: "十年流動工程經驗，遍佈香港頂尖機構及初創企業。",
    present: "至今",
    responsibilities: "主要職責",
    items: {
      appnovation: {
        title: "Associate Lead Mobile Developer",
        bullets: [
          "以 React Native 及 Expo 構建高效能跨平台應用。",
          "與 Adobe 團隊協作 AEP 及 AJO 服務同步。",
          "主導 CTF Club 翻新；參與 Viatris Vclub、Humansa 及 LAB Golf。",
        ],
      },
      accenture: {
        title: "Application Development Senior Analyst",
        bullets: [
          "主導 Android、iOS 及 Node.js 全端開發。",
          "指導工程團隊並確保敏捷交付。",
          "構建國泰會員模組，服務統一的國泰及亞洲萬里通應用。",
        ],
      },
      gamesbond: {
        title: "Analyst Programmer (Mobile Apps)",
        bullets: [
          "以 React Native 統籌端到端流動應用生命週期。",
          "以 Next.js 構建響應式網頁介面，Kotlin Spring Boot 構建後端。",
          "開發嵌入 Web3 NFT 功能的 GamesBond 混合應用。",
        ],
      },
      versus: {
        title: "Mobile Application Developer",
        bullets: [
          "監督傳統原生應用遷移至 React Native/Hooks。",
          "大幅降低企業開發成本並加快上市速度。",
          "交付 Versus Arena 及 CGA 電競應用。",
        ],
      },
      echk: {
        title: "Android Application Developer",
        bullets: [
          "以 Java 構建穩健的原生 Android 應用。",
          "直接與業務客戶收集需求。",
          "重構走鬼架構 — 推動應用登上香港應用商店榜首。",
        ],
      },
      smartorder: {
        title: "IT & Android Support Engineer",
        bullets: [
          "提供現場技術支援及系統架構安裝。",
          "參與 SmartOrder POS 原生 Android 應用部署及優化。",
        ],
      },
    },
  },
  contact: {
    kicker: "聯絡我",
    title: "一起構建出色的產品。",
    subtitle: "有流動項目構想或想討論合作機會？歡迎聯絡。",
    email: "電郵",
    location: "地點",
    github: "GitHub",
    linkedin: "LinkedIn",
    cta: "發送電郵",
  },
  footer: {
    copyright: "版權所有。",
    viewSource: "查看源碼",
  },
};

export function getMessages(locale: Locale): Messages {
  return locale === "zh" ? zh : en;
}

export function formatDate(dateStr: string, locale: Locale): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString(locale === "zh" ? "zh-HK" : "en-US", {
    month: "short",
    year: "numeric",
  });
}
