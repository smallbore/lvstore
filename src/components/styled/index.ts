import { Button, Switch } from 'antd';
import styled from 'styled-components';
/**
 * 支持重构antd样式库。
 */
const style = {
  Button: styled(Button)`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
  `,
  Switch: styled(Switch)`
    background-color: ${props => props.theme.switchBg};
  `
}

export default style;