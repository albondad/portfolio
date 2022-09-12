import { ReactNode, ReactElement } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayoutType<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}
