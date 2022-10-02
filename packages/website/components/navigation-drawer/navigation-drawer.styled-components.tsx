import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .navigation-drawer__overlay {
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

        .navigation-drawer__main-content {
            background-color: #ffffff;
            height: 100vh;
            left: 0;
            top: 0;
            overflow: auto;
            position: fixed;
            width: 90vw;
            z-index: 10;
            border-radius: 0 0.5rem 0.5rem 0;

            .navigation-drawer__constrained-content {
                margin-left: auto;
                margin-right: auto;
                padding: 2rem;
                width: 100%;

                .navigation-drawer__header {
                    display: flex;
                    justify-content: flex-end;

                    .navigation-drawer__close {
                        transition: 200ms;

                        :hover {
                            transform: scale(1.1);
                        }
                    }
                }

                .navigation-drawer__body {
                    .navigation-drawer__link {
                        display: block;
                        font-size: 1.125rem;
                        line-height: 1.5em;
                        padding: 1rem 0;
                    }
                }
            }
        }
    }

    &.navigation-drawer__is-open-false {
        display: none;
    }

    &.navigation-drawer__is-open-true {
        display: block;

        @media screen and (min-width: ${(props) =>
                props.theme.mediumBreakpoint}) {
            display: none;
        }
    }
`
