import styled from 'styled-components';
import { rem } from "utils"

export const PushWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  .video-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SdVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PushControl = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: ${rem(50)};
  width: 100%;
  z-index: 1;
  text-align: center;
`;
export const PushText = styled.div`
  font-size: ${rem(40)};
  color: #fff;
`;

export const PushBtn = styled.div`
  text-align: center;
  .push-button {
    margin: ${rem(30)} ${rem(20)} 0 0;
    padding: 0;
    width: ${rem(300)};
    height: ${rem(70)};
    font-size: ${rem(28)};
    line-height: 1;
  }
`;