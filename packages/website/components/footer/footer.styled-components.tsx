import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        background-color: #000000;

        .footer__constrained-content {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-bottom: 2rem;
            padding-top: 2rem;

            @media screen and (min-width: ${(props) =>
                    props.theme.smallBreakpoint}) {
                flex-direction: row;
                gap: 0;
            }

            .footer__heading {
                color: #ffffff;
                font-size: 1.5rem;
            }

            .footer__actions {
                @media screen and (min-width: ${(props) =>
                        props.theme.smallBreakpoint}) {
                    margin-left: auto;
                }
            }
        }
    }
`
