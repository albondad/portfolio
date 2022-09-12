import '../styles/globals.css'
import { AppPropsWithLayoutType } from '../types'
import { ReactNode } from 'react'
import { StyledComponentsThemeProvider } from '../components'

function MyApp({ Component, pageProps }: AppPropsWithLayoutType) {
    const getLayout = Component.getLayout || ((page: ReactNode) => page)

    return (
        <StyledComponentsThemeProvider>
            {getLayout(<Component {...pageProps} />)}
        </StyledComponentsThemeProvider>
    )
}

export default MyApp
