webpackJsonp([121],{

/***/ 1910:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。"
    ],
    [
      "p",
      [
        "img",
        {
          "title": null,
          "src": "https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",
          "alt": "一些配置好的主题"
        }
      ]
    ],
    [
      "h2",
      "Ant Design 的样式变量"
    ],
    [
      "p",
      "antd 的样式使用了 ",
      [
        "a",
        {
          "title": null,
          "href": "http://lesscss.org/"
        },
        "Less"
      ],
      " 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。"
    ],
    [
      "p",
      "以下是一些最常用的通用变量，所有样式变量可以在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "这里"
      ],
      " 找到。"
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token variable\">@primary-color<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#1890ff</span><span class=\"token punctuation\">;</span>                         <span class=\"token comment\" spellcheck=\"true\">// 全局主色</span>\n<span class=\"token variable\">@link-color<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#1890ff</span><span class=\"token punctuation\">;</span>                            <span class=\"token comment\" spellcheck=\"true\">// 链接色</span>\n<span class=\"token variable\">@success-color<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#52c41a</span><span class=\"token punctuation\">;</span>                         <span class=\"token comment\" spellcheck=\"true\">// 成功色</span>\n<span class=\"token variable\">@warning-color<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#faad14</span><span class=\"token punctuation\">;</span>                         <span class=\"token comment\" spellcheck=\"true\">// 警告色</span>\n<span class=\"token variable\">@error-color<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#f5222d</span><span class=\"token punctuation\">;</span>                           <span class=\"token comment\" spellcheck=\"true\">// 错误色</span>\n<span class=\"token variable\">@font-size-base<span class=\"token punctuation\">:</span></span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>                           <span class=\"token comment\" spellcheck=\"true\">// 主字号</span>\n<span class=\"token variable\">@heading-color<span class=\"token punctuation\">:</span></span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.85</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>              <span class=\"token comment\" spellcheck=\"true\">// 标题色</span>\n<span class=\"token variable\">@text-color<span class=\"token punctuation\">:</span></span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.65</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>                 <span class=\"token comment\" spellcheck=\"true\">// 主文本色</span>\n<span class=\"token variable\">@text-color-secondary <span class=\"token punctuation\">:</span></span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.45</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>      <span class=\"token comment\" spellcheck=\"true\">// 次文本色</span>\n<span class=\"token variable\">@disabled-color <span class=\"token punctuation\">:</span></span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.25</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>            <span class=\"token comment\" spellcheck=\"true\">// 失效色</span>\n<span class=\"token variable\">@border-radius-base<span class=\"token punctuation\">:</span></span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>                        <span class=\"token comment\" spellcheck=\"true\">// 组件/浮层圆角</span>\n<span class=\"token variable\">@border-color-base<span class=\"token punctuation\">:</span></span> <span class=\"token hexcode\">#d9d9d9</span><span class=\"token punctuation\">;</span>                     <span class=\"token comment\" spellcheck=\"true\">// 边框色</span>\n<span class=\"token variable\">@box-shadow-base<span class=\"token punctuation\">:</span></span> <span class=\"token number\">0</span> <span class=\"token number\">2</span>px <span class=\"token number\">8</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">.15</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// 浮层阴影</span>"
      },
      [
        "code",
        "@primary-color: #1890ff;                         // 全局主色\n@link-color: #1890ff;                            // 链接色\n@success-color: #52c41a;                         // 成功色\n@warning-color: #faad14;                         // 警告色\n@error-color: #f5222d;                           // 错误色\n@font-size-base: 14px;                           // 主字号\n@heading-color: rgba(0, 0, 0, .85);              // 标题色\n@text-color: rgba(0, 0, 0, .65);                 // 主文本色\n@text-color-secondary : rgba(0, 0, 0, .45);      // 次文本色\n@disabled-color : rgba(0, 0, 0, .25);            // 失效色\n@border-radius-base: 4px;                        // 组件/浮层圆角\n@border-color-base: #d9d9d9;                     // 边框色\n@box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);  // 浮层阴影"
      ]
    ],
    [
      "p",
      "如果以上变量不能满足你的定制需求，可以给我们提 issue。"
    ],
    [
      "h2",
      "定制方式"
    ],
    [
      "p",
      "原理上是使用 less 提供的 ",
      [
        "a",
        {
          "title": null,
          "href": "http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"
        },
        "modifyVars"
      ],
      " 的方式进行覆盖变量，可以在本地运行 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/create-react-app-antd"
        },
        "例子"
      ],
      " 查看定制效果。下面将针对不同的场景提供一些常用的定制方式。"
    ],
    [
      "h3",
      "在 webpack 中定制主题"
    ],
    [
      "p",
      "我们以 webpack@4 为例进行说明，以下是一个 ",
      [
        "code",
        "webpack.config.js"
      ],
      " 的典型例子，对 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/webpack-contrib/less-loader"
        },
        "less-loader"
      ],
      " 的 options 属性进行相应配置。"
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "// webpack.config.js\nmodule.exports = {\n  rules: [{\n    test: /\\.less$/,\n    use: [{\n      loader: 'style-loader',\n    }, {\n      loader: 'css-loader', // translates CSS into CommonJS\n    }, {\n      loader: 'less-loader', // compiles Less to CSS\n<span class=\"token inserted\">+     options: {</span>\n<span class=\"token inserted\">+       modifyVars: {</span>\n<span class=\"token inserted\">+         'primary-color': '#1DA57A',</span>\n<span class=\"token inserted\">+         'link-color': '#1DA57A',</span>\n<span class=\"token inserted\">+         'border-radius-base': '2px',</span>\n<span class=\"token inserted\">+       },</span>\n<span class=\"token inserted\">+       javascriptEnabled: true,</span>\n<span class=\"token inserted\">+     },</span>\n    }],\n    // ...other rules\n  }],\n  // ...other config\n}"
      },
      [
        "code",
        "// webpack.config.js\nmodule.exports = {\n  rules: [{\n    test: /\\.less$/,\n    use: [{\n      loader: 'style-loader',\n    }, {\n      loader: 'css-loader', // translates CSS into CommonJS\n    }, {\n      loader: 'less-loader', // compiles Less to CSS\n+     options: {\n+       modifyVars: {\n+         'primary-color': '#1DA57A',\n+         'link-color': '#1DA57A',\n+         'border-radius-base': '2px',\n+       },\n+       javascriptEnabled: true,\n+     },\n    }],\n    // ...other rules\n  }],\n  // ...other config\n}"
      ]
    ],
    [
      "p",
      "注意 less-loader 的处理范围不要过滤掉 ",
      [
        "code",
        "node_modules"
      ],
      " 下的 antd 包。"
    ],
    [
      "h3",
      "在 roadhog 或 Umi 里配置主题"
    ],
    [
      "p",
      "如果你在使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog"
        },
        "roadhog"
      ],
      " 或者 ",
      [
        "a",
        {
          "title": null,
          "href": "http://umijs.org/"
        },
        "Umi"
      ],
      "，那么可以很方便地在项目根目录的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"
        },
        ".webpackrc"
      ],
      "（roadhog）或 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/56e648ec14bdb9f6724169fd64830447e224ccb1/config/config.js#L45"
        },
        "config/config.js"
      ],
      "（Umi）文件中 ",
      [
        "code",
        "theme"
      ],
      " 字段进行主题配置。",
      [
        "code",
        "theme"
      ],
      " 可以配置为一个对象或文件路径。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token string\">\"theme\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"primary-color\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#1DA57A\"</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "\"theme\": {\n  \"primary-color\": \"#1DA57A\",\n},"
      ]
    ],
    [
      "p",
      "或者 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"
        },
        "一个 js 文件"
      ],
      "："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token string\">\"theme\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"./theme.js\"</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "\"theme\": \"./theme.js\","
      ]
    ],
    [
      "h3",
      "在 create-react-app 中定制主题"
    ],
    [
      "p",
      "参考 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/use-with-create-react-app"
        },
        "在 create-react-app 中使用"
      ],
      " 进行配置即可。"
    ],
    [
      "h3",
      "配置 less 变量文件"
    ],
    [
      "p",
      "另外一种方式是建立一个单独的 ",
      [
        "code",
        "less"
      ],
      " 变量文件，引入这个文件覆盖 ",
      [
        "code",
        "antd.less"
      ],
      " 里的变量。"
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"~antd/dist/antd.less\"</span><span class=\"token punctuation\">;</span></span>   // 引入官方提供的 less 样式入口文件\n<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"your-theme-file.less\"</span><span class=\"token punctuation\">;</span></span>   // 用于覆盖上面定义的变量"
      },
      [
        "code",
        "@import \"~antd/dist/antd.less\";   // 引入官方提供的 less 样式入口文件\n@import \"your-theme-file.less\";   // 用于覆盖上面定义的变量"
      ]
    ],
    [
      "p",
      "注意，这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 ",
      [
        "code",
        "babel-plugin-import"
      ],
      " 的 ",
      [
        "code",
        "style"
      ],
      " 属性一起使用。"
    ],
    [
      "h2",
      "没有生效？"
    ],
    [
      "p",
      "注意样式必须加载 less 格式，一个常见的问题就是引入了多份样式，less 的样式被 css 的样式覆盖了。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "如果你在使用 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/babel-plugin-import"
            },
            "babel-plugin-import"
          ],
          " 的 ",
          [
            "code",
            "style"
          ],
          " 配置来引入样式，需要将配置值从 ",
          [
            "code",
            "'css'"
          ],
          " 改为 ",
          [
            "code",
            "true"
          ],
          "，这样会引入 less 文件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "如果你是通过 ",
          [
            "code",
            "'antd/dist/antd.css'"
          ],
          " 引入样式的，改为 ",
          [
            "code",
            "antd/dist/antd.less"
          ],
          "。"
        ]
      ]
    ],
    [
      "h2",
      "社区教程"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://intoli.com/blog/antd-scss-theme-plugin/"
            },
            "Using Ant Design in Sass-Styled Webpack Projects with ",
            [
              "code",
              "antd-scss-theme-plugin"
            ]
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"
            },
            "How to Customize Ant Design with React & Webpack… the Missing Guide"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"
            },
            "Theming Ant Design with Sass and Webpack"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"
            },
            "Using Sass/Scss with React App (create-react-app)"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"
            },
            "Dynamic Theming in Browser using Ant Design"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 5,
    "title": "定制主题",
    "filename": "docs/react/customize-theme.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Ant-Design-的样式变量",
          "title": "Ant Design 的样式变量"
        },
        "Ant Design 的样式变量"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#定制方式",
          "title": "定制方式"
        },
        "定制方式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#没有生效？",
          "title": "没有生效？"
        },
        "没有生效？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#社区教程",
          "title": "社区教程"
        },
        "社区教程"
      ]
    ]
  ]
};

/***/ })

});