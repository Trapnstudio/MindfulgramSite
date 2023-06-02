// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindfulgram',
  tagline: 'Keep in mind when using Instagram',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.mindfulgram.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trapNstudio', // Usually your GitHub org/user name.
  projectName: 'Mindfulgram', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Trapnstudio/MindfulgramSite',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Trapnstudio/MindfulgramSite',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/mindfulgram.png', 
      navbar: {
        title: 'Mindfulgram',
        logo: {
          alt: 'Mindfulgram',
          src: 'img/mindfulgram.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/folder you want to go to', label: 'Blog', position: 'left'},
          // {
          //   // TODO link to github repo
          //   href: 'https://github.com/Trapnstudio/MindfulgramSite',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
        
      },
      footer: {
        logo: {
          alt: 'Mindfulgram',
          src: 'img/mindfulgram.png',
          href: '/',
          width: 55,
         
        },
        style: 'light',
        links: [
          // TODO: a lot more links
          {
            title: 'Download ',
            items: [
              {
                label: 'Mindfulgram on the Chrome Web Store',
                href: 'https://github.com/Trapnstudio',
              },
              {
                label: 'Mindfulgram on the Apple App Store',
                href: 'https://www.trapnstudio.dev/',
              },
              {
                label: 'Mindfulgram on the Firefox Add-ons Store',
                href: 'https://www.trapnstudio.dev/',
              },
            ],
          },
          {
            title: 'Learn more',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Trapnstudio',
              },
              {
                label: 'Trapnstudio',
                href: 'https://www.trapnstudio.dev/',
              },
             
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 
        <a href="https://trapnstudio.dev" target="_blank">Trapnstudio</a>`,
      },
      tableOfContents: {
        maxHeadingLevel: 6,
      },
  
    }),
};

module.exports = config;
