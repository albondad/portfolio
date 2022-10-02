import { Drawer } from '../drawer'
import styled from 'styled-components'

export const StyledDrawer = styled(Drawer)`
    & {
        .work-experience-drawer__image-gallery {
            margin-top: 1.25rem;
        }

        .work-experience-drawer__heading {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            line-height: 1.5em;
        }

        .work-experience-drawer__paragraph {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5em;
        }
    }
`
