import { Col, Row, InputNumber, Button, List } from 'antd';
import { CloseCircleOutlined, EyeOutlined, LoginOutlined } from '@ant-design/icons';
import {
  CartWrapper,
  Commodity,
  CommodityIcon,
  GoodImage,
  GoodDetails,
  GoodDetailsHead,
  GoodDetailsContent,
  GoodDetailsButtom,
  CommodityButtom,
  CartDdtails,
  CartCost,
  CartOperate
} from './style';
import { ReactComponent as LvIcon } from 'images/lvicon.svg';
import { listdata } from './const';
import { SdModal } from 'components/modal';
import { SdModalTarget } from 'components/modaltarget';
import { useState, useEffect } from 'react';

const Page = () => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [TargetModal, setTargetModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(1000);
  const resizeUpdate = (e: any) => {
    const w = e.target.innerWidth;
    setInnerWidth(w);
  }
  useEffect(() => {
    const w = window.innerWidth
    setInnerWidth(w);
    window.addEventListener('resize', resizeUpdate)
    return () => {
      window.removeEventListener('resize', resizeUpdate)
    }
  }, [])
  return (
    <CartWrapper>
      <Row>
        <Col span={innerWidth > 1000 ? 16 : 24}>
          <Commodity>
            <Row align="middle" className="commodity-head">
              <CommodityIcon>
                <LvIcon></LvIcon>
              </CommodityIcon>
              <Col flex="auto">
                <p>中国大陆地区尊享顺丰免费配送</p>
                <p>相关文章</p>
              </Col>
            </Row>
            <Row align="middle" className="commodity-title">
              <Col span={12}>
                <p>
                  我的购物袋<span>(1)</span>
                </p>
              </Col>
              <Col span={12} className="commodity-right">
                继续选购
              </Col>
            </Row>
            <Row className="commodity-goods">
              <Col span={12}>
                <GoodImage>
                  <img
                    src="https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/louis-vuitton--M23209_PM2_Front%20view.png?wid=656&hei=656"
                    alt=""
                  />
                </GoodImage>
              </Col>
              <Col span={12}>
                <GoodDetails>
                  <GoodDetailsHead>
                    <span>M23209</span>
                    <p>HORIZON 四轮拉杆箱，50 厘米</p>
                  </GoodDetailsHead>
                  <GoodDetailsContent>
                    <Row align="middle" className="details-title">
                      <Col span={12}>
                        颜色
                      </Col>
                      <Col span={12} className="details-right">
                        Brown
                      </Col>
                    </Row>
                    <Row align="middle" className="details-title">
                      <Col span={12}>
                        材料
                      </Col>
                      <Col span={12} className="details-right">
                        Monogram Canvas
                      </Col>
                    </Row>
                  </GoodDetailsContent>
                  <GoodDetailsButtom>
                    <Row align="middle" className="details-title details-number">
                      <Col span={12}>
                        <InputNumber min={0} max={10} defaultValue={1} />
                      </Col>
                      <Col span={12} className="details-right">
                        ¥48,200
                      </Col>
                    </Row>
                    <Row align="middle">
                      <Col span={12} className='details-see' onClick={() => setTargetModal(true)}>
                        <Button block type="text" icon={<EyeOutlined />}>查看详情</Button>
                      </Col>
                      <Col span={12} className='details-del' onClick={() => setModalVisible(true)}>
                        <Button block type="text" icon={<CloseCircleOutlined />}>删除</Button>
                      </Col>
                    </Row>
                  </GoodDetailsButtom>
                </GoodDetails>
              </Col>
            </Row>
            <CommodityButtom>
              <Button type="text">继续付款</Button>
            </CommodityButtom>
          </Commodity>
        </Col>
        <Col span={8} className={innerWidth > 1000? '' : 'details-hidden'}>
          <CartDdtails>
            <CartCost>
              <Row align="middle" className="cartcost-title">
                <Col span={12}>
                  小计
                </Col>
                <Col span={12} className="cartcost-right">
                  ¥48,200
                </Col>
              </Row>
              <Row align="middle" className="cartcost-title">
                <Col span={12}>
                运费
                </Col>
                <Col span={12} className="cartcost-right">
                  ¥0
                </Col>
              </Row>
              <Row align="middle" className="cartcost-title cartcost-init">
                <Col span={12}>
                  总金额
                </Col>
                <Col span={12} className="cartcost-right">
                  ¥48,200
                </Col>
              </Row>
              <CommodityButtom>
                <Button block type="text">继续付款</Button>
              </CommodityButtom>
            </CartCost>
            <CartOperate>
            <List
              itemLayout="horizontal"
              size="large"
              dataSource={listdata}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<LoginOutlined />}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
            </CartOperate>
          </CartDdtails>
        </Col>
      </Row>
      <SdModal visible={ModalVisible} modalClose={() => setModalVisible(false)} />
      <SdModalTarget visible={TargetModal} modalTitle="查看详情" modalClose={() => setTargetModal(false)} />
    </CartWrapper>
  );
};

export default Page;
