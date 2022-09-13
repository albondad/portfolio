import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 4rem;
        .Skill-icon {
            height: 4rem;

            svg {
                width: 100%;
                height: 100%;
            }
        }

        .Skill-label {
            font-size: 1rem;
            margin-top: 0.5rem;
            text-align: center;
        }
    }
`
