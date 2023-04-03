import { ThemeProvider } from 'styled-components'

type CommonTheme = {
    colors: {
        Black: string
        Navy: string
        White: string
        LightGray: string
        DarkGray: string
    }
    fonts: string[]
    fontSizes: {
        small: string
    }
}
const theme: CommonTheme = {
    colors: {
        Black: '#000000',
        Navy: '#0a192f',
        White: '#ffffff',
        LightGray: '#8d99ae',
        DarkGray: '#2b2d42',
    },

    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '0.8rem',
    },
}

const Theme = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
