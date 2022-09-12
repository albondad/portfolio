import { NextPageWithLayoutType } from '.'
import type { AppProps } from 'next/app'

export type AppPropsWithLayoutType = AppProps & {
    Component: NextPageWithLayoutType
}
