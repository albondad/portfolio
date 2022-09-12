import { ThemeProvider } from 'styled-components'
import { ComponentProps } from 'react'

const defaultTheme = {
    smallBreakpoint: '36rem',
    mediumBreakpoint: '48rem',
    largeBreakpoint: '62rem',
    extraLargeBreakpoint: '75rem',
}

export type StyledComponentsThemeProviderPropsType = Omit<
    ComponentProps<typeof ThemeProvider>,
    'theme'
> & {
    theme?: ComponentProps<typeof ThemeProvider>['theme']
}

export const StyledComponentsThemeProvider = ({
    children: childrenProp,
    theme: themeProp = defaultTheme,
    ...restProps
}: StyledComponentsThemeProviderPropsType) => {
    return (
        <ThemeProvider theme={themeProp} {...restProps}>
            {childrenProp}
        </ThemeProvider>
    )
}
