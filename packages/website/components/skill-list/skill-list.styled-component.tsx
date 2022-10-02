import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & .skill-list__constrained-content {
        .skill-list__heading {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.5em;
        }

        .skill-list__list {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin-top: 1.25rem;
        }
    }
`
