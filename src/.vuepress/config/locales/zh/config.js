const ads = require('./ads')
const translation = require('./translation')

module.exports = {
  languages: {
    label: '中文',
    shortname: 'ZH'
  },
  translation,
  ads,
  logo: {
    name: 'ktquez-play-logo',
    ext: 'png',
    alt: 'Logo in 3 colors in play format'
  },
  share: {
    facebookCaption: '',
    twitterVia: '',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2019 © Qi Lei - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'Qi Lei的blog',
      items: [
        {
          label: '关于我',
          path: '/about/'
        },
        {
          label: '类别',
          path: '/categories/'
        },
        {
          label: '联系我',
          path: '/contact/'
        }
      ]
    },
    nav2: {
      title: '社交群',
      items: [
        {
          label: 'QQ:411285047'
        }
      ]
    }
  },
  social: [
    {
      name: 'github',
      link: `https://www.github.com/qileilove`
    }
  ]
}
