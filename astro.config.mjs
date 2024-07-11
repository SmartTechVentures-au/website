import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://smarttechventures.au/',
  base: '/',
  integrations: [starlight({
    head: [
      // Example: add Fathom analytics script tag.
      {
        tag: 'script',
        attrs: {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BL4D319NYK',
          'async': true,
          defer: false,
        },
      },
      {
        tag: 'script',
       content: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-BL4D319NYK");'
      },
    ],
    title: 'Smart Tech Ventures',
    logo: {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/orgs/SmartTechVentures-au'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[list] Services',
      link: '/services/'
    }, 
    {
      label: '[book] About',
      link: '/about/'
    }, 
    {
      label: '[rocket] Contact',
      link: '/contact/'
    },  
  ],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});