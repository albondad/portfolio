import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .NavigationDrawer-overlay {
            background-color: #000000;
            cursor: pointer;
            height: 100vh;
            left: 0;
            opacity: 0.5;
            position: fixed;
            top: 0;
            transition: opacity 250ms;
            width: 100vw;
            z-index: 10;

            :hover {
                opacity: 0.25;
            }
        }

        .NavigationDrawer-mainContent {
            background-color: #ffffff;
            height: 100vh;
            left: 0;
            top: 0;
            overflow: auto;
            position: fixed;
            width: 90vw;
            z-index: 10;
            border-radius: 0 0.5rem 0.5rem 0;

            .NavigationDrawer-constrainedContent {
                margin-left: auto;
                margin-right: auto;
                padding: 2rem;
                width: 100%;

                .NavigationDrawer-header {
                    display: flex;
                    justify-content: flex-end;

                    .NavigationDrawer-close {
                        transition: 200ms;

                        :hover {
                            transform: scale(1.1);
                        }
                    }
                }

                .NavigationDrawer-body {
                    .NavigationDrawer-link {
                        display: block;
                        font-size: 1.125rem;
                        line-height: 1.5em;
                        padding: 1rem 0;
                    }
                }
            }
        }
    }

    &.NavigationDrawer-isOpenFalse {
        display: none;
    }

    &.NavigationDrawer-isOpenTrue {
        display: block;

        @media screen and (min-width: ${(props) =>
                props.theme.mediumBreakpoint}) {
            display: none;
        }
    }
`
