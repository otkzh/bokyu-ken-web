export default defineNuxtConfig({
  modules: ["@nuxt/content"],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  app: {
    head: {
      title: "防窮研究所",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=M+PLUS+Rounded+1c&family=Noto+Sans+JP:wght@100..900&display=swap",
        },
      ],
    },
  },

  compatibilityDate: "2024-07-18",
});
