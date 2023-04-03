import { ThemeProvider } from 'styled-components'

type butThemeType = {
    colors: {
        LightRed: string
    }
    border: {
        default: string
    }
    borderRadius: {
        default: string
    }
}
const butTheme: butThemeType = {
    colors: {
        LightRed: '#FFC0CB',
    },
    border: {
        default: '1px solid #fff',
    },
    borderRadius: {
        default: '10px',
    },
}

const ButtonTheme = ({ children }: { children: React.ReactNode }) => {
    ;<ThemeProvider theme={butTheme}>{children}</ThemeProvider>
}
export default ButtonTheme
