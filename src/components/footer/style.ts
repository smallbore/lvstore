import styled from 'styled-components';
import { rem } from "utils"

export const SdFooterLegal  = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  padding: ${rem(50)};
  border-bottom: 1px solid #eae8e4;
  p {
    padding: ${rem(10)} 0;
    font-size: ${rem(18)};
  }
  span {
    padding: 0 ${rem(10)};
  }
  &.footer-logo {
    padding-bottom: 0;
  }
  .footer-right {
    text-align: right;
  }
`;

export const SdLogo =  styled.div`
  height: 90px;
  line-height: 90px;
  text-align: center;
  .header-logo {
    width: 228px;
    height: 90px;
  }
`;