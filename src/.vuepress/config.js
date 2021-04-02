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
    logo: "/logo-transparent.png",
    hostname: "https://desktopdyno.org",

    baseLang: "en-US",

    author: "Nathan Petersen",
    repo: "https://github.com/DesktopDyno/DesktopDyno.org",
    repoDisplay: false,
    docsDir: "src",
    docsBranch: "main",

    darkmode: "auto-switch",
    themeColor: false,

    iconPrefix: 'fas fab fa-',

    blog: false,

    pageInfo: ['author', 'time', 'category', 'tag', 'reading-time', 'word'],

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Machines", link: "/machines/" },
    ],

    sidebar: {
      "/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            ["/guide/", "Introduction"],
          ]
        },
        {
          title: "Machines",
          collapsable: false,
          children: [
            ["/machines/", "Introduction"],
            "/machines/dc-machine.md",
            "/machines/induction-machine.md",
            "/machines/synchronous-machine.md",
            "/machines/reluctance-machine.md",
          ]
        }
      ],
    },

    comment: false,

    footer: {
      display: true,
      content: "Desktop Dyno Project",
    },

    copyright: true,

    git: {
      timezone: "America/Chicago",
      contributor: false,
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
