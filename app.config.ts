// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Magic LMS',
    description: 'The best learning management system',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      youtube: '@imjolofficial?si=n6Nx0_hOYvHbh3g5',
      facebook: 'imjolhq',
      // twitter: 'nuxt_js',
      // github: 'nuxt-themes/docus',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: false
    }
  }
})
