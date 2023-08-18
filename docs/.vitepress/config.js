// .vitepress/config.js
export default {
  title: 'Teguh Sabila',
  description: 'Art and web programming',

  themeConfig: {
    logo: "/me.jpg",
    siteTitle: "Teguh Sabila",
    nav: [
    { text: "Project", link: "/project/"},
    { text: "Blog", link: "/blog/"},
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
    ],
    socialLinks: [
    { icon: "github", link: "https://github.com/teguhsbl" },
    { icon: "facebook", link: "https://fb.me/sabilateguh" },
    ],
    footer: {
   message: "This Portofolio build with Vitepress.",
   copyright: "Copyright © 2023-present Teguh Sabila",
 },
  },
}
