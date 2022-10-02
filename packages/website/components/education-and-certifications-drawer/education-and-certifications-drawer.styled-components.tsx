import styled from 'styled-components'
import { Drawer } from '../drawer'
import { ImageGallery } from '..'

export const StyledDrawer = styled(Drawer)`
    & {
        .education-and-certifications-drawer__image-gallery {
            margin-top: 1.25rem;
        }

        .education-and-certifications-drawer__heading {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            line-height: 1.5em;
        }

        .education-and-certifications-drawer__paragraph {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5em;
        }

        .education-and-certifications-drawer__link {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5em;
            transition: opacity 200ms, transform 200ms;
            display: inline-block;
            margin-top: 1rem;

            :hover {
                transform: scale(1.05);
                opacity: 0.5;
            }
        }
    }
`
