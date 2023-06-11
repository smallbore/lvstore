import { combine } from 'stores';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { ThemeProvider } from 'styled-components';
import { THEME_ENUM } from './const';
/**
 * 主体布局
 */
export const Layout: React.FC = combine(({ stores, children }) => {
    const { app } = stores;
    const { theme } = app;
    return (
        <ThemeProvider theme={THEME_ENUM[theme]}>
            <Header></Header>
            {children}
            <Footer></Footer>
        </ThemeProvider>
    )
})