const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Desktop Dyno",
  description: "foo bar",

  dest: "./docs",

  head: [
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" }],
  ],

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://desktopdyno.org",

    baseLang: "en-US",

    author: "Nathan Petersen",
    repo: "https://github.com/DesktopDyno/DesktopDyno.org",
    repoDisplay: false,

    themeColor: false,

    iconPrefix: 'fas fab fa-',


    blog: false,

    pageInfo: ['author', 'time', 'category', 'tag', 'reading-time', 'word'],

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],

    sidebar: [
      "",
    ],

    comment: false,

    footer: {
      display: true,
      content: "Desktop Dyno Project",
    },

    copyright: true,

    git: {
      timezone: "America/Chicago",
    },

    mdEnhance: {
      align: true,
      lineNumbers: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tex: true,
      flowchart: true
    },

    pwa: false
  },
});
