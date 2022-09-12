import { IndexLayout } from '../components'
import { NextPageWithLayoutType } from '../types'

const Page: NextPageWithLayoutType = () => {
    return null
}

Page.getLayout = (page) => {
    return <IndexLayout>{page}</IndexLayout>
}

export default Page
