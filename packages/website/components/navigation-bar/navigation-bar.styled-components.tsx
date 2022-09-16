import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .NavigationBar-errorMessage {
            background-color: #ff312e;
            color: #ffffff;
            padding: 1rem;
            text-align: center;
        }
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
            margin-right: auto;
        }

        .NavigationBar-menu {
            display: block;
            @media screen and (min-width: ${(props) =>
                    props.theme.mediumBreakpoint}) {
                display: none;
            }
        }

        .NavigationBar-links {
            display: none;
            gap: 3rem;
            margin-left: auto;

            @media screen and (min-width: ${(props) =>
                    props.theme.mediumBreakpoint}) {
                display: flex;
            }

            .NavigationBar-item {
                cursor: pointer;
                font-size: 1rem;
                line-height: 1.5em;
                transition: transform 200ms;

                :hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`
