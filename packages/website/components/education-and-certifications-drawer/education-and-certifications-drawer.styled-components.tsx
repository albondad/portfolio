import styled from 'styled-components'
import { Drawer } from '../drawer'
import { ImageGallery } from '..'

export const StyledDrawer = styled(Drawer)`
    & {
        .EducationAndExperienceCertifications-imageGallery {
            margin-top: 1.25rem;
        }

        .EducationAndExperienceCertifications-heading {
            font-size: 1.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            line-height: 1.5em;
        }

        .EducationAndExperienceCertifications-paragraph {
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5em;
        }

        .EducationAndExperienceCertifications-link {
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
