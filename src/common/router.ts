import { RouterPages } from 'seasoning';
import { TRouter as TRouterSource } from 'seasoning/es/router-pages';

/**
 * 默认标题
 */
export const defaultTitle = 'React-App';

/**
 * 写入标题
 */
export const setTitle = (title = defaultTitle) => {
  // 修改当前页面标题
  window.document.title = title;
  // 在支付宝 webview 内部调用标题写入
  window.AlipayJSBridge?.call('setTitle', { title });
};

export type TRouter = TRouterSource & {
  pagePath?: string; // 页面路径，基于 src/pages 目录
  title?: string; // 页面标题
};

/**
 * 路由配置
 */
const routers: TRouter[] = [
  { path: '/', pagePath: '/home', title: 'LV路易威登中国官网-LOUIS VUITTON官方旗舰店中文版 | LV官网_LV官方网站' },
  { path: '/user', title: '用户页' },
  { path: '/cart', title: 'Shopping Cart' },
];

/**
 * 路由页面组件
 */
export const { history, Pages, Router } = new RouterPages({
  routers: routers.map((i) => {
    let { path, pagePath = path, component } = i;
    if (!component) component = require('../pages' + pagePath).default as React.ComponentType<any>;
    return { ...i, component };
  }),
  // 监听路由变动
  listen: ({ title }) => {
    setTitle(title);
  },
});
