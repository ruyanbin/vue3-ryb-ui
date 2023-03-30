export default {
    themeConfig: {
      siteTitle: "茹燕斌的组件库",
      nav: [
        { text: "指南", link: "/guild/installation" },
        { text: "组件", link: "/components/button/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/ruyanbin/vue3-ryb-ui" },
      ],
      sidebar: {
        "/guild/": [
            {
                text: "基础",
                items: [
                    {
                        text: "安装",
                        link: "/guild/installation",
                    },
                    {
                        text: "快速开始",
                        link: "/guild/quickstart",
                    },
                ],
            },
            {
                text: "进阶",
                items: [
                    {
                        text: "xx",
                        link: "/xx",
                    },
                ],
            },
        ],
        "/components/": [
            {
                text: "基础组件",
                items: [
                    {
                        text: "Button",
                        link: "/components/button",
                    }
                ],
            }
        ]
    },
    },
  };