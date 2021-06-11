module.exports = {
  "title": "超能 Ⅲ 班",
  "description": "筑匠心工程梦，行管理精英路",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "专栏",
        "icon": "reco-message",
        // "items": [
          // {
            // "text": "vuepress-reco",
            "link": "/docs/doocs/"
          // }
        // ]
      },
      {
        "text": "联系我们",
        "icon": "reco-message",
        "items": [
          {
            "text": "Email",
            "link": "mailto:classThreeForever@outlook.com",
            "icon": "reco-mail"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/doocs/": [
        "",
        "item1",
        "item2",
        "item3"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "ECUST",
        "desc": "ECUST",
        "avatar": "/logo.png",
        "link": "https://www.ecust.edu.cn/"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "sidebar": 'auto',
    "lastUpdated": "Last Updated",
    "author": "我们Ⅲ班",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2021",
  },
  
  "markdown": {
    "lineNumbers": true
  }
}