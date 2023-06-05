// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindfulgram',
  tagline: 'Use Instagram in a mindful way.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mindfulgram.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Trapnstudio', // Usually your GitHub org/user name.
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
          editUrl: 'https://github.com/Trapnstudio/MindfulgramSite',
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
          {
            href: '#install',
            label: 'Install',
            position: 'right',
          },
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
            title: 'Install ',
            items: [
              {
                label: 'Mindfulgram iOS app on App Store (Coming Soon)',
                href: '#install',
              },
              {
                label: 'Mindfulgram Android app on Play Store (Coming Soon)',
                href: '#install',
              },
              {
                label:
                  'Mindfulgram Chrome extension on Chrome Web Store (Coming Soon)',
                href: '#install',
              },
              {
                label:
                  'Mindfulgram Safari extension on App Store (Coming Soon)',
                href: '#install',
              },
              {
                label:
                  'Mindfulgram Firefox extension on Firefox Add-ons Store (Coming Soon)',
                href: '#install',
              },
              {
                label:
                  'Mindfulgram Edge extension on Microsoft Edge Add-ons Store (Coming Soon)',
                href: '#install',
              },
              {
                label: 'Mindfulgram Arc boost on Arcboost',
                href: 'https://arcboosts.com/boosts/161/mindfulgram',
              },
              {
                label: 'Mindfulgram userscript on Greasy Fork',
                href: 'https://greasyfork.org/en/scripts/461388-mindfulgram',
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by <a href="https://trapnstudio.dev" target="_blank">Trapnstudio</a>`,
      },
      tableOfContents: {
        maxHeadingLevel: 6,
      },

      metadata: [
        {
          name: 'keywords',
          content:
            'minimal Instagram, simplify Instagram, clean Instagram, simple Instagram, Instagram Cleaner, No Instagram stories, no Instagram reels, no Instagram explore page, no Instagram comments, Mindful, Mindfulgram, Instagram extension, Remove Instagram distractions, Instagram distraction free, Instagram without account stories, Instagram without Explore Page, Instagram without Reels, Instagram without comments, Instagram without suggested post, stop Instagram endless scrolling, How to stop scrolling on Instagram, Instagram without distractions, Instagram habits, Instagram addiction help, Social media addiction, stop scrolling, Instagram, addictive, digital well-being, mindful browsing, digital detox, reduce screen time, productivity, focus, time management, mindful usage, digital mindfulness, mindfulness tools, limit social media, internet addiction, healthy technology habits, screen time management, reduce distractions, mindful scrolling, digital balance, self-control, online presence, social media management, boost productivity, break social media addiction, Instagram usage control, manage Instagram usage, digital wellness, improve focus, increase mindfulness, social media detox, mental health, self-discipline, time tracking, distraction-blocking, improve concentration, enhance productivity, maintain focus, online productivity tools, Instagram addiction recovery, digital mindfulness practices, reduce online distractions, regain control over social media, mindful browsing extension, mindful social media, overcome Instagram addiction, social media usage control, regain focus on Instagram, develop healthy digital habits, mindful Instagram browsing, mindful Instagram usage, eliminate social media distractions, cultivate digital well-being, create healthy boundaries with Instagram, digital health, screen time tracking, mindful engagement on Instagram, promote mindful Instagram habits, mindful scrolling on Instagram, Instagram usage tracker, digital self-care, mindful online behavior, digital wellness tips, mindful content consumption on Instagram, manage Instagram addiction, promote balanced Instagram usage, develop digital mindfulness, mindful use of social media, Instagram addiction management, mindful Instagram browsing habits, mindful Instagram engagement, digital balance with Instagram, limit Instagram usage, mindful social media practices, reduce Instagram addiction, mindful Instagram habits, digital detoxification, mindful Instagram scrolling, mindful Instagram presence, conscious Instagram usage, social media well-being, Instagram addiction support, mindful Instagram feed, Instagram usage awareness, mindful Instagram behavior, conscious social media usage, Instagram addiction prevention, mindful Instagram experience, mindful Instagram engagement, digital well-being strategies, Instagram usage boundaries, cultivate digital mindfulness on Instagram, Instagram addiction intervention, mindful Instagram routine, intentional Instagram usage, mindful Instagram exploration, Instagram usage management, digital well-being practices, mindful Instagram followers, mindful Instagram posting, Instagram usage tips, digital mindfulness techniques, mindful Instagram connections, Instagram usage control tips, mindful Instagram interaction, mindful Instagram followership, Instagram addiction recovery strategies, promote mindful Instagram browsing, mindful Instagram storytelling, mindful Instagram content creation, Instagram addiction therapy, mindful Instagram presence, mindful Instagram curation, Instagram usage reduction, digital mindfulness habits, mindful Instagram following, develop mindful Instagram habits, Instagram addiction coping strategies, mindful Instagram discoverability, mindful Instagram engagement, digital mindfulness exercises, mindful Instagram sharing, promote mindful Instagram usage, cultivate mindful Instagram presence, mindful Instagram community, Instagram usage awareness tips, digital wellness strategies, mindful Instagram storytelling, mindful Instagram content consumption, Instagram addiction support groups, mindful Instagram exploration, intentional Instagram browsing, mindful Instagram posting, conscious Instagram engagement, Instagram addiction awareness, mindful Instagram habits, mindful Instagram connection, conscious social media engagement, Instagram usage boundaries, cultivate mindful Instagram usage, Instagram addiction intervention, mindful Instagram routine, intentional Instagram usage, mindful Instagram discovery, Instagram usage management tips, digital well-being practices, mindful Instagram followers, mindful Instagram posting, Instagram usage tips, digital mindfulness techniques, mindful Instagram interactions, mindful Instagram followership, Instagram addiction recovery strategies, promote mindful Instagram browsing, mindful Instagram storytelling, mindful Instagram content creation, Instagram addiction therapy, mindful Instagram presence, mindful Instagram curation, Instagram',
        },
      ],
    }),
};

module.exports = config;
