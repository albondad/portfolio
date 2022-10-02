import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .navigation-bar__errorMessage {
            background-color: #ff312e;
            color: #ffffff;
            padding: 1rem;
            text-align: center;
        }
        .navigation-bar__constrained-content {
            align-items: center;
            border-radius: 0 0 0.5rem 0.5rem;
            display: flex;
            height: 4rem;
        }

        .navigation-bar__logo {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.5em;
            margin-right: auto;
        }

        .navigation-bar__menu {
            display: block;
            @media screen and (min-width: ${(props) =>
                    props.theme.mediumBreakpoint}) {
                display: none;
            }
        }

        .navigation-bar__links {
            display: none;
            gap: 3rem;
            margin-left: auto;

            @media screen and (min-width: ${(props) =>
                    props.theme.mediumBreakpoint}) {
                display: flex;
            }

            .navigation-bar__item {
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
