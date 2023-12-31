import { Link } from 'react-router-dom';
import style from './style.module.less';
import { ReactComponent as Logo } from 'images/logo.svg';
/**
 * user
 * 框架搭建调试页面
 */
const Page = () => {
  return (
    <div className={`page ${style.page}`}>
      <div className={`fill column-center ${style.demo}`}>
        <h1>User</h1>
        <Logo className={style.logo} />
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
};

export default Page;
