import { ModalTarget, ModalBackdrop, ModalDialog, ModalTitle, ModalClose, ModalBody } from './style'
import { CloseOutlined } from '@ant-design/icons';
import { Col, Row, Button } from 'antd';
import { GoodImage, GoodDetails, GoodDetailsContent } from 'pages/cart/style'
import { useState, useEffect } from 'react';
/**
 * visible 是否显示;
 * modalTitle 标题;
 * modalClose 关闭;
 */
interface IModal {
  visible?: boolean,
  modalTitle?: string,
  modalClose?: () => void,
}
export const SdModal = (props: IModal) => {
  const [open, setOpen] = useState(false)
  const [move, setMove] = useState('outmove')
  const {
    visible = false,
    modalTitle = '删除这款产品',
    modalClose = () => {}
  } = props;
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      setOpen(visible)
      setTimeout(() => {
        setMove('inmove')
      }, 10)
    } else {
      document.body.style.overflow = 'auto';
      setMove('outmove')
      setTimeout(() => {
        setOpen(visible)
      }, 500)
    }
  }, [visible])
  return (
    <ModalTarget className={open? 'show': 'hidden'}>
      <ModalBackdrop className={move} onClick={() => modalClose()} />
      <ModalDialog className={move}>
        <ModalTitle>
          <Row align="middle">
            <Col flex="auto" className='modal-title'>{modalTitle}</Col>
            <ModalClose onClick={() => modalClose()}><CloseOutlined /></ModalClose>
          </Row>
        </ModalTitle>
        <ModalBody>
          <div className="modalbody-des">您是否确认从“我的购物袋”中删除这款产品？</div>
          <Row align="middle">
              <Col span={6}>
                <GoodImage className="modal-good_image">
                  <img
                    src="https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/louis-vuitton--M23209_PM2_Front%20view.png?wid=656&hei=656"
                    alt=""
                  />
                </GoodImage>
              </Col>
              <Col span={18}>
                <GoodDetails>
                  <GoodDetailsContent>
                    <Row align="middle" className="modalbody-title">
                      <Col span={24}>
                        HORIZON 四轮拉杆箱，50 厘米
                      </Col>
                    </Row>
                    <Row align="middle" className="modalbody-title">
                      <Col span={24}>
                        ¥48,200
                      </Col>
                    </Row>
                  </GoodDetailsContent>
                </GoodDetails>
              </Col>
            </Row>
            <Row align="middle" gutter={15} className='modalbody-buttom'>
              <Col sm={24} xs={24} md={12}><Button block type="text" className='buttom-close' onClick={() => modalClose()}>取消</Button></Col>
              <Col sm={24} xs={24} md={12}><Button block type="text" className='buttom-delete' onClick={() => modalClose()}>删除</Button></Col>
            </Row>
        </ModalBody>
      </ModalDialog>
    </ModalTarget>
  )
}
