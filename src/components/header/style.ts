import styled from 'styled-components';
import { rem } from "utils"

export const SdHeader = styled.div`
  position: relative;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  height: 90px;
  font-size: 14px;
  border-bottom: 1px solid #eae8e4;
  .header-row {
    height: 90px;
    padding: 0 ${rem(15)};
  }
  .header-icon {
    margin:0 ${rem(15)} 0 ${rem(30)};
  }
  .header-text {
    margin-right: ${rem(30)};
  }
  .header-badge {
    margin-right: ${rem(30)};
    cursor: pointer;
  }
  @media (max-width: 750px) {
    .header-text {
      display: none;
    }
    .mobile-hidden {
      display: none;
    }
  }
`;
export const SdHeaderLogo =  styled.div`
  height: 90px;
  line-height: 90px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  .header-logo {
    width: 228px;
    height: 90px;
  }
`;