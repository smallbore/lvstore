import { makeAutoObservable } from 'mobx';

interface IApp {
  theme: string;
}
/**
 * 子状态
 */
export default class appStore implements IApp {
  /**
   * 状态值
   */
  theme = 'light'; // 主题色

  constructor() {
    // 当前类转为状态类
    makeAutoObservable(this);
  }

  /**
   * 动作
   */
  action = (state: string) => {
    this.theme = state;
  };
}