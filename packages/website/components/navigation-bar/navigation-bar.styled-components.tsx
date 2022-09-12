import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .NavigationBar-constrainedContent {
            align-items: center;
            border-radius: 0 0 0.5rem 0.5rem;
            display: flex;
            height: 4rem;
        }

        .NavigationBar-logo {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.5em;
            margin-left: auto;
            margin-right: auto;

            @media screen and (min-width: ${(props) =>
                    props.theme.smallBreakpoint}) {
                margin-left: 0;
            }
        }

        .NavigationBar-links {
            display: flex;
            gap: 3rem;
            margin-left: auto;

            .NavigationBar-item {
                cursor: pointer;
                font-size: 1rem;
                line-height: 1.5em;
            }

            .NavigationBar-item:hover {
                opacity: 0.5;
            }
        }
    }
`
