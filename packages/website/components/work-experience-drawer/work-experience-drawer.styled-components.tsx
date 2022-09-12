import styled from 'styled-components'
import { Drawer } from '../drawer'
import { ImageGallery } from '..'

export const StyledDrawer = styled(Drawer)`
    & {
        .WorkExperienceDrawer-imageGallery {
            margin-top: 1.25rem;
        }

        .WorkExperienceDrawer-heading {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            line-height: 1.5em;
        }

        .WorkExperienceDrawer-paragraph {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5em;
        }
    }
`
