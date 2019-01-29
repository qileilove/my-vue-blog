// See more in https://github.com/ktquez/vuepress-theme-ktquez#themeconfig
const zh = require('./locales/zh/config')

module.exports = {
  locales: {
    '/': zh
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  responsive: {
    active: true, // Turn on responsive images on the cover of the post
    ext: 'png',
    breakpoints: [320, 427, 524, 680] // Breakpoints used for picture media tag
  },
  disqus: 'ktquez',
  url: `https://MY_DOMAIN.COM`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
  share: {
    facebook: {
      appId: `MY FACEBOOK APP ID`,
      version: 'v3.1'
    }
  },
  elevator: {
    duration: 4000,
    mainAudio: '/music/elevator.mp3',
    endAudio: '/music/ding.mp3'
  }
}
