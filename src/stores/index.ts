import { mobxCombine } from 'seasoning';
import App from './app';
import User from './user';

class Stores {
  app = new App();
  user = new User();
}

/**
 * 全局状态
 */
export const stores = new Stores();

/**
 * 生成关联器
 */
export const { combine, combinePage } = mobxCombine(stores);
