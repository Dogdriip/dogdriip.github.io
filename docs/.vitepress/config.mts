import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default defineConfig(
  withSidebar(
    {
      lang: "ko-KR",
      title: "driip.me",
      description: "Dogdriip",
      themeConfig: {
        nav: [{ text: "Dogdriip", link: "/" }],
        socialLinks: [
          { icon: "github", link: "https://github.com/Dogdriip" },
          { icon: "linkedin", link: "https://www.linkedin.com/in/hyunseung" },
        ],
        lastUpdated: {
          text: "Last Updated",
          formatOptions: {
            dateStyle: "short",
            timeStyle: "short",
          },
        },
      },
      sitemap: {
        hostname: "https://driip.me",
      },
    },
    {
      documentRootPath: "/docs",
      capitalizeFirst: true,
    },
  ),
);
