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
      transform: translateY(0);
      opacity: 1;
    }
  }
  &.hidden {
    display: none;
    .dialog-move {
      transform: translateY(100%);
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
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #FFF;
  width: 600px;
  height: 400px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease;
  &.inmove {
    transform: translateY(0);
    opacity: 1;
  }
  &.outmove {
    transform: translateY(100%);
    opacity: 0;
  }
  @media (max-width: 750px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
    margin: initial;
    top: initial;
    height: initial;
    .buttom-delete {
      margin-top: 10px;
    }
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
`;
