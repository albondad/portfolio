import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & .Card-image {
        filter: saturate(0.25);
        cursor: pointer;
        background-color: #eeeeee;
        border-radius: 0.5rem;
        overflow: hidden;
        padding-top: 56.25%;
        position: relative;
        transition: transform 0.125s, filter 0.125s;

        :hover {
            transform: scale(1.025);
            filter: saturate(1);
        }
    }

    & .Card-heading {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5em;
        margin-top: 0.75rem;
    }

    & .Card-details {
        font-size: 1rem;
        line-height: 1.5em;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
    }
`
