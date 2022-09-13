import styled from 'styled-components'
import { Box } from '..'

export const StyledBox = styled(Box)`
    & {
        .Drawer-overlay {
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

        .Drawer-mainContent {
            background-color: #ffffff;
            height: calc(100vh - 8rem);
            left: 0;
            overflow: auto;
            position: fixed;
            top: 8rem;
            width: 100vw;
            z-index: 10;
            border-radius: 0.5rem 0.5rem 0 0;

            .Drawer-constrainedContent {
                margin-left: auto;
                margin-right: auto;
                max-width: calc(62.5rem - 4rem);
                padding: 2rem;
                width: 100%;

                @media screen and (min-width: ${(props) =>
                        props.theme.smallBreakpoint}) {
                    padding: 4rem;
                }
            }

            .Drawer-header {
                align-items: flex-start;
                display: flex;
                flex-direction: column-reverse;

                @media screen and (min-width: ${(props) =>
                        props.theme.smallBreakpoint}) {
                    align-items: center;
                    flex-direction: column;
                }

                @media screen and (min-width: ${(props) =>
                        props.theme.smallBreakpoint}) {
                    flex-direction: row;
                }

                .Drawer-heading {
                    font-size: 1.5rem;
                    font-weight: 700;
                    line-height: 1.5em;
                }

                .Drawer-goBack {
                    align-items: center;
                    cursor: pointer;
                    display: flex;
                    font-size: 1.25rem;
                    font-weight: 700;
                    line-height: 1.5em;
                    transition: transform 0.125s;

                    :hover {
                        transform: scale(1.025);
                    }

                    @media screen and (min-width: ${(props) =>
                            props.theme.smallBreakpoint}) {
                        margin-left: auto;
                    }

                    .Drawer-icon {
                        margin-right: 0.125rem;
                    }
                }
            }
        }
    }

    &.Drawer-isOpenFalse {
        display: none;
    }

    &.Drawer-isOpenTrue {
        display: block;
    }
`
