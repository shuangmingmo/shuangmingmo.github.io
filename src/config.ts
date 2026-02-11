export const SITE = {
  website: "https://shuangmingmo.github.io",
  author: "Shuangming Mo",
  profile: "https://shuangmingmo.github.io",
  desc: "Personal blog of Shuangming Mo. Sharing thoughts on physics, mathematics, and coding.",
  title: "Shuangming Mo", // This appears in the browser tab and site header
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit this post",
    // CRITICAL: Change 'your-repo-name' below to the actual name of your GitHub repository
    // If you named your repo "shuangmingmo.github.io", use that.
    url: "https://github.com/shuangmingmo/shuangmingmo.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Shanghai", // Updated to your timezone
} as const;