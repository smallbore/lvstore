/***
 * 设计稿以750为准
 * px转rem
 */
export function rem(px: number) {
  let roundValue = (px / 75).toFixed(2);
  return roundValue + 'rem';
}

/**
 * 判断当前环境是否是pc端
 */
export function isPc() {
  if (navigator) {
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
}
