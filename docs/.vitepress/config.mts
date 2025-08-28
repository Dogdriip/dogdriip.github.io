import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(
  withSidebar(
    {
      lang: "ko-KR",
      title: "driip.me",
      description: "Dogdriip",
      lastUpdated: true,
      head: [
        ["meta", { name: "theme-color", content: "#deccc7" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
          "meta",
          { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        ],
        [
          "script",
          {
            async: "",
            src: "https://www.googletagmanager.com/gtag/js?id=G-KKGR17G2TH",
          },
        ],
        [
          "script",
          {},
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-KKGR17G2TH');",
        ],
        [
          "link",
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
        ],
        [
          "link",
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        ],
        [
          "link",
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        ],
        ["link", { rel: "manifest", href: "/site.webmanifest" }],
        [
          "link",
          {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
          },
        ],
      ],
      themeConfig: {
        logo: "/icon.png",
        nav: [
          { text: "Dogdriip", link: "/" },
          { text: "Blog", link: "/blog/", activeMatch: "/blog*" },
          { text: "Journal", link: "/journal/", activeMatch: "/journal*" },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/Dogdriip" },
          { icon: "linkedin", link: "https://www.linkedin.com/in/hyunseung" },
        ],
      },
      sitemap: {
        hostname: "https://driip.me",
      },
      markdown: {
        image: {
          lazyLoading: true,
        },
      },
    },
    [
      {
        documentRootPath: "docs",
        scanStartPath: "blog",
        basePath: "/blog/",
        resolvePath: "/blog/",
        capitalizeFirst: true,
        sortMenusByFrontmatterDate: true,
        sortMenusOrderByDescending: true,
        hyphenToSpace: true,
      },
      {
        documentRootPath: "docs",
        scanStartPath: "journal",
        basePath: "/journal/",
        resolvePath: "/journal/",
        capitalizeFirst: true,
        sortMenusByFrontmatterDate: true,
        sortMenusOrderByDescending: true,
        hyphenToSpace: true,
      },
    ],
  ),
);
