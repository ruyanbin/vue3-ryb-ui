import DefaultTheme from 'vitepress/theme';
import rui from 'r-ui';
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(rui);
  }
};
