# 告示栏

1. 告示栏的启用

   在docusaurus.config.js的themeConfig中加入以下代码

   ```js
         announcementBar: {
           id: 'announcementBar-3',
           content: 'Welcome to my notebook!',
           isCloseable: false,
         },
   ```

2. 告示栏的背景个性化

   在custom.css中加入以下代码

   ```css
   div[class^='announcementBar_'] {
     background: repeating-linear-gradient(
       -35deg,
       var(--ifm-color-primary-lighter),
       var(--ifm-color-primary-lighter) 20px,
       var(--ifm-color-primary-lightest) 10px,
       var(--ifm-color-primary-lightest) 40px
     );
     font-weight: 700;
   }
   ```
