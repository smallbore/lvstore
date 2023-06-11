import { combine } from 'stores';
import { Link } from 'react-router-dom';
import { Col, Row, Badge } from 'antd';
import { MenuOutlined, SearchOutlined, ShoppingOutlined, BulbOutlined } from '@ant-design/icons';
import { SdHeader, SdHeaderLogo } from './style';
import { ReactComponent as Logo } from 'images/lvlogo.svg';
import { THEME_DAEK, THEME_LIGHT} from 'constant';
import sd from 'components/styled';
import { SdModalTarget } from 'components/modaltarget';
import { useState } from 'react';

export const Header: React.FC = combine(({ stores }) => {
  const [TargetModal, setTargetModal] = useState(false);
    const { app } = stores;
    const { theme, action } = app;
    return (
      <SdHeader>
        <SdHeaderLogo><Link to="/"><Logo className='header-logo' /></Link></SdHeaderLogo>
        <Row className='header-row' align="middle">
          <Col flex="none"><MenuOutlined className='header-icon' /><span className='mobile-hidden'>目录</span></Col>
          <Col flex="none"><SearchOutlined className='header-icon' /><span className='mobile-hidden'>搜索</span></Col>
          <Col flex="none">
            <sd.Switch
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbOutlined />}
              defaultChecked={theme === THEME_DAEK}
              className='header-icon'
              onChange={() => action(theme === THEME_DAEK? THEME_LIGHT : THEME_DAEK)}
            />  
          </Col>
          <Col flex="auto"></Col>
          <Col flex="none" className='header-text'><Link to="/">我的愿望录</Link></Col>
          <Col flex="none" className='header-text'><Link to="/cart">我的路易威登</Link></Col>
          <Col flex="none" className='header-badge' onClick={() => setTargetModal(true)}>
            <Badge count={1} size="small" color={theme === THEME_DAEK? '#ccc' : '#333'}>
              <ShoppingOutlined />
            </Badge>
          </Col>
        </Row>
        <SdModalTarget visible={TargetModal} modalTitle="你的购物袋" type="cart" modalClose={() => setTargetModal(false)} />
      </SdHeader>
    )
})
