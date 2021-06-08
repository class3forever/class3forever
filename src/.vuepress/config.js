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
      {text: '首页', link: '/' },
      {text: '专栏', link: '/tags/'},
      {text: '关于', link: '/about/'}
          
    ],
    header: {
      home: {
        title: '有幸遇见，不负遇见', 
        subtitle: '光荣与梦想，始终在我们内心深处。3班，永远', 
        headerImage: '/home-bg.jpeg'
      },
      tags: {
        title: '专栏', 
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