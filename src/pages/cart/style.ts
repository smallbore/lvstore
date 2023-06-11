import styled from 'styled-components';
import { rem } from "utils"

export const CartWrapper = styled.div`
  background: #f6f5f3;
  border-bottom: 1px solid #eae8e4;
  .details-hidden {
    display: none;
  }
`;
export const Commodity = styled.div`
  padding: ${rem(30)} ${rem(80)};
  .commodity-head {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    p {
      padding: ${rem(4)} ${rem(20)};
      font-size: ${rem(18)};
    }
  }
  .commodity-title {
    padding: ${rem(30)} 0;
    p {
      font-size: ${rem(28)};
    }
    span {
      font-size: ${rem(22)};
    }
  }
  .commodity-right {
    text-align: right;
    font-size: ${rem(22)};
  }
  .commodity-goods {
    background-color: #fff;
  }
`;

export const CommodityIcon = styled.div`
  background-color: #000;
  padding: ${rem(20)};
`;

export const GoodImage = styled.div`
  border-right: 1px solid #eae8e4;
  padding: ${rem(10)};
  img {
    width: 100%;
    background: url(https://www.louisvuitton.cn/static_lvfront/product-card-gradients/gradient_default.svg) 0 0/cover no-repeat;
  }
`;

export const GoodDetails = styled.div`
  position: relative;
  height: 100%;
`;

export const GoodDetailsHead = styled.div`
  border-bottom: 1px solid #eae8e4;
  padding: ${rem(20)} ${rem(30)};
  span {
    font-size: ${rem(18)};
    padding: ${rem(10)} 0;
  }
  p {
    font-weight: bold;
    font-size: ${rem(24)};
    padding: ${rem(10)} 0;
  }
`;

export const GoodDetailsContent = styled.div`
  padding: ${rem(20)} ${rem(30)};
  .details-title {
    font-size: ${rem(20)};
    padding: ${rem(10)} 0;
  }
  .details-right {
    text-align: right;
    font-size: ${rem(16)};
  }
`;

export const GoodDetailsButtom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid #eae8e4;
  text-align: center;
  font-size: ${rem(22)};
  .details-see {
    border-right: 1px solid #eae8e4;
  }
  button {
    cursor: pointer;
    padding: 0;
    height: ${rem(70)};
    font-size: ${rem(22)};
    line-height: 1;
  }
  .details-number {
    position: absolute;
    left: 0;
    top: -${rem(70)};
    width: 100%;
    text-align: left;
    padding: 0 ${rem(30)};
    .details-right {
      font-weight: bold;
      font-size: ${rem(24)};
      text-align: right;
    }
  }
`;

export const CommodityButtom = styled.div`
  text-align: right;
  padding: ${rem(30)} 0;
  button {
    cursor: pointer;
    padding: 0;
    height: ${rem(70)};
    font-size: ${rem(22)};
    line-height: 1;
    background-color: #333;
    color: #fff;
    width: ${rem(250)};
  }
`;

export const CartDdtails = styled.div`
  position: relative;
  height: 100%;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  .ant-list-item-meta-title{
    color: ${props => props.theme.color};
  }
`;

export const CartCost = styled.div`
  padding: ${rem(50)} ${rem(50)} ${rem(20)};
  border-bottom: 1px solid #eae8e4;
  .cartcost-title {
    font-size: ${rem(22)};
    padding: ${rem(10)} 0;
  }
  .cartcost-right {
    text-align: right;
  }
  .cartcost-init {
    margin-top: ${rem(10)};
    font-weight: bold;
    font-size: ${rem(24)};
  }
`;

export const CartOperate = styled.div`
  padding: 0 ${rem(50)};
`;
