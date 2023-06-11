import {
  ModalTarget,
  ModalBackdrop,
  ModalDialog,
  ModalTitle,
  ModalClose,
  ModalBody,
  SdLayout,
  SdContent,
  SdFooter,
} from './style';
import { CloseOutlined } from '@ant-design/icons';
import { Col, Row, Button } from 'antd';
import { GoodImage, GoodDetails, GoodDetailsContent } from 'pages/cart/style';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/**
 * visible 是否显示;
 * modalTitle 标题;
 * type 支持类型;
 * modalClose 关闭;
 */
interface IModal {
  visible?: boolean;
  modalTitle?: string;
  type?: string;
  modalClose?: () => void;
}
export const SdModalTarget = (props: IModal) => {
  const [open, setOpen] = useState(false);
  const [move, setMove] = useState('outmove');
  const { visible = false, modalTitle = '删除这款产品', type = 'details', modalClose = () => {} } = props;
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      setOpen(visible);
      setTimeout(() => {
        setMove('inmove');
      }, 10);
    } else {
      document.body.style.overflow = 'auto';
      setMove('outmove');
      setTimeout(() => {
        setOpen(visible);
      }, 500);
    }
  }, [visible]);
  return (
    <ModalTarget className={open ? 'show' : 'hidden'}>
      <ModalBackdrop className={move} onClick={() => modalClose()} />
      <ModalDialog className={move}>
        <SdLayout>
          <ModalTitle>
            <Row align="middle">
              <Col flex="auto" className="modal-title">
                {modalTitle}
              </Col>
              <ModalClose onClick={() => modalClose()}>
                <CloseOutlined />
              </ModalClose>
            </Row>
          </ModalTitle>
          <SdContent>
            <ModalBody>
              <Row align="middle" className="modal-good_row">
                <Col span={8}>
                  <GoodImage className="modal-good_image">
                    <img
                      src="https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/louis-vuitton--M23209_PM2_Front%20view.png?wid=656&hei=656"
                      alt=""
                    />
                  </GoodImage>
                </Col>
                <Col span={16}>
                  <GoodDetails>
                    <GoodDetailsContent>
                      <Row align="middle" className="modalbody-title">
                        <Col span={24}>HORIZON 四轮拉杆箱，50 厘米</Col>
                      </Row>
                      <Row align="middle" className="modalbody-title">
                        <Col span={24}>¥48,200</Col>
                      </Row>
                    </GoodDetailsContent>
                  </GoodDetails>
                </Col>
              </Row>
              { type === 'details' ? (
                <div className='modalbody-ul'>
                  <ul>
                    <li>随身上机行李尺寸</li>
                    <li>容积：28 升</li>
                    <li>轻盈帆布</li>
                    <li>网格内衬</li>
                    <li>牛皮革饰边</li>
                    <li>铝制金属件</li>
                    <li>大号外置拉杆</li>
                    <li>平整内层</li>
                    <li>皮革包角</li>
                    <li>带锁拉链开合</li>
                    <li>紧凑型双滑轮</li>
                    <li>新款名牌</li>
                    <li>
                      如对路易威登 Horizon 系列有任何疑问，请参阅
                      <a href="https://www.louisvuitton.com/documents/Travel/Leaflet_Horizon">
                        <strong>使用说明</strong>
                      </a>
                      <p></p>
                    </li>
                  </ul>
                  <div>
                    本品产地为法国、西班牙、意大利和美国之一。网站中的信息可能存在技术失准、色差、尺码误差或因产品改良，生产批次等因素造成的细节误差，网站展示的产品图片可能与实际外观不一致。如有相关问题，请致电顾客服务中心。
                  </div>
                </div>
              ) : (
                <Row className='cart-sum'>
                  <Col span={12}>总价</Col>
                  <Col span={12} className='cart-sum_right'>¥48,200</Col>
                </Row>
              )}
              
              <Row align="middle" gutter={15} className="modalbody-buttom">
                {type !== 'details' && (
                  <Col span={24}><Link to="/cart"><Button block type="text" className='buttom-delete' onClick={() => modalClose()}>立即结账</Button></Link></Col>
                )}
              </Row>
            </ModalBody>
          </SdContent>
          { type === 'details' && (
            <SdFooter>
              <Button block type="text" className='buttom-delete' onClick={() => modalClose()}>查看产品页</Button>
            </SdFooter>
          )}
        </SdLayout>
      </ModalDialog>
    </ModalTarget>
  );
};
