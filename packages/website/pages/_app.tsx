import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StyledComponentsThemeProvider } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyledComponentsThemeProvider>
            <Component {...pageProps} />
        </StyledComponentsThemeProvider>
    )
}

export default MyApp
