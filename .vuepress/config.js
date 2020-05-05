module.exports = {
  dest: 'docs', /* production build with vuepress build */
  title: 'DeployScience',
  description: 'Bringing data science to life',
  head: [
    ['link', { rel: 'icon', href: '/deployscience_web.png' }]
  ],
  themeConfig: {
    sidebar: {
      '/solutions/': [
        '',
        'data',
        'environments',
        'models',
        'integrations',
        'management'
      ],

      '/about/': [
        ''
      ]
    },
    logo: '/deployscience_web.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Solutions', link: '/solutions/' },
      { text: 'About', link: '/about/' },
      { text: 'Need Help?', link: '/contact/' },
      { text: 'Blog', link: 'https://deployscience.substack.com/subscribe' }
    ],
    lastUpdated: 'Last Updated',
    smoothScroll: true
  }
}