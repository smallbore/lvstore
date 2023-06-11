import { Col, Row } from 'antd';
import { SdFooterLegal, SdLogo } from './style';
import { ReactComponent as Logo } from 'images/lvlogo.svg';
export const Footer: React.FC = () => {
  return (
    <>
      <SdFooterLegal>
        <Row gutter={16}>
          <Col span={6}>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
          </Col>
          <Col span={6}>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
          </Col>
          <Col span={6}>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
          </Col>
          <Col span={6}>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
            <p>帮助</p>
          </Col>
        </Row>
      </SdFooterLegal>
      <SdFooterLegal className='footer-logo'>
        <Row gutter={16}>
          <Col span={8}>
            <p>配送至： 中国大陆</p>
          </Col>
          <Col span={16}>
            <p className='footer-right'>
              <span>网站地图</span>
              <span>法律声明和隐私条款</span>
              <span>沪ICP备09069024号</span>
              <span>电子营业执照</span>
              <span>出版物经营许可证</span>
              <span>沪公网安备</span>
              <span>Cookies</span>
            </p>
          </Col>
        </Row>
        <SdLogo>
          <Logo className='logo' />
        </SdLogo>
      </SdFooterLegal>
    </>
  );
};
