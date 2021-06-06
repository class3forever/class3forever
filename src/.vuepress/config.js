const path = require("path");

module.exports = {
  title: 'We are No.1',
  description: '班级博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  
  evergreen: true,

  // plugins: [
  //   ['@vuepress/google-analytics', {
  //     ga: 'UA-165839722-1',
  //   }],
  // ],

  theme: 'melodydl',
  themeConfig: {
    title: 'Top',

    // aside personInfo
    personalInfo: {
      name: '我们3班',
      avatar: '/avatar-top.jpeg',
      headerBackgroundImg: '/avatar-bg.jpeg',
      description: 'In me the tiger sniffs the rose<br/>心有猛虎，细嗅蔷薇',
      email: 'classThreeForever@outlook.com',
      location: '东方 之 魔都',
      // organization: '',
    },
    // Nav link
    nav: [ 
      {text: 'HOME', link: '/' },
      {text: 'ABOUT', link: '/about/'},
      {text: 'TAGS', link: '/tags/'}      
    ],
    header: {
      home: {
        title: '永远 的 3班', 
        subtitle: '相遇，相识，相知，相伴', 
        headerImage: '/home-bg.jpeg'
      },
      tags: {
        title: 'Tags', 
        subtitle: '遇见你们', 
        headerImage: '/tags-bg.jpg'
      },
      postHeaderImg: '/post-bg.jpeg',
    },
    
    footer: {
      custom: `Copyright &copy; class3 2021 <br />`
    },
    pagination: {
      perPage: 5,
    },
    comments: {
      owner: 'class3Forever',
      repo: 'vuepress-theme-melodydl',
      clientId: '',
      clientSecret: '',
      autoCreateIssue: false,
    },
  }
}