import styled from 'styled-components';

export const ModalTarget = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  &.show {
    display: block;
    .dialog-move {
      transform: translateX(0);
      opacity: 1;
    }
  }
  &.hidden {
    display: none;
    .dialog-move {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.8);
  transition: all 0.5s ease;
  &.inmove {
    opacity: 1;
  }
  &.outmove {
    opacity: 0;
  }
`;
export const ModalDialog = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #FFF;
  width: 450px;
  height: 100vh;
  overflow: hidden;
  transition: all 0.5s ease;
  &.inmove {
    transform: translateX(0);
    opacity: 1;
  }
  &.outmove {
    transform: translateX(100%);
    opacity: 0;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const ModalTitle = styled.div`
  border-bottom: 1px solid #eae8e4;
  .modal-title {
    font-size: 18px;
    padding-left: 50px;
    font-weight: bold;
  }
`
export const ModalClose = styled.div`
  border-left: 1px solid #eae8e4;
  padding: 25px;
  &:hover {
    background-color: #eae8e4;
  }
`;

export const ModalBody = styled.div`
  padding: 30px 50px;
  .modalbody-des {
    font-size: 14px;
    padding: 10px 0 30px;
  }
  .modalbody-ul {
    font-size: 14px;
    ul {
      padding: 20px 10px 10px 12px;
    }
    li {
      padding: 4px 0;
    }
  }
  .modal-good_row {
    border-bottom: 1px solid #eae8e4;
    padding-bottom: 20px;
  }
  .modal-good_image {
    border: none;
  }
  .modalbody-title {
    font-size: 14px;
    padding: 4px 0;
  }
  .modalbody-buttom {
    margin-top: 30px;
    .buttom-delete {
      cursor: pointer;
      padding: 0;
      height: 45px;
      font-size: 15px;
      line-height: 1;
      background-color: #333;
      color: #fff;
      &:hover {
        background-color: #ddd;
        color: #333;
      }
    }
    .buttom-close {
      cursor: pointer;
      padding: 0;
      height: 45px;
      font-size: 15px;
      line-height: 1;
      border: 1px solid #333;
      color: #333;
      &:hover {
        background-color: #ddd;
        border-color: transparent;
        color: #333;
      }
    }
  }
  .cart-sum {
    padding-top: 20px;
    font-size: 16px;
  }
  .cart-sum_right {
    text-align: right;
    font-size: 14px;
  }
`;

export const SdLayout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export const SdContent = styled.div`
  flex: 1;
  overflow: auto;
`;

export const SdFooter = styled.div`
  padding: 20px 30px;
  box-shadow: 0 -4px 8px 0 rgba(0,0,0,.04), 0 -8px 16px 0 rgba(0,0,0,.04);
  .buttom-delete {
      cursor: pointer;
      padding: 0;
      height: 45px;
      font-size: 15px;
      line-height: 1;
      background-color: #333;
      color: #fff;
      &:hover {
        background-color: #ddd;
        color: #333;
      }
    }
`;
