import { Fragment } from 'react'
import { IndexLayout } from '../components'
import { NextPageWithLayoutType } from '../types'

const IndexPage: NextPageWithLayoutType = () => {
    return null
}

IndexPage.getLayout = (page) => {
    return <IndexLayout>{page}</IndexLayout>
}

export default IndexPage
