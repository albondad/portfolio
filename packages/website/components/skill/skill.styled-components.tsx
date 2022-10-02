import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 4rem;

        .skill__icon {
            background-color: #000000;
            padding: 1rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;

            svg {
                width: 100%;
                height: 100%;
                height: 3rem;
                width: 3rem;
                fill: #ffffff;
            }
        }

        .skill__label {
            font-size: 1rem;
            margin-top: 0.5rem;
            text-align: center;
        }
    }
`
