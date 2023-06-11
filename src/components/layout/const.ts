// 主题
interface ITheme {
  color: string,
  background: string,
  border: string,
  switchBg: string
}
export const THEME_ENUM:{ [key:string] : ITheme} = {
  light: {
    color: "#333",
    background: "#fff",
    border: "#ccc",
    switchBg: '#eee'
  },
  dark: {
    color: "#fff",
    background: "#333",
    border: "#f1f1f1",
    switchBg: '#333'
  }
};